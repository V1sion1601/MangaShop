import React, { useState } from "react";

//Dummy data
import { cartItems } from "../../utils/dummyData";
import isEmpty from "validator/lib/isEmpty";
import isInt from "validator/lib/isInt";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const handleEditProduct = (id) => {
    let model = cartItems.find((item) => item.id === id);
    setName(model.name);
    setPrice(model.price.toString());
    setQuantity(model.quantity.toString());
    //setImage(model.image);
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
      navigate("/admin/products");
    }
    return;
  };

  return (
    <div className="flex flex-row w-full h-full gap-5 ">
      <div className="flex flex-col justify-start items-center w-1/2 h-full pt-5 ">
        <header className="font-bold uppercase text-2xl mb-5">
          Cập nhật hàng hóa
        </header>
        <div>
          <form>
            <div className="grid grid-cols-2 gap-5">
              <label className="flex justify-start items-center font-bold text-lg">
                Tên:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Nhập tên hàng hóa"
                  value={name}
                  readOnly={!name && true}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <small className="block text-red-700">{errors.name}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Giá:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Nhập giá"
                  value={price}
                  readOnly={!price && true}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <small className="block text-red-700">{errors.price}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Số lượng:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Nhấp số lượng"
                  value={quantity}
                  readOnly={!quantity && true}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <small className="block text-red-700">{errors.quantity}</small>
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Hình ảnh:
              </label>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  value={image}
                  // readOnly={!image && true}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
                <small className="block text-red-700">{errors.image}</small>
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
            Hàng hóa vừa thêm
          </h1>
          <table className="table-auto w-full">
            <thead className="border-b-2   border-gray-300 font-bold ">
              <td>ID</td>
              <td>Hình ảnh</td>
              <td>Tên</td>
              <td>Giá</td>
              <td>Số lượng</td>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b-2   border-gray-300">
                  <td
                    onClick={() => handleEditProduct(item.id)}
                    className="cursor-pointer text-blue-500 font-semibold"
                  >
                    {item.id}
                  </td>
                  <td>
                    <img className="h-36 py-2" src={item.image} alt="demo" />
                  </td>
                  <td>{item.Name}</td>
                  <td>{`${item.price} VNĐ`}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-1/2 h-screen  overflow-y-scroll">
        <header className="font-bold uppercase text-2xl mb-5 pt-5">
          Bảng hàng hóa hiện tại
        </header>
        <table className="table-auto w-full">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>
            <td>Hình ảnh</td>
            <td>Tên</td>
            <td>Giá</td>
            <td>Số lượng</td>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b-2   border-gray-300">
                <td
                  onClick={() => handleEditProduct(item.id)}
                  className="cursor-pointer text-blue-500 font-semibold"
                >
                  {item.id}
                </td>
                <td>
                  <img className="h-36 py-2" src={item.image} alt="demo" />
                </td>
                <td>{item.name}</td>
                <td>{`${item.price} VNĐ`}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
