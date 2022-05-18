import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  accounts,
  getallaccount,
  updatestatusaccount,
} from "../../utils/dummyData";
const Accounts = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState();
  const [id, setid] = useState("");
  const showForm = `absolute px-12 pt-5 flex flex-col z-10 justify-start items-center inset-0 bg-blackOverlay`;
  const [account, setaccount] = useState([]);
  useEffect(() => {
    const fetchaccountList = async () => {
      try {
        const response = await getallaccount();
        setaccount(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchaccountList();
    // fetchsaleList();
  }, []);
  const handleEditBtn = (accountId) => {
    const account2 = account.find((item) => item.ID === accountId);
    setToggleForm(true);
    setid(accountId);
    setName(account2.Name);
    setStatus(account2.status.toString());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const status2 = document.getElementById("status").value;
    if (id != 2) {
      const resupdate = updatestatusaccount(id, status2);
      console.log(resupdate);
      alert("Thành công");
    } else {
      alert("không thể khóa tài khoản admin");
    }
    setToggleForm(false);
  };

  return (
    <div className="relative flex flex-col justify-start items-center h-fit">
      <div className={toggleForm === true ? showForm : `${showForm} hidden `}>
        <div className="bg-gray-500  flex flex-col w-full rounded mx-5 h-auto">
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
                    id="status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="0">Khóa</option>
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
          <td>Tên</td>
          <td>Tình trạng</td>
          <td></td>
        </thead>
        <tbody>
          {account.map((account, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{account.ID}</td>
              <td>{account.Name}</td>
              <td
                className={`${
                  account.status === 1 ? "text-blue-500" : "text-red-500"
                } font-bold capitalize`}
              >
                {account.status === 1 ? "hoạt động" : "khóa"}
              </td>
              <td className="p-7 flex flex-row justify-start items-center gap-4">
                <button
                  onClick={() => handleEditBtn(account.ID)}
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
