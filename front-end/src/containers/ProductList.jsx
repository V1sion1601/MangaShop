import React from "react";
import { Link } from "react-router-dom";
//Components
import Item from "../components/Item";
//Assets
import Banner from "../assets/Banner.jpg";
import TestItem from "../assets/TestItem.jpg";
const ProductList = () => {
  return (
    <div className="h-screen space-y-4">
      <div class="w-full h-64 bg-red-100 relative">
        <div
          class="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${Banner})` }}
        ></div>
        <div class="opacity-0 hover:opacity-100 hover:bg-transparent hover:bg-blackOverlay duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
          <Link to="/">86: Eighty-Six</Link>
        </div>
      </div>
      <div>
        <header className="font-semibold tracking-wider text-3xl">
          Just Released
        </header>
        <div className="grid grid-cols-4 mt-4 gap-4">
          <Item
            name="86: Eighty-Six"
            price={500}
            status={1}
            imgSrc={TestItem}
          />
          <Item
            name="86: Eighty-Six"
            price={500}
            status={1}
            imgSrc={TestItem}
          />
          <Item
            name="86: Eighty-Six"
            price={500}
            status={1}
            imgSrc={TestItem}
          />
          <Item
            name="86: Eighty-Six"
            price={500}
            status={1}
            imgSrc={TestItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
