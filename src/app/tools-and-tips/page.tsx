import React from 'react'
import Hero from '@/components/Hero'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools and Tips',
};


function ToolsAndTips() {
  return (
    <>
        <Hero  
            headerText='Tools & Tips'
            bodyText=''
            borderColor={'rgb(186, 218, 85)'} 
            image='/images/Tools-&-Tips-Image.webp' 
            width={800}
            xoffset={70} 
        />
        <div className="w-full flex justify-center mb-25">
            <div className="max-w-[70%] lg:max-w-[60%] flex flex-col items-center gap-12">
                <p className='text-lg font-light'>
                    Stay ahead with expert insights, practical tools, and time-saving tips from 
                    Blue Ribbon IT Services. Whether you're looking to streamline your SharePoint 
                    sites, automate workflows with Power Platform, or strengthen your cybersecurity 
                    posture, this section offers actionable guidance curated by our IT professionals. 
                    Explore tutorials, templates, tech recommendations, and troubleshooting tips to 
                    help your team work smarter and faster—across every project, platform, and device.
                </p>
            </div>
        </div>
        </>
  )
}

export default ToolsAndTips