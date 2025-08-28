"use client"

import React, { useEffect, useRef } from "react";
import cardData from "@/data/services";
import Card from "./Card";

function Cards() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let i = 1;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            i++;
            e.target.classList.add("opacity-100");
            (e.target as HTMLElement).style.transitionDelay = `${i * 100}ms`;
            io.unobserve(e.target);
          }
        });
        i = 1;
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="flex justify-center w-full mt-5 mb-15 px-10">
      <div className="flex flex-wrap justify-center items-stretch gap-12 lg:max-w-[75%]">
        {cardData.map((data, i) => (
          <div
            key={i}
            ref={(el) => { 
              refs.current[i] = el;
            }}
            className="basis-75 reveal motion-safe:transition-all motion-safe:duration-700 opacity-0 translate-y-6 will-change-transform"
          >
            <Card title={data.title} body={data.body}/>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Cards;
