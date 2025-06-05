import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tech Support",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
        <div className='h-40 flex items-center justify-center'>- This page is under construction -</div>
    </>
  )
}

export default page