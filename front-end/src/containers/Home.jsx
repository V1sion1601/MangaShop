import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { HiMenu, HiUserCircle, HiShoppingCart } from "react-icons/hi";

//Elements
import Shop from "./Shop";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen transaction-height duration-75 ease-out ">
      <div className="flex flex-row px-3">
        <div className="p-2 w-full flex flex-row justify-start items-center ">
          <HiMenu fontSize={30} className="cursor-pointer inline " />
          <span className="pl-3 font-serif">MangaShop</span>
        </div>
        <div className="p-2 w-full flex flex-row gap-8 justify-center items-center ">
          <div className="hover:border-b-4 hover:border-slate-400">
            <Link to="/">Home</Link>
          </div>

          <div className="hover:border-b-4 hover:border-slate-400">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="hover:border-b-4 hover:border-slate-400">About</div>
          <div className="hover:border-b-4 hover:border-slate-400">FAQ</div>
          <div className="hover:border-b-4 hover:border-slate-400">Contact</div>
        </div>

        <div className="p-2 w-full flex flex-row justify-end items-center ">
          <HiShoppingCart
            fontSize={30}
            className="cursor-pointer inline mr-5"
            onClick={() => {
              user ? navigate("/cart") : alert("You haven't logged in");
            }}
          />
          <div onClick={() => setHover(!hover)}>
            <HiUserCircle fontSize={30} className="cursor-pointer inline " />
            <span className="pl-3 font-serif relative cursor-pointer">
              {`${user?.name ? user?.name : "Hello User"}`}
            </span>

            {user && hover ? (
              <div className="absolute top-10 right-5 max-w-lg w-40  border shadow-md">
                <ul className="cursor-pointer">
                  <li
                    className="border-b-2"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              hover && (
                <div className="absolute top-10 right-5 max-w-lg w-40  border shadow-md">
                  <ul className="cursor-pointer   ">
                    <li
                      className="border-b-2"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </li>
                    <li>Settings</li>
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="p-2">
          <Routes>
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
