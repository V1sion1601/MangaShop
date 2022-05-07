import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
//Components
import { GrUserAdmin } from "react-icons/gr";
import { BsMouse3 } from "react-icons/bs";
//Page
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import Orders from "../components/Orders";
import Accounts from "../components/Accounts";
import Sales from "../components/Sales";
import Categories from "../components/Categories";
const Admin = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="flex flex-row h-full duration-75 ">
        <div className="flex flex-col bg-red-50 w-1/6 justify-start gap-5 font-bold items-center shadow">
          <div className="font-bold uppercase flex flex-row items-center justify-center w-full px-4 py-4">
            <GrUserAdmin fontSize={50} className="mr-2 " />
            <NavLink to="/admin">Admin</NavLink>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Admin;
