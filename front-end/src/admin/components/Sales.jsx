import React, { useEffect, useState } from "react";
//Dummy data

import {
  getsale,
  getsalebyName,
  createsale,
  updatesale,
  numberWithComma,
} from "../../utils/dummyData";
import isEmpty from "validator/lib/isEmpty";
import isInt from "validator/lib/isInt";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Sales = () => {
  const [name, setName] = useState("");
  const [per, setPer] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [condition, setCondition] = useState("");
  const [errors, setErrors] = useState({});
  const [id, setid] = useState("");
  const navigate = useNavigate();
  console.log(typeof per);
  const [sale, setsale] = useState([]);
  useEffect(() => {
    const fetchsaleList = async () => {
      try {
        const response = await getsale();
        console.log(response);
        setsale(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchsaleList();
    // fetchsaleList();
  }, []);
  const handleEditSale = (id) => {
    let model = sale.find((item) => item.id === id);
    setid(id);
    setName(model.Name);
    setPer(model.Percent.toString());
    setDateStart(
      new Date(`${model.date_start} 14:48 UTC`).toISOString().substr(0, 10)
    );
    setDateEnd(
      new Date(`${model.date_finish} 14:48 UTC`).toISOString().substr(0, 10)
    );
    setCondition(model.Require.toString());
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
  const handleupdate = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    console.log(name);
    const resgetsale = await getsalebyName(name);
    console.log(resgetsale);
    if (resgetsale != 6) {
      if (dateStart > dateEnd) {
        toast.error("Nhập ngày sai");
      } else {
        const resupdate = updatesale(
          id,
          name,
          per,
          condition,
          dateStart,
          dateEnd
        );
        window.location.reload();
      }
    } else {
      toast.error("Tên khuyến mãi không tồn tại xin cập nhật lại!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleadd = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    const resgetsale = await getsalebyName(name);
    if (resgetsale == 6) {
      if (dateStart > dateEnd) {
        toast.error("Nhập ngày sai!");
      } else {
        const resupdate = createsale(name, per, condition, dateStart, dateEnd);
        window.location.reload();
      }
    } else {
      toast.error("Tên khuyến mãi đã tồn tại xin nhập tên khác!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-row w-full h-full gap-5 ">
      <div className="flex flex-col justify-start  w-1/2 h-full pt-5 ">
        <header className="font-bold uppercase text-center text-2xl mb-5">
          khuyến mãi
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
            <div className="flex flex-row gap-6 justify-center items-center mt-5">
              <input
                type="submit"
                class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-red-200 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-red-400 focus:ring focus:ring-offset-2 active:bg-red-400"
                value="Cập nhật"
                onClick={handleupdate}
              />
              <input
                type="submit"
                class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-red-200 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-red-400 focus:ring focus:ring-offset-2 active:bg-red-400"
                value="Thêm Khuyến Mãi"
                onClick={handleadd}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-1/2 ">
        <header className="font-bold uppercase text-2xl mb-5 pt-5">
          Khuyến mãi hiện có
        </header>
        <table className="table-auto w-full ">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>
            <td>Tên</td>
            <td>Phần trăm (%)</td>
            <td>Ngày bắt đầu</td>
            <td>Ngày kết thúc</td>
            <td>Điều kiện</td>
          </thead>
          <tbody>
            {sale.map((sale, index) => (
              <tr key={index} className="border-b-2   border-gray-300">
                <td
                  onClick={() => handleEditSale(sale.id)}
                  className="text-blue-500 cursor-pointer pr-6 py-2"
                >
                  {sale.id}
                </td>

                <td className="pr-4">{sale.Name}</td>
                <td>{sale.Percent}%</td>
                <td>{sale.date_start}</td>
                <td>{sale.date_finish}</td>
                <td>{`${numberWithComma(sale.Require)} VNĐ`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
