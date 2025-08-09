"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '@/components/ui/HamburgerMenu';

function Navbar() {
    
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className='sticky top-0 z-50 bg-white'>
            <nav className='flex items-center w-full justify-between gap-6 py-4 px-15 lg:justify-around'>
                <Link href='/' className='max-w-75 h-20 w-75 cursor-pointer relative'>
                    <Image alt="Company Logo" id="logo" src="/images/BRITS-Logo.png" fill className='object-contain'/>
                </Link>
                <div className='flex gap-2 items-center'>
                    <Link href='/' className='nav-item'>Our Services</Link>
                    <Link href='/why-choose-us' className='nav-item'>Why Choose Us</Link>
                    <Link href='/industries' className='nav-item'>Industries</Link>
                    <Link href='/tools-and-tips' className='nav-item'>Tools & Tips</Link>
                    <a className='text-BRITS-blue-dark font-semibold hidden text-nowrap items-center hover:bg-gray-200 py-2 px-3 rounded-3xl hover:text-BRITS-blue-navbar transition-colors duration-300 lg:inline-flex' href="/images/BRITSCapabilitiesStatement.pdf" target="_blank" rel="noopener noreferrer">
                        Capabilities Statement 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        

                    </a>
                    
                    <button className='nav-item hover:cursor-pointer' onClick={scrollToFooter}>Contact Us</button>

                    <HamburgerMenu />

                    {/* <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:flex text-nowrap'>
                        <p>More</p> <FaAngleDown />
                    </Link> */}
                </div>
                {/* <div>
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
                </div> */}
            </nav>

        </header>
    )
}

export default Navbar