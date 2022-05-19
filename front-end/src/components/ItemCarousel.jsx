import React from "react";
import { Carousel } from "react-responsive-carousel";
//Component
import Item from "./Item";
const ItemCarousel = ({ header, arrData }) => {
  let itemPerPage = 4;
  return (
    <>
      <div>
        <header className="font-semibold text-3xl text-indigo-500 uppercase">
          {header}
        </header>

        <Carousel showStatus={false} showIndicators={false} showArrows={true}>
          <div className="grid grid-cols-4 mt-4 gap-4 w-full">
            {arrData.slice(0, itemPerPage).map((item) => (
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
          <div className="grid grid-cols-4 mt-4 gap-4 w-full">
            {arrData.slice(itemPerPage, 8).map((item) => (
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
    </>
  );
};

export default ItemCarousel;
