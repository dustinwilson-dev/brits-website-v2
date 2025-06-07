import React from 'react'
import Hero from '@/components/Hero'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  robots: {
    index: false,
    follow: false,
  },
};

function Careers() {
  return (
    <>
        <Hero  
            headerText='Careers at Blue Ribbon IT Services'
            bodyText="Join a team where innovation meets impact. At Blue Ribbon IT Services, we’re 
            always looking for passionate, forward-thinking professionals who want to shape the 
            future of technology. Whether your expertise is in SharePoint development, cloud solutions, 
            AI integration, cybersecurity, or IT consulting, you’ll work on meaningful projects that 
            drive real results. We offer a collaborative environment where you can grow your skills, 
            explore emerging technologies, and help businesses thrive in the digital age."
            borderColor={'rgb(26, 43, 109)'} 
            width={1000}
            xoffset={80} 
        />
    </>
  )
}

export default Careers