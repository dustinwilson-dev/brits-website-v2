import Hero from '@/components/Hero'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support Consultations",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
        <Hero 
            headerText="- This page is under construction -"
            xoffset={29}
            image="/test"
            outline
        />
        
    </>
  )
}

export default page