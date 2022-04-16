import React from "react";

//Dummy data
import YuruCamp from "../../assets/CoverYuruCamp.jpg";
const AddProduct = () => {
  return (
    <div className="flex flex-row w-full h-full gap-5 ">
      <div className="flex flex-col justify-start items-center w-1/2 h-full pt-5 ">
        <header className="font-bold uppercase text-2xl mb-5">
          Add product
        </header>
        <div>
          <form>
            <div className="grid grid-cols-2 gap-5">
              <label className="flex justify-start items-center font-bold text-lg">
                Name:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Enter product name here"
                />
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Price:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Enter price here"
                />
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Quantity:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Enter quantity here"
                />
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Image:
              </label>
              <div>
                <input type="file" placeholder="Enter quantity here" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <input
                type="submit"
                class="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-red-200 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-red-400 focus:ring focus:ring-offset-2 active:bg-red-400"
                value="Submit"
              />
            </div>
          </form>
        </div>
        <div className="border-t-2 border-gray-300 w-full h-full overflow-y-scroll">
          <h1 className="font-bold uppercase text-2xl mb-5 pt-5 text-center  ">
            Current Items
          </h1>
          <table className="table-auto w-full">
            <thead className="border-b-2   border-gray-300 font-bold ">
              <td>ID</td>
              <td>Image</td>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
            </thead>
            <tbody>
              <tr className="border-b-2   border-gray-300">
                <td>1</td>
                <td>
                  <img className="h-36 py-2" src={YuruCamp} alt="demo" />
                </td>
                <td>Yuru Camp</td>
                <td>$80</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-1/2 ">
        <header className="font-bold uppercase text-2xl mb-5">Table</header>
        <table className="table-auto w-full">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
          </thead>
          <tbody>
            <tr className="border-b-2   border-gray-300">
              <td>1</td>
              <td>
                <img className="h-36 py-2" src={YuruCamp} alt="demo" />
              </td>
              <td>Yuru Camp</td>
              <td>$80</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
