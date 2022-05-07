import React, { useState } from "react";
//Elements
import isEmpty from "validator/lib/isEmpty";
import isMobilePhone from "validator/lib/isMobilePhone";
const Profile = () => {
  //For google (only using session is enough)
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [editName, setEditName] = useState(user.name);
  const [editPhone, setEditPhone] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [errors, setErrors] = useState({});

  const validateAll = () => {
    const msg = {};
    if (isEmpty(editName)) {
      msg.name = "Mời bạn nhập tên của bạn (Có độ dài từ 2 tới 18)";
    } else if (editName.length < 2 || editName.length > 18) {
      msg.name = "Tên bạn không hợp lệ";
    }

    if (isEmpty(editPhone)) {
      msg.phone = "Mời bạn nhập số điện thoại của bạn";
    } else if (isMobilePhone(editPhone, "vi-VN")) {
      msg.phone = "Số điện thoại của bạn không hợp lệ";
    }
    if (isEmpty(editAddress)) {
      msg.address = "Mời bạn nhập email của bạn";
    }

    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const submitEdit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
  };

  return (
    <div className="h-screen">
      <div className="h-fit flex flex-row items-start justify-start">
        <div className="w-2/4 h-fit">
          <header className="font-light py-3">Thông tin cá nhân</header>
          <div className="w-full">
            <form className="grid grid-cols-2 gap-5 w-full">
              <label className="py-2">Họ và tên</label>
              <div>
                <input
                  type="text"
                  placeholder="Nhập đầy đủ họ tên"
                  className="px-2 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <small className="text-blue-600">{errors.name}</small>
              </div>

              <label className="py-2">Số điện thoại </label>
              <div>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className="px-2 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
                <small className="text-blue-600">{errors.phone}</small>
              </div>

              <label className="py-2">Địa chỉ </label>
              <div>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  className="px-2 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                />
                <small className="text-blue-600">{errors.address}</small>
              </div>
              <input
                type="submit"
                class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600"
                value="Lưu thông tin"
                onClick={submitEdit}
              />
            </form>
          </div>
        </div>
        <div className="w-2/4 px-8 h-fit">
          <header className="font-light py-3">Thông tin mua sắm</header>
          <div className="grid grid-cols-2 gap-3 text-lg">
            <label>Tiên đã tiêu:</label>
            <span className="text-blue-700">800</span>
            <label>Sở thích:</label>
            <span className="text-blue-700">Manga</span>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <table className="table-auto w-full ">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>
            <td>Giá</td>
            <td>Số lượng</td>
            <td>Tình trạng đơn hàng</td>
            <td>Chi tiết</td>
          </thead>
          <tbody>
            <td></td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
