import { Resend } from 'resend';
import dotenv from 'dotenv';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { headers } from 'next/headers';
import { z } from 'zod';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const shortLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(2, '45s'), // 2 request per 45s
  prefix: 'short',
});

const dailyLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, '86400s'), // 10 request per day max
  prefix: 'daily',
});

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
  phone: z.string().max(20).optional(),
});

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

export async function POST(req: Request) {
    try {
        const { name, email, message, phone } = await req.json();

        //Honeypot field. If phone part of form is filled out, the form was filled by a bot
        if (phone) {
            return Response.json(
                { success: false, message: 'Your request could not be processed. Please try again later.' },
                { status: 403}
            );
        }

        //Check if input is too long
        const result = schema.safeParse({ name, email, message, phone });

        if (!result.success) {
            return Response.json({ success: false, message: 'Invalid input.' }, { status: 400 });
        }


        //Rate limiters. Get ip and make sure they are not spamming
        const forwardedFor = (await headers()).get('x-forwarded-for');
        const ip = forwardedFor?.split(',')[0] || 'unknown';

        const { success: successShort } = await shortLimiter.limit(ip);
        if (!successShort) {
            return Response.json(
                { success: false, message: 'Please wait a moment before sending another message.' },
                { status: 429}
            );
        }
        const { success: successDaily } = await dailyLimiter.limit(ip);
        if (!successDaily) {
            return Response.json(
                { success: false, message: "You've reached the daily limit. Please try again tomorrow." },
                { status: 429}
            );
        }


        //Get data and send email if all tests pass
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'JobInquiry@blueribbonitservices.llc',
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Message:
                ${message}
            `,
        });

        
        //Success
        return Response.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200}
        );

    } catch (error) {

        console.error('API error:', error);
        return Response.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
