import React from "react";
import { Carousel } from "react-responsive-carousel";
//Component
import Item from "./Item";
const ItemCarousel = ({ header, arrData }) => {
  return (
    <div>
      <header className="font-semibold text-3xl text-indigo-500 uppercase">
        {header}
      </header>
      {/* Carousel for Items of each category of items */}
      <Carousel showStatus={false} showIndicators={false}>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {arrData.slice(0, 4).map((item) => (
            <Item
              key={item?.ID}
              ID={item?.ID}
              Name={item?.Name}
              status={item?.quantity}
              price={item?.price}
              image={item?.image}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ItemCarousel;
