import React, { useState } from "react";

import { orderItems } from "../../utils/dummyData";
const Orders = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen overflow-y-scroll">
      <header className="font-bold uppercase text-2xl mb-5 pt-6">
        Quản lý hóa đơn
      </header>

      <table className="table-auto w-full ">
        <thead className="border-b-2   border-gray-300 font-bold ">
          <td>ID</td>

          <td>Tên khách hàng</td>
          <td>Giá</td>
          <td>Số lượng</td>
          <td>Tình trạng</td>
          <td></td>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{item.id}</td>

              <td>{item.name}</td>
              <td>{`${item.price} VNĐ`}</td>
              <td>{item.quantity}</td>
              <td
                className={`${
                  item.status === "delivery" ? "text-blue-500" : "text-red-500"
                } font-bold capitalize`}
              >
                {item.status}
              </td>
              <td className="p-7">
                <button
                  onClick={() => {
                    console.log(item.id);
                  }}
                  className="mr-5 bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-green-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => {
                    console.log(item.id);
                  }}
                  className="bg-red-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-red-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Xác nhận
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
