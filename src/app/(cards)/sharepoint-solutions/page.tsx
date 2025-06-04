import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sharepoint Support & Integration",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
        <div className='h-40 flex items-center justify-center flex-col'>
            <p>Blue Ribbon IT Services provides SharePoint integration services. We are not affiliated with Microsoft.</p>
            <p>- This page is under construction -</p>
        </div>
    </>
  )
}

export default page