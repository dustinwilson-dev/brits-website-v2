'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const More = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
        className='relative'
    >

        <button 
            className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hover:cursor-pointer hidden lg:flex items-center justify-center gap-0.5 text-nowrap'
            onMouseEnter={() => setIsOpen(true)}
        >
            
            <p>More</p> 
            <FaAngleDown className={` transition-all duration-200 ${
                isOpen && 'rotate-180'}`}
            />
        </button>

        { isOpen && <div 
        
            onMouseLeave={() => setIsOpen(false)}
            className={`absolute border-2 left-1/2 -translate-x-1/2 top-full mt-2 p-6 w-[200px] rounded-lg bg-BRITS-blue-navbar text-white shadow-lg opacity-0 scale-95 transition-all duration-200 z-50 ${
                isOpen && 'opacity-100 scale-100'}`}
        >
            <div className='absolute left-1/2 -translate-x-1/2 -top-0.5 bg-BRITS-blue-navbar rotate-45 w-10 h-10 rounded-sm -z-10' />
            <div className='flex flex-col gap-3'>
                <Link href='/book-online' className='text-gray-300 hover:text-white font-semibold hidden lg:block text-nowrap'>Book Online</Link>
                <Link href='/members' className='text-gray-300 hover:text-white font-semibold hidden lg:block text-nowrap'>Members</Link>
            </div>
        </div> }
    </div>
  )
}

export default More