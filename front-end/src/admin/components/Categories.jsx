import React, { useState } from "react";
import { checkCategories } from "../../utils/dummyData";

const Categories = () => {
  const [checkbox, setCheckbox] = useState(
    checkCategories.map((item) => {
      return {
        id: item.id,
        status: false,
      };
    })
  );
  console.log(checkbox);
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
      alert(
        checked.map((item) => {
          return item.id;
        })
      );
    } else {
      alert("Không có gì để xóa");
    }
  };
  const handleAddBtn = () => {};
  return (
    <div className="flex flex-col justify-start items-center h-screen overflow-y-scroll">
      <header className="font-bold uppercase text-2xl mb-5 pt-6">
        Quản lý danh mục
      </header>
      <div className="flex flex-row justify-end items-end w-full px-5 pb-6 gap-2">
        <button
          onClick={handleDeleteBtn}
          className="bg-red-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3"
        >
          Xóa
        </button>
        <button
          onClick={handleAddBtn}
          className="bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3"
        >
          Thêm
        </button>
      </div>
      <table className="table-auto w-full ">
        <thead className="border-b-2   border-gray-300 font-bold ">
          <td>ID</td>
          <td>Tên</td>
          <td>Mô tả</td>
          <td>Xóa</td>
        </thead>
        <tbody>
          {checkCategories.map((item, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td className="py-3">
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

export default Categories;
