import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getorderdetailbyid,
  productbyID,
  numberWithComma,
} from "../utils/dummyData";
const OrderDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [orderdetail, setorderdetail] = useState([]);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchorderList = async () => {
      try {
        const response = await getorderdetailbyid(id);
        console.log("Fetch products successfully: ", response);
        setorderdetail(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchorderList();
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-center font-bold py-5 text-lg uppercase">{`Chi tiết đơn hàng của mã đơn hàng: ${id}`}</h1>
      <table className="table-auto w-full pt-4">
        <thead className="border-b-2 border-gray-300 font-bold">
          <tr>
            <td>Tên sản phẩm</td>
            <td>Hình ảnh</td>
            <td>Số lượng</td>
            <td>Giá tiền</td>
          </tr>
        </thead>

        <tbody>
          {orderdetail.map((data) => (
            <>
              <tr
                className="text-left border-b border-indigo-200 "
                key={data.ID}
              >
                <td>{data?.Name}</td>
                <td className="py-5">
                  <img
                    className="w-40 h-45"
                    src={`/assets/${data?.image}`}
                    alt={`img-${data?.ID}`}
                  />
                </td>
                <td>{data?.quantity}</td>
                <td>{`${numberWithComma(data?.price)} VNĐ`}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;
