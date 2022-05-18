import React, { useEffect, useState } from "react";
//Elements
import { useNavigate } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import { toast } from "react-toastify";
import isMobilePhone from "validator/lib/isMobilePhone";
import {
  updatepassword,
  updateprofile,
  getorderbyId,
  numberWithComma,
} from "../utils/dummyData";

const Profile = () => {
  //For google (only using session is enough)
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [editName, setEditName] = useState(user.Name);
  const [editPhone, setEditPhone] = useState(user.phone);
  const [editAddress, setEditAddress] = useState(user.adress);
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [order, setorder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchorderList = async () => {
      try {
        const response = await getorderbyId(user.ID);
        console.log("Fetch products successfully: ", response);
        setorder(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchorderList();
  }, []);
  const validatepassword = () => {
    const msg = {};
    if (isEmpty(password)) {
      msg.password = "Mời bạn nhập lại mật khẩu";
    } else if (password < 6) {
      msg.password = "Mật khẩu của bạn quá yếu, hãy nhập lại mật khẩu";
    }
    if (isEmpty(cpassword)) {
      msg.cpassword = "Mời bạn nhập mật khẩu xác thực";
    } else if (cpassword !== password) {
      msg.cpassword = "Mật khẩu và mật khẩu xác thực của bạn không giống nhau";
    }
    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
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

  const submitEdit = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    const res = await updateprofile(
      user.ID,
      editName,
      editAddress.replace("/", "."),
      editPhone,
      user.ID_account
    );
    sessionStorage.setItem("user", JSON.stringify(res));
    toast.success("Thay đổi thành công!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submitEditpassword = async (e) => {
    e.preventDefault();
    const isValid = validatepassword();
    console.log(isValid);
    if (!isValid) return;
    const res = await updatepassword(user.ID_account, password);
    if (res === 1) {
      toast.success("Thay đổi thành công!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handledetail = (ID) => {
    navigate("/order/detail/" + ID);
  };
  return (
    <div className="h-full">
      <div className="h-fit flex flex-row items-start justify-start">
        <div className="w-2/4 h-fit">
          <header className="font-semibold py-3">Thông tin cá nhân</header>
          <div className="w-full">
            <label className="py-2">Họ và tên</label>
            <div>
              <input
                type="text"
                placeholder="Nhập đầy đủ họ tên"
                className="px-2 my-4 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
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
                className="px-2 py-2 my-4 outline-none rounded-md w-full focus:outline-indigo-400"
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
                className="px-2 py-2 my-4  outline-none rounded-md w-full focus:outline-indigo-400"
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
          </div>
        </div>
        <div className="w-2/4 px-8 h-fit">
          <header className="font-semibold py-3">Thông tin tài khoản</header>
          <label className="block ">
            <span class="block text-md font-medium text-slate-700">
              Mật khẩu mới<span className="text-red-600">*</span>
            </span>
            <input
              type="password"
              className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
              placeholder="Nhập password (6 kí tự trở lên)"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <small className="block text-red-700">{errors.password}</small>
          </label>
          <label className="block ">
            <span class="block text-md font-medium text-slate-700">
              Nhập lại mật khẩu
              <span className="text-red-600">*</span>
            </span>
            <input
              type="password"
              className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
              placeholder="Nhập lại mật khẩu "
              value={cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
          </label>
          <input
            type="submit"
            class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600"
            value="Thay đổi mật khẩu"
            onClick={submitEditpassword}
          />
        </div>
      </div>
      <div className="pt-5 h-full overflow-y-scroll border-t-2">
        <header className="capitalize font-bold text-lg mb-6">
          Bảng thông tin hóa đơn
        </header>
        <table className="table-auto w-full ">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>
            <td>Giá</td>
            <td>Số lượng</td>
            <td>Tình trạng đơn hàng</td>
            <td>Chi tiết</td>
          </thead>
          <tbody>
            {order.map((data) => (
              <>
                <tr
                  className="text-left border-b border-indigo-200 "
                  key={data.ID}
                >
                  <td>{data?.ID}</td>
                  <td>{`${numberWithComma(data?.price)} VNĐ`}</td>
                  <td>{data?.quantity}</td>
                  <td
                    className={`${
                      data?.status === 0
                        ? "text-red-500"
                        : data?.status === 1
                        ? "text-blue-500"
                        : "text-green-500"
                    } font-bold capitalize`}
                  >
                    {data?.status === 0
                      ? "chưa xử lý"
                      : data?.status === 1
                      ? "đã giao hàng"
                      : "giao hàng thành công"}
                  </td>
                  <td className="py-5">
                    <button
                      onClick={() => handledetail(data?.ID)}
                      className="mr-5 bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-green-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
