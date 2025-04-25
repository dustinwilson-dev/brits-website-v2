import Link from "next/link";
import React from "react";

type CardProps = {
  title: string;
  body: string;
  link: string;
};

function Card({ title, body, link }: CardProps) {
  return (
    <div className="relative mb-10 flex h-full w-full flex-col gap-5 bg-[rgb(242,242,242)] p-7 shadow-[10px_10px_0px_1px_rgba(0,0,0,0.15)]">
      <p className="text-BRITS-blue-dark text-3xl">{title}</p>
      <p className="leading-[1.7] font-[400] tracking-wider">{body}</p>
      <Link
        href={link}
        className="hover:text-BRITS-blue-dark absolute bottom-5 text-black"
      >
        + Learn More
      </Link>
    </div>
  );
}

export default Card;
