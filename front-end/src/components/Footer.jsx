import React from "react";

import { BsHouseDoor, BsMailbox } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-start items-center h-full px-6 gap-6 py-16 ">
        <div className="mr-5">
          <h1 className="-mt-16 font-bold text-5xl mb-6">Mangashop</h1>
          <p>
            Chúng tôi chuyên bán manga, light novel và các thể loại sách khác
          </p>
        </div>
        <div className="flex flex-row gap-48">
          <div className="font-medium text-lg ">
            <h1 className="uppercase border-gray-400 border-b-2">Khám phá</h1>
            <ul className=" pt-3 text-base space-y-3 font-light">
              <li>
                <NavLink
                  to="/"
                  className="hover:font-semibold hover:text-indigo-600"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="hover:font-semibold hover:text-indigo-600"
                >
                  Cửa hàng
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="font-medium text-lg">
            <h1 className="uppercase border-gray-400 border-b-2">
              Mạng xã hội
            </h1>
            <ul className=" pt-3 text-base space-y-3 font-light">
              <li>Facebook</li>
              <li>Google</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className="font-medium text-lg">
            <h1 className="uppercase border-gray-400 border-b-2 w-fit">
              Liên lạc
            </h1>
            <ul className=" pt-3 text-base space-y-3 font-light">
              <li>
                <BsHouseDoor className="inline mr-2" />
                273 An Dương Vương, Phường 3, Quận 5
              </li>
              <li>
                <BsMailbox className="inline mr-2" />
                info@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 flex flex-col justify-center items-center py-4">
        <p className="text-white uppercase flex flex-row justify-center items-center">
          <AiOutlineCopyrightCircle className="inline mr-2" /> Thiết kế bởi
          front-end team
        </p>
      </div>
    </div>
  );
};

export default Footer;
