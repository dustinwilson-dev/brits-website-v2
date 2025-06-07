import { Resend } from 'resend';
import dotenv from 'dotenv';
import { NextResponse } from 'next/server';

dotenv.config();

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const formData = await req.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dwilson@blueribbonitservices.llc',
        subject: 'New Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Message:
            ${message}
        `,
    });
  console.log('Form data:', formData);

  return NextResponse.json({ success: true });
}
