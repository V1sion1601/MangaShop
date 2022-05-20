import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import { useNavigate } from "react-router-dom";
import {
  createaccount,
  createcustomer,
  accountbyusername2,
} from "../utils/dummyData";
import { toast } from "react-toastify";
const Image = "assets/Wallpaper.jpg";

const Register = () => {
  //State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [checked, setChecked] = useState();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setname] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //Validation
  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Mời bạn nhập lại email";
    } else if (!isEmail(email)) {
      msg.email = "Email của bạn không chính xác";
    }

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
    if (!checked) {
      msg.check = "Mời bạn đánh vào ô xác nhận";
    }
    if (isEmpty(phone)) {
      msg.phone = "Mời bạn nhập số điện thoại của bạn";
    } else if (isMobilePhone(phone, "vi-VN")) {
      msg.phone = "Số điện thoại của bạn không hợp lệ";
    }
    if (isEmpty(address)) {
      msg.address = "Mời bạn nhập địa chỉ của bạn";
    }
    if (isEmpty(name)) {
      msg.name = "Mời bạn nhập lại họ và tên của bạn";
    }

    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  //Submit progress
  const submitRegister = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    const resaccount = await accountbyusername2(email);
    if (resaccount !== 6) {
      toast.error("Email đã tồn tại xin hãy đăng ký bằng Email khác", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      const rescreateaccount = await createaccount(email, password);
      const rescreatecustomer = await createcustomer(
        name,
        rescreateaccount?.id,
        address,
        phone
      );
      sessionStorage.setItem("user", JSON.stringify(rescreatecustomer));
      toast.success("Đăng ký thành công!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/", { replace: true });
    }
  };

  //Layout
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img src={Image} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col  rounded-md justify-center items-center bg-whiteOverlay inset-x-100 inset-y-4 ">
          <h1 className="text-4xl font-semibold font-title uppercase">
            Đăng ký
          </h1>
          <form className="flex justify-center items-center flex-col">
            <label className="block ">
              <span class="block text-md font-medium text-slate-700">
                Email<span className="text-red-600">*</span>
              </span>
              <input
                type="email"
                className="block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <small className="block text-red-700">{errors.email}</small>
            </label>
            <label className="block ">
              <span class="block text-md font-medium text-slate-700">
                Mật khẩu<span className="text-red-600">*</span>
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
                Mật khẩu xác thực
                <span className="text-red-600">*</span>
              </span>
              <input
                type="password"
                className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="Nhập mật khẩu xác thực "
                value={cpassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <small className="block text-red-700 ">{errors.cpassword}</small>
            </label>
            <label className="block ">
              <span class="block text-md font-medium text-slate-700">
                Họ và Tên
                <span className="text-red-600">*</span>
              </span>
              <input
                type="text"
                className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="Nhập họ và tên"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <small className="block text-red-700 ">{errors.name}</small>
            </label>
            <label className="block ">
              <span class="block text-md font-medium text-slate-700">
                Điện thoại
                <span className="text-red-600">*</span>
              </span>
              <input
                type="text"
                className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="Nhập số điện thoại"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <small className="block text-red-700 ">{errors.phone}</small>
            </label>
            <label className="block ">
              <span class="block text-md font-medium text-slate-700">
                Điạ chỉ
                <span className="text-red-600">*</span>
              </span>
              <input
                type="text"
                className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="Nhập địa chỉ"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <small className="block text-red-700 ">{errors.address}</small>
            </label>
            <div className="w-96">
              <div className="mb-2">
                <label className="block ">
                  <input
                    className="mr-3 mb-1 h-4 w-4"
                    type="checkbox"
                    onChange={(e) => {
                      setChecked(e.target.checked);
                    }}
                  />
                  <span className="text-md font-medium text-slate-700">
                    Tôi đồng ý sử dụng dịch vụ website
                  </span>
                </label>
              </div>
              <small className="block text-red-700">{errors.check}</small>
            </div>

            <input
              type="submit"
              className="inline-block hover:cursor-pointer hover:bg-yellow-600 w-96 mt-6 px-5 py-3 rounded-lg shadow-lg bg-yellow-700 text-white uppercase tracking-wider font-semibold text-sm"
              value="Đăng ký"
              onClick={submitRegister}
            />
          </form>
          <div className=" text-base mt-7 max-w-3 text-center">
            <p>
              Bạn đã có tài khoản rồi? Hãy{" "}
              <span className="text-amber-800">
                <Link to="/login">đăng nhập!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
