import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Software Development",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
        <div className='h-40 flex items-center justify-center'>- Under construction -</div>
    </>
  )
}

export default page