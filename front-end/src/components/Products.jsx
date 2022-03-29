import React from "react";
import { useParams } from "react-router-dom";
const Products = () => {
  const { categoryId } = useParams();
  //Using this id for querying the item
  return <div className="mt-3">{categoryId}</div>;
};

export default Products;
