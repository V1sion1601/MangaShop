import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Category = ({ arrCategory, offset }) => {
  console.log(offset);
  return (
    <div className="flex items-center justify-center gap-2 pb-5">
      <div className="hover:-translate-y-0.5 transform transition">
        <NavLink
          className="text-center p-2 rounded-lg bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-extrabold text-sm text-white"
          to={`/shop/0`}
          onClick={() => {
            offset(0);
            localStorage.setItem("currentPage", 0);
          }}
        >
          Tất cả
        </NavLink>
      </div>
      {arrCategory.map((category) => (
        <div
          className="hover:-translate-y-0.5 transform transition"
          key={category?.ID}
        >
          <NavLink
            className="text-center p-2 rounded-lg bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-extrabold text-sm text-white"
            to={`/shop/${category?.ID}`}
            onClick={() => {
              offset(0);
              localStorage.setItem("currentPage", 0);
            }}
          >
            {category?.Name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Category;
