import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

function QuickLinks() {
  return (
    <nav className='fixed z-50 right-7 top-[25vh]'>
        <ul className='flex flex-col items-end gap-6'>
            <li>
                <Link href="#">
                    <FaFacebookF className='text-[1.2rem] text-black hover:scale-130' />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <FaTwitter className='text-[1.2rem] text-black hover:scale-130' />
                </Link>
            </li>
            <li>
                <Link href="#">
                    <FaLinkedinIn className='text-[1.2rem] text-black hover:scale-130' />
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default QuickLinks