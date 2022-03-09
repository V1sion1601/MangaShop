import React from "react";

import Image from "../assets/Wallpaper.jpg";

import { FaGoogle, FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img src={Image} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col  rounded-md justify-center items-center bg-blackOverlay inset-x-100 inset-y-14 ">
          <form className="flex justify-center items-center flex-col">
            <input
              type="text"
              className="inline-block py-2 mt-4 bg-white  w-96 gap-2 rounded-lg outline-none"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="inline-block py-2 mt-2 bg-white  w-96 gap-2 rounded-lg outline-none"
              placeholder="Password"
              required
            />
            <button class="inline-block w-96 mt-4 px-5 py-3 rounded-lg shadow-lg bg-yellow-700 text-white uppercase tracking-wider font-semibold text-sm">
              Login
            </button>
          </form>

          <div className="font-light text-lg mt-10 max-w-3">
            Login with an existing account
          </div>
          <div className="flex flex-row gap-4 mt-3">
            <button
              type="button"
              className=" shadow-lg bg-white justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="  bg-white shadow-lg  justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            >
              <FaFacebook />
            </button>
          </div>
          <div className="font-light text-base mt-10 max-w-3">
            <p>
              Do you have any account?{" "}
              <span className="text-amber-800">Try it!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
