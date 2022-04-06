import React from "react";
import { useParams } from "react-router-dom";
//Components
import Category from "../components/Category";

import DisplayItems from "../components/DisplayItems";
//Dummy data
import { categoryData, itemsDataReleased } from "../utils/dummyData";

const Shop = () => {
  const { categoryId } = useParams();
  const cateId = parseInt(categoryId);

  return (
    <>
      <div className="flex flex-col h-full space-y-10">
        <div className="flex flex-row mt-3">
          <Category arrCategory={categoryData} />
        </div>
        <div className="pb-7">
          <DisplayItems cateId={cateId} arrData={itemsDataReleased} />
        </div>
      </div>
    </>
  );
};

export default Shop;
