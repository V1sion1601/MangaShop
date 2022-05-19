import React, { useEffect, useState } from "react";
//Dummy data
import { getsale } from "../utils/dummyData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  numberWithComma,
  createorder,
  createorder_detail,
  updatecart,
} from "../utils/dummyData";
import Error from "./Error";
import { BiTrashAlt } from "react-icons/bi";
import isEmpty from "validator/lib/isEmpty";
const Cart = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [quantityProduct, setQuantityProduct] = useState([]);
  let orders = JSON.parse(sessionStorage.getItem("cart"));
  const [sale, setsale] = useState([]);
  useEffect(() => {
    const fetchsaleList = async () => {
      try {
        const response = await getsale();
        setsale(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchsaleList();
    // fetchsaleList();
  }, []);
  if (!orders) {
    orders = [];
  }
  let quantity = [];
  let totalQuantity = 0,
    totalPrice = 0;

  orders.map((order) => {
    totalQuantity += parseInt(order.quantity);
    totalPrice += parseInt(order.quantity) * parseInt(order.price);
    sale.map((data) => {
      console.log(document.getElementById("sales").value);
      if (data?.id == document.getElementById("sales").value) {
        var today = new Date();
        var date;
        if (today.getMonth() < 9)
          date =
            today.getFullYear() +
            "-0" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        else {
          date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        }
        if (data.date_start < date && data.date_finish > date) {
          if (totalPrice >= parseInt(data.Require))
            totalPrice = totalPrice - (totalPrice * data.Percent) / 100;
          console.log(totalPrice);
        }
      }
    });
    quantity.push(parseInt(order.quantity));
  });
  const totalaftersale = () => {
    console.log(document.getElementById("sales").value);
    sale.map((data) => {
      console.log(document.getElementById("sales").value);
      if (data?.id == document.getElementById("sales").value) {
        var today = new Date();
        var date;
        if (today.getMonth() < 9)
          date =
            today.getFullYear() +
            "-0" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        else {
          date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        }
        if (data.date_start < date && data.date_finish > date) {
          if (totalPrice >= parseInt(data.Require))
            totalPrice = totalPrice - (totalPrice * data.Percent) / 100;
          console.log(totalPrice);
        }
      }
    });
    setQuantityProduct(quantity);
  };
  const handlePayment = async () => {
    console.log(user.adress);

    if (
      user.adress != "" &&
      user.phone != "" &&
      user.adress !== 6 &&
      user.phone !== 6
    ) {
      const resorder = await createorder(user.ID, totalPrice, totalQuantity);
      orders.map((data, index) => {
        createorder_detail(resorder?.id, data.ID, quantityProduct[index]);
        updatecart(data.ID, quantityProduct[index]);
      });
      const decision = window.confirm("Bạn có muốn mua tiếp không?");
      if (decision) {
        navigate("/shop");
      } else {
        sessionStorage.removeItem("cart");
        toast.success(
          "Bạn đã thanh toán thành công, vui lòng hãy chờ để được xử lý quá trình thanh toán"
        );
        setTimeout(() => {
          navigate(`/profile/${user?.ID}`, { replace: true });
        }, 2500);
      }
    } else {
      toast.error("Mời bạn nhập số điện thoại và địa chỉ");
      navigate(`/profile/${user?.ID}`, { replace: true });
    }
  };
  quantityProduct.push(...quantity);
  const handleIncrement = (index) => {
    quantity[index]++;
    orders[index].quantity = quantity[index];
    if (quantity[index] > 20) {
      quantity[index] = 20;
    }
    sessionStorage.setItem("cart", JSON.stringify(orders));
    setQuantityProduct(quantity);
  };
  const handleDecrement = (index) => {
    quantity[index]--;
    if (quantity[index] < 1) {
      quantity[index] = 1;
    }
    orders[index].quantity = quantity[index];
    sessionStorage.setItem("cart", JSON.stringify(orders));

    setQuantityProduct(quantity);
  };

  const handleDelete = (index) => {
    const decision = window.confirm("Bạn có xóa sản phẩm này không?");
    if (decision) {
      orders.splice(index, 1);
      sessionStorage.setItem("cart", JSON.stringify(orders));
      alert("Xóa thành công");
      navigate("/cart");
    }
  };
  return (
    <div className="h-full w-full">
      <header className="text-4xl text-indigo-400 font-semibold tracking-wide uppercase">
        Thanh toán
      </header>
      <div className="pt-6 ">
        {orders.length > 0 ? (
          <>
            <table className="table-auto w-full ">
              <thead className="text-left border-b border-indigo-200 pb-6">
                <tr>
                  <th>ID</th>
                  <th>Hình ảnh</th>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <>
                    <tr
                      className="text-left border-b border-indigo-200 "
                      key={item.ID}
                    >
                      <td>{item.ID}</td>
                      <td className="py-4">
                        <img
                          className="w-32 h-40"
                          src={`/assets/${item?.image}`}
                          alt={`img-${item.ID}`}
                        />
                      </td>
                      <td>{item.Name}</td>

                      <td>
                        <button
                          className="mr-3 p-3 rounded bg-green-400 text-white font-bold shadow-sm hover:bg-green-600"
                          onClick={() => handleIncrement(index)}
                        >
                          +
                        </button>
                        <input className="p-3" value={quantityProduct[index]} />
                        <button
                          className="ml-3 p-3 rounded bg-red-400 text-white font-bold shadow-sm hover:bg-red-600"
                          onClick={() => handleDecrement(index)}
                        >
                          -
                        </button>
                      </td>
                      <td>{`${numberWithComma(
                        item.price * item.quantity
                      )} VNĐ`}</td>
                      <td>
                        <button onClick={() => handleDelete(index)}>
                          <BiTrashAlt fontSize={40} />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tfoot>
                <tr className="h-7">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="font-bold text-lg">Voucher:</td>
                  <td className="py-3">
                    <select
                      id="sales"
                      className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      onChange={(e) => totalaftersale(e)}
                    >
                      {sale.map((data) => (
                        <option value={data?.id}>{data?.Name}</option>
                      ))}
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
                  <td className="font-semibold text-lg">{`${numberWithComma(
                    totalPrice
                  )} VNĐ`}</td>
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
          </>
        ) : (
          <div className="w-full">
            <Error msg={"Hiện bạn chưa thêm sản phẩm nào hết"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
