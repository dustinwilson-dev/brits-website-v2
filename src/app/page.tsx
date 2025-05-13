import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import FindOutMore from "@/components/FindOutMore";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import React from 'react'

const page = () => {
  return (
    <>
    
        <Hero 
            headerText={<>Blue Ribbon <br /> IT Services, LLC</>} 
            bodyText='At Blue Ribbon IT Services, LLC, our mission is to deliver top-notch 
            IT solutions and support to businesses of all sizes. Our dedicated team of experts specializes in a wide range of IT services tailored to meet the unique 
            needs of our clients. From proactive business SharePoint collaboration, software development, networking and security solutions to cloud computing, and IT 
            consulting, we provide comprehensive support to ensure seamless operations for your business.' 
            borderColor={'rgb(186, 218, 85)'} 
            image="/images/BRITS-Hero-Image.webp" 
            width={930}
            xoffset={83} 
            button
        />

        <OurServices />
        <Cards />
        <Carousel />
        <FindOutMore />
    </>
  )
}

export default page
