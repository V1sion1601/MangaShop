import React from "react";
import { useParams } from "react-router-dom";
//Dummy data
import { itemsDataReleased } from "../utils/dummyData";
const ProductDetails = () => {
  const { productId } = useParams();
  const id = parseInt(productId);
  const product = itemsDataReleased.find((item) => item.id === id);
  return (
    <div className="flex flex-row justify-start items-start gap-10 py-10 ">
      <div className="w-1/5 h-fill">
        <img src={product.imgSrc} alt="Logo" />
      </div>
      <div className="pt-5 space-y-8 w-4/5">
        <div>
          <h1 className="font-extrabold text-5xl text-indigo-400">
            {product.name}
          </h1>
        </div>
        <div className="w-4/5 text-justify ">
          <h2 className="text-xl ">
            Publisher: <span className="font-bold">NXB Kim Đồng</span>
          </h2>
          <h2 className="text-xl mt-3">
            Description:{" "}
            <span className="w-48">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, possimus reiciendis, aspernatur tempore alias, minima
              neque ea accusamus perferendis non aperiam tenetur nisi
              perspiciatis aut tempora consectetur molestiae vitae repudiandae.
            </span>
          </h2>
          <h2 className="text-xl mt-3">
            Status:{" "}
            <span
              className={`${
                product.status === 1 ? "text-indigo-400" : "text-red-600"
              } font-bold`}
            >
              {product.status === 1 ? "Available" : "Sold out"}
            </span>
          </h2>
          {product.status === 1 && (
            <button
              className={`mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600`}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
