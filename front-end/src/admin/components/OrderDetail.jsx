import React from "react";

const OrderDetail = ({ id }) => {
  console.log(id);
  return (
    <div>
      <h1 className="text-center font-bold py-5 text-lg uppercase">{`Chi tiết đơn hàng của mã đơn hàng: ${id}`}</h1>
      <table className="table-auto w-full pt-4">
        <thead className="border-b-2 border-gray-300 font-bold">
          <tr>
            <td>ID sản phẩm</td>
            <td>Hình ảnh</td>
            <td>Số lượng</td>
            <td>Giá tiền</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default OrderDetail;
