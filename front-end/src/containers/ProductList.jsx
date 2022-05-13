import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
//Components
import ItemCarousel from "../components/ItemCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Dummy Data
import { itemsDataReleased, itemsDataTrending } from "../utils/dummyData";
//Assets
const Banner = "../assets/Banner.jpg";
const Banner2 = "../assets/Banner2.jpg";



const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
  const fetchProductList = async () => {
  try {
  const params = { _page: 1, _limit: 4 };
  const response = await itemsDataReleased(params);
  console.log('Fetch products successfully: ', response);
  setProductList(response);
  console.log(productList);
  } catch (error) {
  console.log('Failed to fetch product list: ', error);
  }
  }
  fetchProductList();
  }, []);
  return (
    <div className="h-full space-y-4 animate-slide-in ">
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
        <ItemCarousel arrData={productList} header={"Vừa xuất bản"} />
        <ItemCarousel arrData={productList} header={"Đang thịnh hành"} />
      </div>
    </div>
  );
};

export default ProductList;
