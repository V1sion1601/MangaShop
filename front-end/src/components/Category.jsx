import React from "react";
import { NavLink } from "react-router-dom";
const Category = ({ arrCategory }) => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      {arrCategory.map((category) => (
        <div
          className="hover:-translate-y-0.5 transform transition"
          key={category?.id}
        >
          <NavLink
            style={{ backgroundColor: `${category?.backgroundColor}` }}
            className="text-center p-2 rounded-lg focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-extrabold text-sm text-white"
            to={`/category/${category?.locate}`}
          >
            {category?.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Category;
