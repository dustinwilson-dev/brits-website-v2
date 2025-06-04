import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex justify-center items-center bg-BRITS-blue-dark p-12" id="footer">
        <div className="flex flex-col items-center justify-center gap-10 w-full lg:w-[60%]">
            <p className='font-spinnaker text-3xl font-semibold text-center text-white'>Contact Us</p>
            <form className="flex flex-col items-center gap-12 w-full">
                <div className="flex flex-wrap gap-7 w-full justify-between items-center">
                    <input type="text" placeholder='Name *' className='h-12 border-b border-white/80 bg-transparent text-white text-[1.3rem] p-2 min-w-0 flex-1 hover:border-b-3 outline-none focus:outline-none' required />
                </div>
                <div className="flex flex-wrap gap-7 w-full justify-between items-center">
                    <input type="email" placeholder='Email *' className='h-12 border-b border-white/80 bg-transparent text-white text-[1.3rem] p-2 min-w-0 flex-1 hover:border-b-[3] outline-none focus:outline-none' required />
                </div>
                <div className="flex w-full justify-between items-center">
                    {/* <input type="text" placeholder='Enter your message here...' required /> */}
                    <textarea name="" cols={30} rows={10} placeholder='Enter your message here...' className='outline-none focus:outline-none bg-transparent border border-white/80] h-60 text-[1.3rem] p-2 flex-1 hover:border-3 text-white'></textarea>
                </div>
                <button className="flex justify-center items-center px-7 py-2 h-12 text-[1.3rem] bg-transparent border border-white rounded-full text-white cursor-pointer hover:border-3">Submit</button>
            </form>
            <div className="flex flex-col items-center sm:flex-row w-full justify-between gap-7">
                <p className='text-white font-extralight'>Phone: 1 (866) 274-8778</p>
                <p className='text-white font-extralight'>Email: 
                    <Link href="mailto:JobInquiry@blueribbonitservices.llc" className='underline hover:cursor-pointer'>JobInquiry@blueribbonitservices.llc</Link>
                </p>
            </div>
            <p className='opacity-60 text-white'>Blue Ribbon IT Services, LLC</p>
        </div>
    </div>
  )
}

export default Footer


