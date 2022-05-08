import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
//Dummy data
import { orderItems } from "../../utils/dummyData";
const Orders = () => {
  const showForm = `absolute px-12 flex flex-col z-10 justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay`;
  const [toggleForm, setToggleForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  const handleConfirm = (id) => {
    alert(`Cập nhật đơn hàng mã: ${id}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDetail = (id) => {
    const detail = orderItems.find((item) => item.id === id);
    setToggleForm(true);
    setName(detail.name);
    setPrice(detail.price);
    setQuantity(detail.quantity);
    setStatus(detail.status);
  };
  return (
    <div className="relative flex flex-col justify-start items-center h-screen overflow-y-scroll">
      <div className={toggleForm === true ? showForm : `${showForm} hidden `}>
        <div className="bg-gray-500  flex flex-col w-full rounded mx-5">
          <div className="text-white flex pr-5 flex-row items-center w-full justify-end">
            <AiOutlineCloseCircle
              fontSize={40}
              className="cursor-pointer pt-2"
              onClick={() => setToggleForm(false)}
            />
          </div>

          <div className="text-white flex flex-col justify-center items-center text-center p-4">
            <h1 className="uppercase font-bold pb-12 text-4xl">
              Bảng Chi tiết đơn hàng
            </h1>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <label className="flex justify-start items-center font-bold text-lg">
                  Tên:
                </label>
                <div>
                  <input
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    placeholder="Nhập tên hàng hóa"
                    value={name}
                    readOnly={true}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Giá:
                </label>
                <div>
                  <input
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    placeholder="Nhập tên hàng hóa"
                    value={price}
                    readOnly={true}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Số lượng:
                </label>
                <div>
                  <input
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    placeholder="Nhập tên hàng hóa"
                    value={quantity}
                    readOnly={true}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Tình trạng:
                </label>
                <div>
                  <select
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="delivery">Đang vận chuyển</option>
                    <option value="packaging">Đang lấy hàng</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-5">
                <input
                  type="submit"
                  class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-gray-400 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-gray-600 focus:ring focus:ring-offset-2 active:bg-gray-600"
                  value="Cập nhật đơn hàng"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
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
                  onClick={() => handleDetail(item.id)}
                  className="mr-5 bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-green-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => handleConfirm(item.id)}
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
