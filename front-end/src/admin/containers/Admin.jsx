import React, { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
//Components
import { GrUserAdmin } from "react-icons/gr";
import { BsMouse3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
//Page
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import Orders from "../components/Orders";
import Accounts from "../components/Accounts";
import Sales from "../components/Sales";
import Categories from "../components/Categories";
import OrderDetail from "../components/OrderDetail";
import Error from "../../components/Error";
const Admin = () => {
  const { pathname } = useLocation();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const idOrder = pathname.slice(14);

  return (
    <>
      <div className="flex flex-row px-3 bg-red-50">
        <div className="p-2 w-full flex flex-row justify-between items-center">
          <div className="w-1/3">
            <span className="pl-3 font-serif">
              <GrUserAdmin fontSize={50} className="mr-2 inline-block" />
              <NavLink to="/admin">Mangashop</NavLink>
            </span>
          </div>

          <div
            onClick={() => setHover(!hover)}
            className="w-1/3 flex justify-end items-center cursor-pointer"
          >
            <span
              className="text-right"
              onClick={() => {
                sessionStorage.clear();
                navigate("/");
              }}
            >
              Đăng xuất
            </span>
          </div>
          {hover && (
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
          )}
        </div>
      </div>
      <div className="flex flex-row h-full w-full duration-75 ">
        <div className="flex flex-col bg-red-50 pt-5 w-1/6 justify-start gap-5 font-bold items-center shadow">
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink
              className={pathname === "/admin/add" && "font-bold text-gray-700"}
              to="/admin/add"
            >
              Nhập hàng
            </NavLink>
          </div>
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink
              className={
                pathname === "/admin/products" && "font-bold text-gray-700"
              }
              to="/admin/products"
            >
              Quản lý sản phẩm
            </NavLink>
          </div>
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink
              className={
                pathname === "/admin/orders" && "font-bold text-gray-700"
              }
              to="/admin/orders"
            >
              Quản lý đơn hàng
            </NavLink>
          </div>
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink
              className={
                pathname === "/admin/accounts" && "font-bold text-gray-700"
              }
              to="/admin/accounts"
            >
              Quản lý tài khoản
            </NavLink>
          </div>
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink
              className={
                pathname === "/admin/sales" && "font-bold text-gray-700"
              }
              to="/admin/sales"
            >
              Quản lý khuyến mãi
            </NavLink>
          </div>
          <div className="hover:border-b-4 hover:border-hover active:border-b-4 active:border-hover">
            <NavLink
              className={
                pathname === "/admin/categories" && "font-bold text-gray-700"
              }
              to="/admin/categories"
            >
              Quản lý danh mục
            </NavLink>
          </div>
        </div>
        <div className="w-5/6 h-screen px-3">
          {pathname === "/admin" && (
            <div className="flex flex-col justify-center items-center h-screen">
              <BsMouse3 fontSize={50} />
              <p className="font-bold text-2xl">Nhấn để chọn chức năng</p>
            </div>
          )}

          {pathname === "/admin/add" && <AddProduct />}
          {pathname === "/admin/products" && <Products />}
          {pathname === "/admin/orders" && <Orders />}
          {pathname === "/admin/accounts" && <Accounts />}
          {pathname === "/admin/sales" && <Sales />}
          {pathname === "/admin/categories" && <Categories />}
          {pathname === "/admin/detail" && <OrderDetail id={pathname} />}
          {pathname === `/admin/detail/${idOrder}` && (
            <OrderDetail id={idOrder} />
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
