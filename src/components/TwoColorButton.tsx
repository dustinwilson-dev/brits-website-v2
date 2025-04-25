"use client"

import React, { useState } from 'react'

type TwoColorButtonProps = {
    buttonText: string;
    width?: number;
    height?: number;
    leftColor?: string;
    rightColor?: string;
}

function TwoColorButton({
    buttonText, 
    width = 100, 
    height = 70, 
    leftColor = 'rgb(26, 43, 109)', 
    rightColor = 'rgb(212, 19, 23)'
}: TwoColorButtonProps) {
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  return (
    <div className='absolute right-0 flex hover:cursor-pointer' style={{width: `${width}px`, height: `${height}px`}}>
        <div className='flex-1 text-white transition-colors duration-300 flex justify-center items-center px-2 py-5' style={{backgroundColor: hoverColor || leftColor}}
          onMouseEnter={() => setHoverColor(leftColor)}
          onMouseLeave={() => setHoverColor(null)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
        </div>
        <div className='flex-4 text-white transition-colors duration-300 flex justify-center items-center px-2 py-5' style={{backgroundColor: hoverColor || rightColor}}
          onMouseEnter={() => setHoverColor(rightColor)}
          onMouseLeave={() => setHoverColor(null)}>
            <p className='whitespace-nowrap text-white'>{buttonText}</p>
        </div>
    </div>
  )
}

export default TwoColorButton