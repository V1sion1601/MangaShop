import React, { useState } from "react";
//Components
import Image from "../assets/Wallpaper.jpg";
//Library
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  //Validation
  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "Please input your Email";
    } else if (!isEmail(email)) {
      msg.email = "Your email is incorrect";
    }

    if (isEmpty(password)) {
      msg.password = "Please input your Password";
    }
    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  //Submit progress
  const submitLogin = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    navigate("/", { replace: true });
  };
  //Google response when succeed
  const responseGoogle = (response) => {
    sessionStorage.setItem("user", JSON.stringify(response.profileObj));
    toast.success("Login successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/", { replace: true });
  };
  //Google response when fail
  const responseGoogleFailure = () => {
    toast.error("Login unsuccessfully!", {
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
        <img src={Image} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col  rounded-md justify-center items-center bg-whiteOverlay inset-x-100 inset-y-14 ">
          <h1 className="text-6xl font-semibold font-title">Login</h1>
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
                Password<span className="text-red-600">*</span>
              </span>
              <input
                type="password"
                className="inline-block focus:ring-1 pl-3 py-2 mt-2 mb-2 bg-white  w-96 gap-2 rounded-lg outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <small className="block text-red-700">{errors.email}</small>
            </label>
            <input
              type="submit"
              class="inline-block hover:cursor-pointer hover:bg-yellow-600 w-96 mt-4 px-5 py-3 rounded-lg shadow-lg bg-yellow-700 text-white uppercase tracking-wider font-semibold text-sm"
              value="Login"
              onClick={submitLogin}
            />
          </form>

          <div className="font-light text-lg mt-10 max-w-3">
            Login with an existing account
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
            {/* <button
              type="button"
              className="bg-white shadow-lg hover:bg-yellow-200 focus:bg-yellow-200 justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            >
              <FaFacebook />
            </button> */}
          </div>
          <div className=" text-base mt-7 max-w-3">
            <p>
              Do you have any account?
              <span className="text-amber-800">
                <Link to="/register">Create it!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
