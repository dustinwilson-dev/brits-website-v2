'use client'

import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiX } from "react-icons/hi";
import Link from 'next/link';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <button 
            onClick={() => setIsOpen(true)}
            className='flex lg:hidden items-center justify-center bg-gray-200 px-5 py-2 rounded-3xl'
        >
            <RxHamburgerMenu className='size-6' />
        </button>

        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl font-semibold transition-all duration-200 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
                <div className='flex flex-col items-center justify-center w-full gap-2 px-6 divide-y divide-gray-300'>
                    <div className='flex w-full justify-between p-7'>
                        
                        <button 
                            onClick={() => setIsOpen(false)}
                            className='hover:cursor-pointer'
                        >
                            <HiX className='size-7' />
                        </button>
                    </div>
                    <Link href='/' onClick={() => setIsOpen(false)} className='text-BRITS-blue-light font-semibold text-nowrap w-full p-7'>Our Services</Link>
                    <Link href='/why-choose-us' onClick={() => setIsOpen(false)} className='text-BRITS-blue-light font-semibold text-nowrap w-full p-7'>Why Choose Us</Link>
                    <Link href='/industries' onClick={() => setIsOpen(false)} className='text-BRITS-blue-light font-semibold text-nowrap w-full p-7'>Industries</Link>
                    <Link href='/tools-and-tips' onClick={() => setIsOpen(false)} className='text-BRITS-blue-light font-semibold text-nowrap w-full p-7'>Tools & Tips</Link>
                    <Link href='/' onClick={() => setIsOpen(false)} className='text-BRITS-blue-light font-semibold text-nowrap w-full p-7'>Contact Us</Link>
                    <Link href='/members' onClick={() => setIsOpen(false)} className='text-BRITS-blue-light font-semibold text-nowrap w-full p-7'>Members</Link>
                </div>
        </div>
    </>
  )
}

export default HamburgerMenu