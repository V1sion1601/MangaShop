import React, { useState } from "react";
//Components
// import Image from "assets/Wallpaper.jpg";
//Library
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import {
  accountbyusername,
  customerbyID,
  accountbygoogle,
  createaccountforgoogle,
  createcustomerforgoogle,
} from "../utils/dummyData";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //Validation
  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Mời bạn nhập lại email";
    } else if (!isEmail(email)) {
      msg.email = "Email của bạn không đúng, mời bạn nhập lại";
    }

    if (isEmpty(password)) {
      msg.password = "Mời bạn nhập lại mật khẩu";
    }
    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  //Submit progress
  const submitLogin = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    const res = await accountbyusername(email, password);

    if (res !== 6) {
      if (res[0]?.status == 1) {
        if (res[0]?.role != 1) {
          const res2 = await customerbyID(res[0]?.ID);
          console.log(res2);
          sessionStorage.setItem("user", JSON.stringify(res2[0]));
          toast.success("Đăng nhập thành công!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/", { replace: true });
        } else if (res[0]?.role == 1) {
          toast.success("Đăng nhập thành công!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          sessionStorage.setItem("admin", JSON.stringify(res[0]));
          navigate("/admin", { replace: true });
          window.location.reload();
        }
      } else {
        toast.error("Tài khoản đã bị khóa!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Đăng nhập không thành công", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    }
  };
  //Google response when succeed
  const responseGoogle = async (response) => {
    // sessionStorage.setItem("usergoogle", JSON.stringify(response.profileObj));
    const res = await accountbygoogle(response.profileObj.googleId);
    console.log(response.profileObj.googleId);
    if (res != 6) {
      if (res[0]?.status == 1) {
        if (res[0]?.role != 1) {
          const res2 = await customerbyID(res[0]?.ID);
          console.log(res2);
          sessionStorage.setItem("user", JSON.stringify(res2[0]));
          toast.success("Đăng nhập thành công!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/", { replace: true });
          console.log(response.profileObj.email);
        }
      } else {
        toast.error("Tài khoản đã bị khóa!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      const rescreateaccount = await createaccountforgoogle(
        response.profileObj.email,
        "123456",
        response.profileObj.googleId
      );
      const rescreatecustomer = await createcustomerforgoogle(
        response.profileObj.name,
        rescreateaccount?.id
      );
      toast.success(
        "Đăng ký tài khoản thành công, Xin hãy vào trang cá nhân" +
          " và nhập đầy đủ địa chỉ và số điện thoại để có thể tiến hành đặt hàng",
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
      );
      sessionStorage.setItem("user", JSON.stringify(rescreatecustomer));
      navigate("/profile/" + rescreatecustomer?.ID, { replace: true });
    }
  };
  //Google response when fail
  const responseGoogleFailure = () => {
    toast.error("Đăng nhập không thành công", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img
          src={"assets/Wallpaper.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col  rounded-md justify-center items-center bg-whiteOverlay inset-x-100 inset-y-14 ">
          <h1 className="text-4xl font-semibold font-title uppercase">
            Đăng nhập
          </h1>
          <form className="flex justify-center items-center flex-col">
            <label className="block mt-4">
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
            <label className="block mt-4">
              <span class="block text-md font-medium text-slate-700">
                Mật khẩu<span className="text-red-600">*</span>
              </span>
              <input
                type="password"
                className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <small className="block text-red-700">{errors.password}</small>
            </label>
            <input
              type="submit"
              class="inline-block hover:cursor-pointer hover:bg-yellow-600 w-96 mt-4 px-5 py-3 rounded-lg shadow-lg bg-yellow-700 text-white uppercase tracking-wider font-semibold text-sm"
              value="Đăng nhập"
              onClick={submitLogin}
            />
          </form>

          <div className="font-light text-lg mt-10 max-w-3">
            Đăng nhập với Google
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="shadow-lg hover:bg-yellow-200 focus:bg-yellow-200 bg-white justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FaGoogle />
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogleFailure}
              cookiePolicy="single_host_origin"
            />
          </div>
          <div className=" text-base mt-7 max-w-3">
            <p>
              Bạn chưa có tài khoản?
              <span className="text-amber-800">
                <Link to="/register"> Đăng Ký Ngay!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
