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
            headerText='IT Solutions for Your Industry'
            bodyText="At Blue Ribbon IT Services, we understand that each industry has 
                    unique challenges and technological needs. That’s why we offer tailored IT solutions designed to 
                    meet the specific demands of your business environment—whether you're in government, healthcare, 
                    education, finance, retail, or professional services. From custom SharePoint development and Power 
                    Platform automation to secure cloud integration and data-driven insights, our solutions are built 
                    to optimize operations, ensure compliance, and drive digital transformation. Partner with us to 
                    empower your workforce, streamline your systems, and future-proof your IT infrastructure."
            borderColor={'rgb(26, 43, 109)'} 
            image='/images/Industries-Image.webp' 
            width={1000}
            xoffset={80} 
        />
    </>
  )
}

export default Industries