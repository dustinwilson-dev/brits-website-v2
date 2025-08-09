import React from "react";
import cardData from "@/data/services";
import Card from "./Card";

function Cards() {
  return (
    <div className="flex justify-center w-full my-5 px-10">
      <div className="flex flex-wrap justify-center items-stretch gap-12 lg:max-w-[75%]">
        {cardData.map((data, key) => (
          <Card title={data.title} body={data.body} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
