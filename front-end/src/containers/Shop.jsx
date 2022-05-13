import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
//Components
import DisplayItems from "../components/DisplayItems";
//Dummy data
import { categoryData, itemsDataReleased } from "../utils/dummyData";
// import { yurucamp} from "../assets/yurucamp02.jpg"

const Shop = () => {
  const { categoryId } = useParams();
  const cateId = parseInt(categoryId);
  const curCateId = useRef(cateId);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await itemsDataReleased();
        console.log("Fetch products successfully: ", response);
        setProductList(response);
        console.log(productList);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  console.log(productList);
  return (
    <>
      <div className="flex flex-col h-full space-y-10">
        <div className="pb-7">
          <DisplayItems cateId={cateId} arrData={productList} />
        </div>
      </div>
    </>
  );
};

export default Shop;
