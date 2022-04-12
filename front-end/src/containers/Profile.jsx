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
      msg.name = "Please input your name (length from 2 to 18)";
    } else if (editName.length < 2 || editName.length > 18) {
      msg.name = "Your name is invalid";
    }

    if (isEmpty(editPhone)) {
      msg.phone = "Please input your phone";
    } else if (isMobilePhone(editPhone, "vi-VN")) {
      msg.phone = "Phone is invalid";
    }
    if (isEmpty(editAddress)) {
      msg.address = "Please input your email";
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
    <div className="h-screen flex flex-row items-start justify-start">
      <div className="w-2/4">
        <header className="font-light py-3">Personal Information</header>
        <div className="w-full">
          <form className="grid grid-cols-2 gap-5 w-full">
            <label className="py-2">Full name </label>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-2 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <small className="text-blue-600">{errors.name}</small>
            </div>

            <label className="py-2">Phone number </label>
            <div>
              <input
                type="text"
                placeholder="Enter your phone"
                className="px-2 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
              />
              <small className="text-blue-600">{errors.phone}</small>
            </div>

            <label className="py-2">Address </label>
            <div>
              <input
                type="text"
                placeholder="Enter your address"
                className="px-2 py-2 outline-none rounded-md w-full focus:outline-indigo-400"
                value={editAddress}
                onChange={(e) => setEditAddress(e.target.value)}
              />
              <small className="text-blue-600">{errors.address}</small>
            </div>
            <input
              type="submit"
              class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600"
              value="Submit"
              onClick={submitEdit}
            />
          </form>
        </div>
      </div>
      <div className="w-2/4 px-8">
        <header className="font-light py-3">Shopping Information</header>
        <div className="grid grid-cols-2 gap-3 text-lg">
          <label>Money spent:</label>
          <span className="text-blue-700">800</span>
          <label>Favourite:</label>
          <span className="text-blue-700">Manga</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
