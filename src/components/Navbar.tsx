import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDown, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import More from '@/components/ui/More';

function Navbar() {
    return (
        <header className='sticky top-0 z-50 bg-white'>
            <nav className='flex items-center w-full justify-between gap-6 py-4 px-15'>
                <Link href='/' className='max-w-75 h-20 w-75 cursor-pointer relative'>
                    <Image alt="Company Logo" id="logo" src="/images/BRITS Logo.png" fill className='object-contain'/>
                </Link>
                <div className='flex gap-8 items-center'>
                    <Link href='/why-choose-us' className='text-BRITS-blue-light font-semibold hidden lg:block text-nowrap hover:bg-gray-200 py-2 px-3 rounded-3xl hover:text-BRITS-blue-navbar transition-colors duration-300'>Why Choose Us</Link>
                    <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Our Services</Link>
                    <Link href='/industries' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Industries</Link>
                    <Link href='/tools-and-tips' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Tools & Tips</Link>
                    <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Contact Us</Link>
                    <HamburgerMenu />

                    {/* <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:flex text-nowrap'>
                        <p>More</p> <FaAngleDown />
                    </Link> */}
                    <More />
                </div>
                <div>
                    <ul className='items-end gap-8 hidden lg:flex'>
                        <li>
                            <Link href="#">
                                <FaFacebookF className='text-[1.2rem] text-BRITS-blue-light hover:scale-130' />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <FaTwitter className='text-[1.2rem] text-BRITS-blue-light hover:scale-130' />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <FaLinkedinIn className='text-[1.2rem] text-BRITS-blue-light hover:scale-130' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Navbar