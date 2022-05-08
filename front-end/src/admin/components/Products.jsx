import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Dummy data
import isEmpty from "validator/lib/isEmpty";
import isInt from "validator/lib/isInt";
import { checkItems } from "../../utils/dummyData";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Products = () => {
  const showForm = `absolute px-12 flex flex-col  justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay`;
  const [checkbox, setCheckbox] = useState(
    checkItems.map((item) => {
      return {
        id: item.id,
        status: false,
      };
    })
  );
  const [toggleForm, setToggleForm] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const handleCheckbox = (id) => {
    const arrChecked = checkbox.map((item) => {
      return {
        id: item.id,
        status: id === item.id ? !item.status : item.status,
      };
    });

    setCheckbox(arrChecked);
  };
  const handleDeleteBtn = () => {
    let checked = checkbox.filter((item) => item.status === true);
    if (checked.length > 0) {
      let confirm =
        window.confirm(`Bạn có chắc xóa những vật phẩm có ${checked.map(
          (item) => {
            return `id: ${item.id} `;
          }
        )} không?
      `);
      confirm && alert("Xóa thành công");
    } else {
      alert("Không có gì để xóa");
    }
  };

  const validateAll = () => {
    const msg = {};

    if (isEmpty(name)) {
      msg.name = "Mời bạn nhập lại tên";
    }
    if (isEmpty(price)) {
      msg.price = "Mời bạn nhập lại giá tiền";
    } else if (!isInt(price)) {
      msg.price = "Giá của bạn không hợp lệ";
    }
    if (isEmpty(quantity)) {
      msg.quantity = "Mời bạn nhập lại số lượng";
    } else if (!isInt(quantity)) {
      msg.quantity = "Số lượng của bạn không hợp lệ";
    }
    if (isEmpty(image)) {
      msg.image = "Mời bạn chọn lại hình ảnh";
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
      //navigate("/admin/products");
      setToggleForm(false);
      setName("");
      setPrice("");
      setQuantity("");
      setImage("");
    }
    return;
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen overflow-y-scroll relative">
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
              Bảng Thêm sản phảm
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
                    placeholder="Nhập tên hàng hóa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <small className="text-left block text-red-300  font-bold">
                    {errors.name}
                  </small>
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Giá:
                </label>
                <div>
                  <input
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    placeholder="Nhập giá"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <small className="text-left block text-red-300  font-bold">
                    {errors.price}
                  </small>
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Số lượng:
                </label>
                <div>
                  <input
                    type="text"
                    className="px-3 py-2  rounded-md w-full focus:outline-black-200 text-black"
                    placeholder="Nhấp số lượng"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <small className="text-left block text-red-300  font-bold">
                    {errors.quantity}
                  </small>
                </div>
                <label className="flex justify-start items-center font-bold text-lg">
                  Hình ảnh:
                </label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <small className="text-left block text-red-300  font-bold">
                    {errors.image}
                  </small>
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
        Quản lý sản phẩm
      </header>
      <div className="flex flex-row justify-end items-end w-full px-5 pb-6 gap-2">
        <button
          onClick={handleDeleteBtn}
          className="bg-red-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3"
        >
          Xóa
        </button>
        <button
          onClick={() => setToggleForm(true)}
          className="bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3"
        >
          Thêm
        </button>
      </div>
      <table className="table-auto w-full ">
        <thead className="border-b-2   border-gray-300 font-bold ">
          <td>ID</td>
          <td>Hình ảnh</td>
          <td>Tên</td>
          <td>Giá</td>
          <td>Số lượng</td>
          <td>Xóa</td>
        </thead>
        <tbody>
          {checkItems.map((item, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{item.id}</td>
              <td>
                <img className="h-44 py-2" src={item.image} alt="demo" />
              </td>
              <td>{item.name}</td>
              <td>{`${item.price} VNĐ`}</td>
              <td>{item.quantity}</td>
              <td>
                <input
                  type="checkbox"
                  name={item.name}
                  checked={checkbox.id}
                  onChange={() => handleCheckbox(item.id)}
                  className="w-11 h-11 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
