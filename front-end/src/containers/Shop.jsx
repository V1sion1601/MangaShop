import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Category from "../components/Category";
import Products from "../components/Products";
//Dummy data
import { categoryData } from "../utils/dummyData";

const Shop = () => {
  return (
    <div className="flex flex-col h-screen space-y-4">
      <div className="flex flex-row mt-3">
        <Category arrCategory={categoryData} />
      </div>
      <Routes>
        <Route path="/category/:categoryId" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Shop;
