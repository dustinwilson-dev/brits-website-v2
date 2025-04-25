import React from 'react'
import Hero from '@/components/Hero'

function ToolsAndTips() {
  return (
    <>
        <Hero  
            headerText='Tools & Tips'
            bodyText=''
            borderColor={'rgb(186, 218, 85)'} 
            image='/images/Tools & Tips Image.webp' 
            width={800}
            xoffset={70} 
        />
        <p className='text-center w-full my-25'>- This page is being updated -</p>
        </>
  )
}

export default ToolsAndTips