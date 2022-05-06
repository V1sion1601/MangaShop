import React, { useState } from "react";
import { checkCategories } from "../../utils/dummyData";

const Categories = () => {
  const [checkbox, setCheckbox] = useState(
    new Array(checkCategories.length).fill(false)
  );
  console.log(checkbox);
  const handleCheckbox = (pos) => {
    const updatedCheckedState = checkbox.map((item, index) =>
      index === pos ? !item : item
    );
    setCheckbox(updatedCheckedState);
  };
  const handleDeleteBtn = () => {
    let checked = checkbox.filter((checked) => checked === true);
    alert(checked.length);
  };
  return (
    <div className="flex flex-col justify-start items-center">
      <header className="font-bold uppercase text-2xl mb-5 pt-6">
        Categories Management
      </header>
      <div className="flex flex-row justify-end items-end w-full px-5 pb-6 gap-2">
        <button
          onClick={handleDeleteBtn}
          className="bg-red-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3"
        >
          Delete
        </button>
        <button
          onClick={handleDeleteBtn}
          className="bg-green-500 text-white rounded-md shadow-lg font-bold uppercase px-5 py-3"
        >
          Add
        </button>
      </div>
      <table className="table-auto w-full ">
        <thead className="border-b-2   border-gray-300 font-bold ">
          <td>ID</td>
          <td>Name</td>
          <td>Description</td>
          <td>Delete</td>
        </thead>
        <tbody>
          {checkCategories.map((item, index) => (
            <tr key={index} className="border-b-2   border-gray-300">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <input
                  type="checkbox"
                  name={item.name}
                  checked={checkbox[index]}
                  onChange={() => handleCheckbox(index)}
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
