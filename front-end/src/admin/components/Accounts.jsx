import React from "react";

import { accounts } from "../../utils/dummyData";
const Accounts = () => {
  const handleEditBtn = (accountId) => {
    alert(`Edit this account: ${accountId}`);
  };
  const handleDeleteBtn = (accountId) => {
    alert(`Delete this account: ${accountId}`);
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen overflow-y-scroll">
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
                  account.status === "delivery"
                    ? "text-blue-500"
                    : "text-red-500"
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
                  onClick={() => handleDeleteBtn(account.id)}
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
