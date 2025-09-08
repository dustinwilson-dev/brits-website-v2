import React from "react";
import IndentedText from "@/components/IndentedText";
import Image from "next/image";

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
};

function Hero({
  headerText,
  xoffset = 100,
  image,
  bodyText,
  yoffset = -150,
  borderColor,
  width = 1000,
  height = 70,
  outline = false,
}: HeroProps) {
  return (
    <div className="w-full">
      <div
        className="relative w-full bg-[rgba(65,79,134,1)]"
        style={{ height: `${height}vh` }}
      >
        {image && (
          <Image
            alt={`Background image`}
            src={image}
            className="object-cover opacity-65"
            sizes="100vw"
            priority
            fill
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
          />
        )}
      </div>
      <div
        className="absolute h-6 w-full"
        style={{
          borderBottom: `solid ${borderColor} 23px`,
          background: `${borderColor}`,
        }}
      ></div>
      <div
        className="relative"
        style={{
          maxWidth: `max(min(1150px, 100%), ${xoffset}%)`,
          top: `${yoffset}px`,
        }}
      >
        {outline && (
          <div
            className="absolute top-3 -right-3 z-0 h-full w-full border-3 border-white pt-10 pr-10 pb-2 pl-25"
            style={{ maxWidth: `${width}px` }}
          />
        )}
        <div
          className={`relative ml-auto flex flex-col gap-6 bg-[rgb(242,242,242)] p-10 text-center md:pt-10 md:pr-10 md:pl-25 md:text-start`}
          style={{ maxWidth: `${width}px` }}
        >
          <h1 className="font-spinnaker text-BRITS-blue-dark text-5xl">
            {headerText}
          </h1>
          {bodyText && <IndentedText content={bodyText} />}
        </div>
      </div>
    </div>
  );
}

export default Hero;
