import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

//Components
import ItemCarousel from "../components/ItemCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Assets
import Banner from "../assets/Banner.jpg";
import Banner2 from "../assets/Banner2.jpg";

//Dummy Data
import { itemsDataReleased, itemsDataTrending } from "../utils/dummyData";

const ProductList = () => {
  const todayDate = new Date().toLocaleString();
  return (
    <div className="h-screen space-y-4 ">
      {/* Setup for Banner (Advertisement) */}
      <Carousel autoPlay={true} interval={600}>
        <div class="w-full h-64 relative ">
          <div
            class="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${Banner})` }}
          ></div>
          <div class="opacity-0 hover:opacity-100 hover:bg-blackOverlay duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
            <Link to="/">86: Eighty-Six</Link>
          </div>
        </div>

        <div class="w-full h-64 relative ">
          <div
            class="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${Banner2})` }}
          ></div>
          <div class="opacity-0  hover:opacity-100 hover:bg-blackOverlay duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
            <Link to="/">Re:Zero</Link>
          </div>
        </div>
      </Carousel>
      <div>
        <ItemCarousel arrData={itemsDataReleased} header={"Just Released"} />
        <ItemCarousel arrData={itemsDataTrending} header={"Trending"} />
      </div>
    </div>
  );
};

export default ProductList;
