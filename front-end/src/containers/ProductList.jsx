import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
//Components
import ItemCarousel from "../components/ItemCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Dummy Data
import { itemsDataReleased } from "../utils/dummyData";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 4 };
        const response = await itemsDataReleased(params);
        console.log("Fetch products successfully: ", response);
        setProductList(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  return (
    <div className="h-full space-y-4 animate-slide-in ">
      <Carousel interval={600}>
        {productList.slice(0, 6).map((product) => (
          <div class="w-full h-64 relative ">
            <div
              class="absolute inset-0 bg-no-repeat bg-start bg-center "
              style={{ backgroundImage: `url(../assets/${product?.image})` }}
            ></div>
            <div class="opacity-0 hover:opacity-100 hover:bg-blackOverlay duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
              <Link to={`/details/${product?.ID}`}>{product?.Name}</Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div>
        <ItemCarousel arrData={productList} header={"Vừa xuất bản"} />
      </div>
    </div>
  );
};

export default ProductList;
