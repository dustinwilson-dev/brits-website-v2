"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email').max(100, 'Email is too long'),
  message: z.string().min(1, 'Message is required').max(1000, 'Message is too long'),
  phone: z.string().max(20).optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

function Footer() {
    const [apiResponse, setApiResponse] = useState<{ success: boolean; message: string } | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await res.json();
    setApiResponse(result);

    if (result.success) reset();

    setTimeout(() => {
        setApiResponse(null);
    }, 7000);
  }

  return (
    <footer className="flex justify-center items-center bg-BRITS-blue-dark p-12" id="footer">
        <div className="flex flex-col items-center justify-center gap-10 w-full lg:w-[50%]">
            <p className='font-spinnaker text-3xl font-semibold text-center text-white'>Contact Us</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-12 w-full">

                <div className="flex flex-col flex-wrap gap-7 h-full w-full justify-between items-center">
                    <input type="text" 
                        placeholder='Name *' 
                        className='h-12 w-full border-b border-white/80 bg-transparent text-white text-[1.1rem] p-2 min-w-0 flex-1 hover:border-b-3 outline-none focus:outline-none' 
                        {...register('name')}
                        required 
                    />
                    {errors.name && <p className="text-white">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col flex-wrap gap-7 w-full justify-between items-center">
                    <input type="email" 
                        placeholder='Email *' 
                        className='h-12 w-full border-b border-white/80 bg-transparent text-white text-[1.1rem] p-2 min-w-0 flex-1 hover:border-b-[3] outline-none focus:outline-none' 
                        {...register('email')}
                        required 
                    />
                    {errors.email && <p className="text-white">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col mt-2 gap-7 w-full justify-between items-center">
                    <textarea 
                        cols={30} 
                        rows={8} 
                        placeholder='Enter your message here...' 
                        className='outline-none w-full focus:outline-none bg-transparent border border-white/80] h-60 text-[1.1rem] p-2 flex-1 hover:border-3 text-white' 
                        {...register('message')}
                        required>
                    </textarea>
                    {errors.message && <p className="text-white">{errors.message.message}</p>}
                </div>

                <input
                    type="text"
                    className='hidden'
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('phone')}
                />

                <button
                    disabled={isSubmitting}
                    className={`flex justify-center items-center px-7 py-2 h-12 text-[1.3rem] bg-transparent border border-white rounded-full text-white hover:border-3 ${
                    isSubmitting ? 'bg-gray-400 opacity-50 cursor-not-allowed' : ' cursor-pointer'
                    }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {apiResponse && (
                    <p className='text-white'>
                        {apiResponse.message}
                    </p>
                )}

            </form>
            
            <div className="flex flex-col items-center sm:flex-row w-full justify-between gap-7">
                <p className='text-white font-extralight'>Phone: 1 (866) 274-8778</p>
                <p className='text-white font-extralight'>Email:&nbsp;
                    <Link href="mailto:JobInquiry@blueribbonitservices.llc" className='underline hover:cursor-pointer'>JobInquiry@blueribbonitservices.llc</Link>
                </p>
            </div>
            <p className='opacity-60 text-white'>Blue Ribbon IT Services, LLC</p>
        </div>
    </footer>
  )
}

export default Footer


