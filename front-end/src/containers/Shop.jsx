import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Components
import DisplayItems from "../components/DisplayItems";
//Dummy data
import { categoryData, itemsDataReleased } from "../utils/dummyData";
import { TailSpin } from "react-loader-spinner";

const Shop = () => {
  const { categoryId } = useParams();
  const cateId = parseInt(categoryId);

  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await itemsDataReleased();
        console.log("Fetch products successfully: ", response);
        setProductList(response);
        setLoading(false);
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
      {loading && (
        <div className="flex flex-row justify-center items-center h-screen">
          <TailSpin />
        </div>
      )}
      <div className="flex flex-col h-full space-y-14">
        <div className="pb-7">
          <DisplayItems cateId={cateId} arrData={productList} />
        </div>
      </div>
    </>
  );
};

export default Shop;
