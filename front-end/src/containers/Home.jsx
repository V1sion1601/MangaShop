import React, { useState } from "react";
import {
  NavLink,
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { HiMenu, HiUserCircle, HiShoppingCart, HiSearch } from "react-icons/hi";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
//Elements
import Shop from "./Shop";
import Profile from "./Profile";
import Cart from "../components/Cart";
import ProductDetails from "./ProductDetails";
import Error from "../components/Error";
//Components
import ProductList from "./ProductList";
import Footer from "../components/Footer";
import Search from "../components/Search";
import OrderDetail from "../components/OrderDetail";

const Home = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [hover, setHover] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-full transaction-height duration-75  ">
        <div className="flex flex-row px-3 bg-gray-400 z-50">
          <div className="p-2 w-full flex flex-row justify-start items-center ">
            <HiMenu fontSize={30} className="cursor-pointer inline " />
            <span className="pl-3 font-serif">MangaShop</span>
          </div>
          <div className="p-2 w-full flex flex-row gap-8 justify-center items-center ">
            <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
              <NavLink className={pathname === "/" && "font-semibold"} to="/">
                Trang chủ
              </NavLink>
            </div>

            <div className="hover:border-b-4 hover:border-hover">
              <NavLink
                className={pathname === "/shop/0" && "font-semibold"}
                to="/shop/0"
              >
                Sản phẩm
              </NavLink>
            </div>
          </div>

          <div className="p-2 w-full flex flex-row justify-end items-center ">
            <HiSearch
              fontSize={30}
              onClick={() => navigate("/search")}
              className="cursor-pointer inline mr-5"
            />

            <HiShoppingCart
              fontSize={30}
              className="cursor-pointer inline mr-5"
              onClick={() => {
                user
                  ? navigate("/cart")
                  : alert("Bạn chưa đăng nhập tài khoản");
              }}
            />
            <div onClick={() => setHover(!hover)}>
              <HiUserCircle fontSize={30} className="cursor-pointer inline " />
              <span className="pl-3 font-serif relative cursor-pointer">
                {`${user?.Name ? user?.Name : "Xin chào User"}`}
              </span>

              {/*Check user and hover variable*/}
              {user && hover ? (
                <div className="absolute top-10 bg-white right-5 max-w-lg w-32 shadow-md p-2 ">
                  <ul className="cursor-pointer space-y-2">
                    <li className="border-b">
                      <CgProfile className="inline-block mr-3" />
                      <Link to={`/profile/${user.ID}`}>Trang cá nhân</Link>
                    </li>
                    <li
                      className="border-b"
                      onClick={() => {
                        sessionStorage.clear();
                        navigate("/");
                      }}
                    >
                      <IoMdLogOut className="inline-block mr-3" />
                      <span>Đăng xuất</span>
                    </li>
                  </ul>
                </div>
              ) : (
                hover && (
                  <div className="absolute top-10 bg-white  right-5 max-w-lg w-32 shadow-md p-2">
                    <ul className="cursor-pointer space-y-2">
                      <li
                        className="border-b"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        <IoMdLogIn className="inline-block mr-3" />
                        <span>Đăng nhập</span>
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
              <Route path="/" element={<ProductList />} />
              <Route path="/search" element={<Search />} />

              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:categoryId" element={<Shop />} />

              <Route path="/details" element={<Shop />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details/:productId" element={<ProductDetails />} />
              <Route path="/order/detail/:id" element={<OrderDetail />} />
            </Routes>
            {sessionStorage.getItem("admin") && (
              <div className="w-full">
                <Error msg={"Không thể tìm thấy trang!"} />
              </div>
            )}
          </div>
        </div>
        <div className="bg-slate-300">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
