import React from "react";
import cardData from "@/data/services";
import Card from "./Card";

function Cards() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,279px)] items-center justify-center gap-12 px-3 py-12 lg:grid-cols-[repeat(3,279px)]">
      {cardData.map((data, key) => (
        <Card title={data.title} body={data.body} link={data.link} key={key} />
      ))}
    </div>
  );
}

export default Cards;
