import React from 'react'
import IndentedText from '@/components/IndentedText';
import Image from 'next/image';

type HeroProps = {
    headerText: React.ReactNode;
    xoffset: number;
    image?: string;
    bodyText?: string;
    yoffset?: number;
    borderColor?: string;
    width?: number;
    height?: number;
    outline?: boolean;
}

function Hero({
    headerText, 
    xoffset = 100, 
    image, 
    bodyText, 
    yoffset = -150, 
    borderColor,
    width = 1000, 
    height = 70,
    outline = false
}: HeroProps) {
  return (
    <div className='w-full'>
        <div className='w-full bg-[rgba(65,79,134,1)] relative' style={{ height: `${height}vh` }}>
            {image && <Image 
                alt={`Background image`} 
                src={image} 
                className='opacity-65 object-cover'
                fill
            />}
        </div>
        <div className='absolute w-full h-6' style={{borderBottom: `solid ${borderColor} 23px`, background: `${borderColor}`}}></div>
        <div className='relative' style={{maxWidth: `max(min(1150px, 100%), ${xoffset}%)`, top: `${yoffset}px`}}>
            {outline && <div className="absolute pt-10 pr-10 pb-2 pl-25 top-3 -right-3 w-full h-full border-3 border-white z-0" style={{maxWidth: `${width}px`}} />}
            <div className={`relative bg-[rgb(242,242,242)] ml-auto p-10 text-center md:pt-10 md:pr-10 md:pl-25 md:text-start flex flex-col gap-6`} style={{maxWidth: `${width}px`}}>
                <h1 className='font-spinnaker text-BRITS-blue-dark text-5xl'>{headerText}</h1>
                {bodyText && <IndentedText content={bodyText}/>}
            </div>
        </div>
    </div>
  )
}

export default Hero