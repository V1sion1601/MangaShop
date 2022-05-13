import React from "react";
import { Link } from "react-router-dom";
// import  yurucamp from "../assets/yurucamp02.jpg";
//import jjk01 from "../assets/jjk01.jpg";
const Item = ({ ID, Name, price, status, image }) => {
  console.log(ID);
  return (
   
    <div className="mb-3 flex flex-col justify-center items-center shadow-md shadow-gray-400 border border-indigo-200 hover:-translate-y-1 transform transition">
      <div className="mt-4">
      
        <img className="w-auto h-64" src={`/assets/${image}`} alt={Name} />
        
        
      </div>
      <header className="font-semibold text-xl tracking-wide mt-4">
        {Name}
      </header>
      <p className="mt-2">
        Giá: <span className="text-indigo-500 font-bold">{`${price} VNĐ`}</span>
      </p>
      <p className="mb-3 pb-2">
        Tình trạng:
        <span
          className={`${
            status === 1 ? "text-indigo-500" : "text-red-500"
          } font-bold`}
        >
          {status === 1 ? " Còn hàng" : " Hết hàng"}
        </span>
      </p>
      <Link
        to={`/details/${ID}`}
        className="px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600"
      >
        Mua
      </Link>
    </div>
  );
};

export default Item;
