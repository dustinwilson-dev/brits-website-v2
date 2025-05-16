import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import HamburgerMenu from '@/components/ui/HamburgerMenu';

function NavbarUpgrade() {
    return (
        <div className='flex justify-around pt-5 pb-4'>
            <div className='flex gap-8'>
                <Link href='/' className='h-10 w-30 cursor-pointer relative -mt-1'>
                    <Image alt="Company Logo" id="logo" src="/images/BRITS-Logo.png" fill className='object-contain'/>
                </Link>
                <Link href='/why-choose-us' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Why Choose Us</Link>
                <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Our Services</Link>
                <Link href='/industries' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Industries</Link>
                <Link href='/tools-and-tips' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Tools & Tips</Link>
                <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Contact Us</Link>
                <HamburgerMenu />

                <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>More</Link>

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
        </div>



        // <header className='sticky top-0 z-50 bg-white'>
        //     <nav className='flex items-center w-full justify-between gap-6 py-4 px-15'>
        //         <Link href='/' className='max-w-75 h-20 w-75 cursor-pointer relative'>
        //             <Image alt="Company Logo" id="logo" src="/images/BRITS-Logo.png" fill className='object-contain'/>
        //         </Link>
        //         <div className='flex gap-8'>
        //             <Link href='/why-choose-us' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Why Choose Us</Link>
        //             <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Our Services</Link>
        //             <Link href='/industries' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Industries</Link>
        //             <Link href='/tools-and-tips' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Tools & Tips</Link>
        //             <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>Contact Us</Link>
        //             <HamburgerMenu />

        //             <Link href='/' className='text-BRITS-blue-light font-semibold hover:scale-[1.05] hidden lg:block text-nowrap'>More</Link>
        //         </div>
        //         <div>
        //             <ul className='items-end gap-8 hidden lg:flex'>
        //                 <li>
        //                     <Link href="#">
        //                         <FaFacebookF className='text-[1.2rem] text-BRITS-blue-light hover:scale-130' />
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link href="#">
        //                         <FaTwitter className='text-[1.2rem] text-BRITS-blue-light hover:scale-130' />
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link href="#">
        //                         <FaLinkedinIn className='text-[1.2rem] text-BRITS-blue-light hover:scale-130' />
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>

        // </header>
    )
}

export default NavbarUpgrade