import React, { useState } from "react";
//Dummy data

import { sales } from "../../utils/dummyData";
import isEmpty from "validator/lib/isEmpty";
import isInt from "validator/lib/isInt";
import { useNavigate } from "react-router-dom";
const Sales = () => {
  const [name, setName] = useState("");
  const [per, setPer] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [condition, setCondition] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log(typeof per);
  const handleEditSale = (id) => {
    let model = sales.find((item) => item.id === id);
    setName(model.name);
    setPer(model.percentage.toString());
    setDateStart(
      new Date(`${model.dateStart} 14:48 UTC`).toISOString().substr(0, 10)
    );
    setDateEnd(
      new Date(`${model.dateEnd} 14:48 UTC`).toISOString().substr(0, 10)
    );
    setCondition(model.condition.toString());
  };

  const validateAll = () => {
    const msg = {};

    if (isEmpty(name)) {
      msg.name = "Mời bạn nhập lại tên";
    }
    if (isEmpty(per)) {
      msg.per = "Mời bạn nhập lại phần trăm";
    } else if (!isInt(per)) {
      msg.price = "Phần trăm của bạn không hợp lệ";
    }
    if (isEmpty(dateStart)) {
      msg.dateStart = "Mời bạn nhập lại số lượng";
    }
    if (isEmpty(dateEnd)) {
      msg.dateEnd = "Mời bạn nhập lại số lượng";
    }
    if (isEmpty(condition)) {
      msg.condition = "Mời bạn nhập lại điều kiện";
    } else if (!isInt(condition)) {
      msg.condition = "Điều kiện không hợp lệ";
    }
    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (isValid) {
      alert("Thành công");
      navigate("/admin/sales");
    }
    return;
  };

  return (
    <div className="flex flex-row w-full h-full gap-5 ">
      <div className="flex flex-col justify-start  w-1/2 h-full pt-5 ">
        <header className="font-bold uppercase text-center text-2xl mb-5">
          Thêm khuyến mãi
        </header>
        <div>
          <form>
            <div className="grid grid-cols-2 gap-5">
              <label className="flex justify-start items-center font-bold text-lg">
                Tên khuyến mãi:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Nhập mã khuyến mãi"
                  //readOnly={!name && true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <small className="block text-red-700">{errors.name}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Phần trăm khuyến mãi (%):
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Nhập phần trăm khuyến mãi"
                  value={per}
                  //readOnly={!per && true}
                  onChange={(e) => setPer(e.target.value)}
                />
                <small className="block text-red-700">{errors.per}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Ngày áp dụng:
              </label>
              <div>
                <input
                  type="date"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  value={dateStart}
                  //readOnly={!dateStart && true}
                  onChange={(e) => setDateStart(e.target.value)}
                />
                <small className="block text-red-700">{errors.dateStart}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Ngày kết thúc:
              </label>
              <div>
                <input
                  type="date"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  value={dateEnd}
                  //readOnly={!dateEnd && true}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
                <small className="block text-red-700">{errors.dateEnd}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Điều kiện:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Nhập điều kiện (dựa trên hóa đơn)"
                  value={condition}
                  //readOnly={!condition && true}
                  onChange={(e) => setCondition(e.target.value)}
                />
                <small className="block text-red-700">{errors.condition}</small>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <input
                type="submit"
                class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-red-200 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-red-400 focus:ring focus:ring-offset-2 active:bg-red-400"
                value="Cập nhật"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
        <div className="border-t-2 border-gray-300 w-full h-full overflow-y-scroll">
          <h1 className="font-bold uppercase text-2xl mb-5 pt-5 text-center  ">
            Khuyến mãi được thêm
          </h1>
          <table className="table-auto w-full">
            <thead className="border-b-2   border-gray-300 font-bold ">
              <td>ID</td>
              <td>Tên</td>
              <td>Phần trăm (%)</td>
              <td>Ngày bắt đầu</td>
              <td>Ngày kết thúc</td>
              <td>Điều kiện</td>
            </thead>
            <tbody>
              {sales.map((sale, index) => (
                <tr key={index} className="border-b-2   border-gray-300">
                  <td
                    onClick={() => handleEditSale(sale.id)}
                    className="text-blue-500 cursor-pointer"
                  >
                    {sale.id}
                  </td>

                  <td>{sale.name}</td>
                  <td>{sale.percentage}%</td>
                  <td>{sale.dateStart}</td>
                  <td>{sale.dateEnd}</td>
                  <td>{sale.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-1/2 ">
        <header className="font-bold uppercase text-2xl mb-5 pt-5">
          Khuyến mãi hiện có
        </header>
        <table className="table-auto w-full">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>
            <td>Tên</td>
            <td>Phần trăm (%)</td>
            <td>Ngày bắt đầu</td>
            <td>Ngày kết thúc</td>
            <td>Điều kiện</td>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index} className="border-b-2   border-gray-300">
                <td
                  onClick={() => handleEditSale(sale.id)}
                  className="text-blue-500 cursor-pointer"
                >
                  {sale.id}
                </td>

                <td>{sale.name}</td>
                <td>{sale.percentage}%</td>
                <td>{sale.dateStart}</td>
                <td>{sale.dateEnd}</td>
                <td>{sale.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
