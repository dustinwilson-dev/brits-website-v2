import React from 'react'

type IndentedTextProps = {
    content: React.ReactNode;
    width?: number;
    styles?: string;
}

function IndentedText({
    content, 
    width=100,
    styles
}: IndentedTextProps) {
  return (
    <div className="flex" style={{width: `${width}%`}}>
        <div className="flex-none w-28 max-w-28 border-t-[3px] border-BRITS-blue-dark mt-3 mr-2" />
        <div className={`leading-[1.7] tracking-wide font-[500] ${styles}`}>{content}</div>
    </div>
  )
}

export default IndentedText