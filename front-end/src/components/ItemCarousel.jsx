import React from "react";
import { Carousel } from "react-responsive-carousel";
//Component
import Item from "./Item";
const ItemCarousel = ({ header, arrData }) => {
  return (
    <div>
      <header className="font-semibold text-3xl text-indigo-500">
        {header}
      </header>
      {/* Carousel for Items of each category of items */}
      <Carousel showStatus={false} showIndicators={false}>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {arrData.slice(0, 4).map((item) => (
            <Item
              key={item?.id}
              id={item?.id}
              name={item?.name}
              status={item?.status}
              price={item?.price}
              imgSrc={item?.imgSrc}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {arrData.slice(4, 8).map((item) => (
            <Item
              key={item?.id}
              id={item?.id}
              name={item?.name}
              status={item?.status}
              price={item?.price}
              imgSrc={item?.imgSrc}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ItemCarousel;
