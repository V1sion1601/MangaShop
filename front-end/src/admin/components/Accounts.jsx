import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { accounts } from "../../utils/dummyData";
const Accounts = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState();
  const showForm = `absolute px-12 flex flex-col z-10 justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay`;

  const handleEditBtn = (accountId) => {
    const account = accounts.find((item) => item.id === accountId);
    setToggleForm(true);
    setName(account.name);
    setStatus(account.status.toString());
  };
  const handleDeleteBtn = (accountId) => {
    let confirm = window.confirm(
      `Bạn có muốn xóa với tài khoản id:${accountId} không?`
    );
    confirm && alert("Xóa thành công");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thành công");
    setToggleForm(false);
  };

  return (
    <div className="relative flex flex-col justify-start items-center h-screen overflow-y-scroll">
      <div className={toggleForm === true ? showForm : `${showForm} hidden `}>
        <div className="bg-gray-500  flex flex-col w-full rounded mx-5">
          <div className="text-white flex pr-5 flex-row items-center w-full justify-end">
            <AiOutlineCloseCircle
              fontSize={40}
              className="cursor-pointer pt-2"
              onClick={() => setToggleForm(false)}
            />
          </div>

          <div className="text-white flex flex-col justify-center items-center text-center p-4">
            <h1 className="uppercase font-bold pb-12 text-4xl">
              Bảng Cập nhật tài khoản
            </h1>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <label className="flex justify-start items-center font-bold text-lg">
                  Tên:
                </label>
                <div>
                  <input
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    readOnly={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Tình trạng:
                </label>
                <div>
                  <select
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="2">Khóa</option>
                    <option value="1">Hoạt động</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-5">
                <input
                  type="submit"
                  class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-gray-400 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-gray-600 focus:ring focus:ring-offset-2 active:bg-gray-600"
                  value="Xác nhận thêm"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <header className="font-bold uppercase text-2xl mb-5 pt-6">
        Quản lý tài khoản
      </header>

      <table className="table-auto w-full ">
        <thead className="border-b-2   border-gray-300 font-bold ">
          <td>ID</td>
          <td>Tên khách hàng</td>
          <td>Tình trạng</td>
          <td></td>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td
                className={`${
                  account.status === 1 ? "text-blue-500" : "text-red-500"
                } font-bold capitalize`}
              >
                {account.status === 1 ? "hoạt động" : "khóa"}
              </td>
              <td className="p-7 flex flex-row justify-start items-center gap-4">
                <button
                  onClick={() => handleDeleteBtn(account.id)}
                  className="bg-red-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-red-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Xóa
                </button>
                <button
                  onClick={() => handleEditBtn(account.id)}
                  className="bg-blue-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-blue-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
