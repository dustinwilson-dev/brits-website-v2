"use client"

import React from "react";

type CardProps = {
  title: string;
  body: string;
};

function Card({ title, body }: CardProps) {
    
  const scrollToFooter = () => {
      const footer = document.getElementById('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pb-15 flex flex-col bg-[rgb(242,242,242)] p-7 shadow-[10px_10px_0px_1px_rgba(0,0,0,0.15)] h-full">
      <p className="text-BRITS-blue-dark text-3xl mb-3">{title}</p>
      <p className="leading-[1.7] font-[400] tracking-wider">{body}</p>
      <button
        onClick={scrollToFooter}
        aria-label="Scroll to contact form"
        className="hover:text-BRITS-blue-dark absolute bottom-5 text-black hover:cursor-pointer"
      >
        + Learn More
      </button>
    </div>
  );
}

export default Card;
