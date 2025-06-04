"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '@/components/ui/HamburgerMenu';

function Navbar() {
    
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
        console.log("okay");
        console.log(footer);
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
                    <button className='nav-item hover:cursor-pointer' onClick={scrollToFooter}>Contact Us</button>
                    <Link href='/members' className='nav-item'>Members</Link>

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