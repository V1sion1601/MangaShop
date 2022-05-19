import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
//Dummy data
import {
  orderItems,
  getallorder,
  updateorder,
  numberWithComma,
} from "../../utils/dummyData";

const Orders = () => {
  const showForm = `absolute px-12 pt-6 flex flex-col z-10 justify-start items-center inset-0 bg-blackOverlay`;
  const [toggleForm, setToggleForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [ID, setID] = useState("");
  const navigate = useNavigate();
  const handleConfirm = (ID) => {
    navigate(`/admin/detail/${ID}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateorder(ID, status);
    order.find((item) => item.ID === ID).status = status;
    console.log(order);
    setToggleForm(false);
    window.location.reload();
  };
  const [order, setorder] = useState([]);
  useEffect(() => {
    const fetchorderList = async () => {
      try {
        const response = await getallorder();
        console.log("Fetch products successfully: ", response);
        setorder(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchorderList();
  }, []);
  const handleDetail = (ID) => {
    const detail = order.find((item) => item.ID === ID);
    setID(ID);
    setToggleForm(true);
    setName(detail.ID_customer);
    setPrice(detail.price);
    setQuantity(detail.quantity);
    setStatus(detail.status);
  };
  return (
    <div className="relative flex flex-col justify-center items-center h-fit ">
      <div className={toggleForm === true ? showForm : `${showForm} hidden `}>
        <div className="bg-gray-500  flex flex-col w-full   rounded mx-5">
          <div className="text-white flex pr-5 flex-row items-center w-full justify-end">
            <AiOutlineCloseCircle
              fontSize={40}
              className="cursor-pointer pt-2"
              onClick={() => setToggleForm(false)}
            />
          </div>

          <div className="text-white flex flex-col justify-center items-center text-center p-4">
            <h1 className="uppercase font-bold pb-12 text-4xl">
              Bảng Chi tiết đơn hàng {ID}
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
                    <option value="2">Giao hàng thành công</option>
                    <option value="1">Đã giao hàng</option>
                    <option value="0">Chưa Xử lý</option>
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
          <td>ID khách hàng</td>
          <td>Giá</td>
          <td>Số lượng</td>
          <td>Tình trạng</td>
          <td></td>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td className="pr-5">{item.ID}</td>
              <td>{item.ID_customer}</td>
              <td>{`${numberWithComma(item.price)} VNĐ`}</td>
              <td>{item.quantity}</td>
              <td
                className={`${
                  item?.status === 0
                    ? "text-red-500"
                    : item?.status === 1
                    ? "text-blue-500"
                    : "text-green-500"
                } font-bold capitalize`}
              >
                {item?.status === 0
                  ? "chưa xử lý"
                  : item?.status === 1
                  ? "đã giao hàng"
                  : "giao hàng thành công"}
              </td>
              <td className="p-7">
                <button
                  onClick={() => handleConfirm(item.ID)}
                  className="mr-5 bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-green-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => handleDetail(item.ID)}
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
