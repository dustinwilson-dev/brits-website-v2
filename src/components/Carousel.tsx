"use client";

import React, { useState } from "react";
import carouselData from "@/data/feedback";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaCircle, FaRegCircle } from "react-icons/fa";

function Carousel() {
  const [index, setIndex] = useState(0);

  const NextItem = () => {
    setIndex((index) => {
      if (index === carouselData.length - 1) return 0;
      return index + 1;
    });
  };

  const PreviousItem = () => {
    setIndex((index) => {
      if (index === 0) return carouselData.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="bg-BRITS-blue-dark relative flex min-h-[45vh] w-full flex-col items-center justify-around gap-7 overflow-hidden border-b-23 border-b-[rgb(186,218,85)] px-10 pt-15 pb-10">
      <div
        className="flex w-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {carouselData.map((item, currentIndex) => (
          <div
            className={`flex h-full w-full flex-none flex-col items-center justify-center transition-opacity duration-[2000ms] ${
              index === currentIndex
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
            key={currentIndex}
          >
            <p className="font-spinnaker mb-6 max-w-125 text-center text-3xl font-[600] text-white">
              - Feedback -
            </p>
            <p className="font-spinnaker min-h-38 max-w-125 text-center text-[1.8rem] text-white">
              "{item.feedback}"
            </p>
            <p className="max-w-125 text-center font-[600] text-[rgb(186,218,85)]">
              {item.name}
              <br />
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={PreviousItem}
        className="absolute top-0 h-full cursor-pointer border-none bg-transparent p-12 text-[3rem] text-white transition-colors duration-300 hover:bg-[rgb(0,0,0,0.1)]"
        style={{ left: 0 }}
      >
        <IoIosArrowRoundBack />
      </button>
      <button
        onClick={NextItem}
        className="absolute top-0 h-full cursor-pointer border-none bg-transparent p-12 text-[3rem] text-white transition-colors duration-300 hover:bg-[rgb(0,0,0,0.1)]"
        style={{ right: 0 }}
      >
        <IoIosArrowRoundForward />
      </button>

      <div className="flex items-center justify-center">
        {carouselData.map((item, currentIndex) => (
          <button
            className={`cursor-pointer border-none bg-transparent p-[5px] text-[0.6rem] text-white hover:scale-[1.2] ${
              index === currentIndex && "scale-[1.2]"
            }`}
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
          >
            {index === currentIndex ? <FaRegCircle /> : <FaCircle />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
