import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Dummy data
import isEmpty from "validator/lib/isEmpty";
import isInt from "validator/lib/isInt";
import {
  itemsDataReleased,
  numberWithComma,
  deleteproduct,
  createproduct,
  getallcategory,
} from "../../utils/dummyData";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Products = () => {
  const showForm = `absolute px-12 pt-5 flex flex-col  justify-start items-center inset-0 bg-blackOverlay`;
  const [toggleForm, setToggleForm] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [selectedCate, setSelectedCate] = useState("");

  const [errors, setErrors] = useState({});
  const [productList, setProductList] = useState([]);
  const [checkbox, setCheckbox] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await itemsDataReleased();
        console.log("Fetch products successfully: ", response);
        setProductList(response);
        setCheckbox(response);
        setSelectedCate("1");
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await getallcategory();
        console.log("Fetch products successfully: ", response);
        setCategory(response);

        console.log(category);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchCategoryList();
  }, []);

  const handleCheckbox = (id) => {
    console.log(id);
    console.log(checkbox);

    const arrChecked = productList.map((item) => {
      console.log(item);
      console.log(item.status);
      return {
        ID: item.ID,
        Name: item.Name,
        price: item.price,
        image: item.image,
        ID_category: item.ID_category,
        quantity: item.quantity,
        status: id === item.ID ? (item.status ? 0 : 1) : item.status,
      };
    });
    console.log(id);
    console.log(productList);
    setProductList(arrChecked);
  };
  const handleDeleteBtn = () => {
    let checked = productList.filter((item) => item.status === 1);
    if (checked.length > 0) {
      let confirm =
        window.confirm(`Bạn có chắc xóa những sản phẩm có ${checked.map(
          (item) => {
            return `id: ${item.ID} `;
          }
        )} không?
      `);
      if (
        confirm &&
        checked.map((item) => {
          deleteproduct(item.ID);
        })
      ) {
        alert("Xóa thành công");
        window.location.reload();
      }
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
    } else if (parseInt(price) < 0) {
      msg.price = "Giá của bạn không hợp lệ";
    }
    if (isEmpty(quantity)) {
      msg.quantity = "Mời bạn nhập lại số lượng";
    } else if (parseInt(quantity) < 0) {
      msg.quantity = "Số lượng của bạn không hợp lệ";
    }
    if (isEmpty(image)) {
      msg.image = "Mời bạn chọn lại hình ảnh";
    }
    if (isEmpty(selectedCate)) {
      msg.cate = "Mời bạn chọn lại thể loại";
    }
    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImage(image.substring(12));
    console.log("Test");
    const isValid = validateAll();
    if (isValid) {
      createproduct(
        name,
        price,
        quantity,
        selectedCate,
        image.replace(/^.*[\\\/]/, "")
      );
      alert("Thành công");

      setToggleForm(false);
      setName("");
      setPrice("");
      setQuantity("");
      setImage("");
      setSelectedCate(1);
      window.location.reload();
    }
    return;
  };

  return (
    <div className="flex flex-col justify-start items-center h-fit relative">
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
                <label className="flex justify-start items-center font-bold text-lg">
                  Thể loại
                </label>
                <div className="w-full ">
                  <select
                    value={selectedCate}
                    onChange={(e) => setSelectedCate(e.target.value)}
                    className="text-black w-full px-3 py-2"
                  >
                    {category.map((item) => (
                      <option value={item?.ID} id={item?.ID}>
                        {item.Name}
                      </option>
                    ))}
                  </select>
                  {/* <small className="text-left block text-red-300  font-bold">
                    {errors.image}
                  </small> */}
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
          <td>Thể loại</td>

          <td>Xóa</td>
        </thead>
        <tbody>
          {productList.map((item, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{item.ID}</td>
              <td className="py-5">
                <img
                  className="h-44 "
                  src={`/assets/${item.image}`}
                  alt="demo"
                />
              </td>
              <td>{item.Name}</td>
              <td>{`${numberWithComma(item.price)} VNĐ`}</td>
              <td>{item.quantity}</td>
              <td>
                {category.find((cate) => cate?.ID === item.ID_category)?.Name}
              </td>

              <td>
                <input
                  type="checkbox"
                  name={item.Name}
                  checked={item.status === 0 ? false : true}
                  onChange={() => handleCheckbox(item.ID)}
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
