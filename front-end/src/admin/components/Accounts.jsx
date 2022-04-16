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
    <div className="flex flex-col justify-start items-center">
      <header className="font-bold uppercase text-2xl mb-5 pt-6">
        Accounts Management
      </header>

      <table className="table-auto w-full ">
        <thead className="border-b-2   border-gray-300 font-bold ">
          <td>ID</td>
          <td>Customer Name</td>
          <td>Status</td>
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
                {account.status === 1 ? "active" : "not active"}
              </td>
              <td className="p-7 flex flex-row justify-start items-center gap-4">
                <button
                  onClick={() => handleEditBtn(account.id)}
                  className="bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-green-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBtn(account.id)}
                  className="bg-red-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3 hover:bg-red-400 hover:-translate-y-0.5 transform transition active:ring-1 active:ring-offset-4"
                >
                  Delete
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
