import React, { useState } from "react";
import {
  NavLink,
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { HiMenu, HiUserCircle, HiShoppingCart } from "react-icons/hi";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
//Elements
import Shop from "./Shop";
import Profile from "./Profile";

const Home = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [hover, setHover] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen transaction-height duration-75 ease-out ">
      <div
        style={{ backgroundColor: "#ecb34f" }}
        className="flex flex-row px-3"
      >
        <div className="p-2 w-full flex flex-row justify-start items-center ">
          <HiMenu fontSize={30} className="cursor-pointer inline " />
          <span className="pl-3 font-serif">MangaShop</span>
        </div>
        <div className="p-2 w-full flex flex-row gap-8 justify-center items-center ">
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink className={pathname === "/" && "font-semibold"} to="/">
              Home
            </NavLink>
          </div>

          <div className="hover:border-b-4 hover:border-hover">
            <NavLink
              className={pathname === "/shop" && "font-semibold"}
              to="/shop"
            >
              Shop
            </NavLink>
          </div>
          <div className="hover:border-b-4 hover:border-hover">About</div>
          <div className="hover:border-b-4 hover:border-hover">FAQ</div>
          <div className="hover:border-b-4 hover:border-hover">Contact</div>
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

            {/*Check user and hover variable*/}
            {user && hover ? (
              <div className="absolute top-10 bg-white right-5 max-w-lg w-32 shadow-md p-2 ">
                <ul className="cursor-pointer space-y-2">
                  <li className="border-b">
                    <CgProfile className="inline-block mr-3" />
                    <Link to={`/profile/${user.googleId}`}>Profile</Link>
                  </li>
                  <li
                    className="border-b"
                    onClick={() => {
                      sessionStorage.clear();
                      navigate("/");
                    }}
                  >
                    <IoMdLogOut className="inline-block mr-3" />
                    <span>Logout</span>
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
                      <IoMdLogIn className="inline-block mr-3" />
                      Login
                    </li>
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
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;