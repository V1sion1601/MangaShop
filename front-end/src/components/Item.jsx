import React from "react";

const Item = ({ name, price, status, imgSrc }) => {
  return (
    <div className="mb-3 flex flex-col justify-center items-center shadow-md shadow-gray-400 border border-indigo-200 hover:-translate-y-1 transform transition">
      <div className="mt-4">
        <img className="w-auto h-64" src={imgSrc} alt={name} />
      </div>
      <header className="font-semibold text-xl tracking-wide">{name}</header>
      <p>
        Price: <span className="text-indigo-500 font-bold">{`$${price}`}</span>
      </p>
      <p className="mb-3">
        Status:
        <span className="text-indigo-500 font-bold">
          {status === 1 ? " Available" : " Sold out"}
        </span>
      </p>
      <button className="px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg">
        Buy
      </button>
    </div>
  );
};

export default Item;
