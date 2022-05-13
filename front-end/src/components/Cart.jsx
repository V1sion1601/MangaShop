import React from "react";
//Dummy data
import { cartItems } from "../utils/dummyData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const orders = JSON.parse(sessionStorage.getItem("cart"));

  let totalQuantity = 0,
    totalPrice = 0;
  orders.map((order, index) => {
    console.log(order);
    totalQuantity += parseInt(order.quantity);
    totalPrice += parseInt(order.quantity) * parseInt(order.price);
  });

  const handlePayment = () => {
    sessionStorage.removeItem("cart");
    toast.success(
      "Bạn đã thanh toán thành công, vui lòng hãy chờ để được xử lý quá trình thanh toán"
    );
    setTimeout(() => {
      navigate(`/profile/${user?.googleId}`, { replace: true });
    }, 2500);
  };

  return (
    <div className="h-screen w-full">
      <header className="text-4xl text-indigo-400 font-semibold tracking-wide">
        Thanh toán
      </header>
      <div className="pt-6 ">
        <table className="table-auto w-full ">
          <thead className="text-left border-b border-indigo-200 pb-6">
            <tr>
              <th>ID</th>
              <th>Hình ảnh</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Giá tiền</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr
                className="text-left border-b border-indigo-200 "
                key={item.ID}
              >
                <td>{item.ID}</td>
                <td>
                  <img
                    className="w-50 h-40"
                    src={`/assets/${item?.image}`}
                    alt={`img-${item.ID}`}
                  />
                </td>
                <td>{item.Name}</td>
                <td>{item.quantity}</td>
                <td>{`${item.price} VND`}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="h-7">
              <td></td>
              <td></td>
              <td></td>
              <td className="font-bold text-lg">Voucher:</td>
              <td className="py-3">
                <select className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                  <option>Mega Yuru Camp</option>
                </select>
              </td>
            </tr>
            <tr className="h-7">
              <td></td>
              <td></td>
              <td></td>
              <td className="font-bold text-lg">Số lượng:</td>
              <td className="font-semibold text-lg py-3">{`${totalQuantity}`}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-bold text-lg">Tồng giá tiền: </td>
              <td className="font-semibold text-lg">{`${totalPrice} VNĐ`}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-semibold text-lg pt-6">
                <button
                  onClick={handlePayment}
                  className="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase"
                >
                  Đặt hàng
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
