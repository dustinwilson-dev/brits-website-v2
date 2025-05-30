import React from 'react'
import Hero from '@/components/Hero'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
};

function Industries() {
  return (
    <>
        <Hero  
            headerText="IT Solutions for Your Industry"
            borderColor={'rgb(26, 43, 109)'} 
            image='/images/Industries-Image.webp' 
            width={800}
            xoffset={70} 
        />
        <p className='text-center w-full my-25'>- This page is being updated -</p>
    </>
  )
}

export default Industries