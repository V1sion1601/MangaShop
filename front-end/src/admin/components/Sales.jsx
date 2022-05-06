import React from "react";
//Dummy data
import YuruCamp from "../../assets/CoverYuruCamp.jpg";
import { sales } from "../../utils/dummyData";
const Sales = () => {
  return (
    <div className="flex flex-row w-full h-full gap-5 ">
      <div className="flex flex-col justify-start items-center w-1/2 h-full pt-5 ">
        <header className="font-bold uppercase text-2xl mb-5">Add sales</header>
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
                  placeholder="Enter coupon name here"
                />
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Percentage:
              </label>
              <div>
                <input
                  type="text"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Enter price here"
                />
              </div>
              <label className="flex justify-start items-center font-bold text-lg">
                Date:
              </label>
              <div>
                <input
                  type="date"
                  className="px-3 py-2  rounded-md w-full focus:outline-red-200"
                  placeholder="Enter quantity here"
                />
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
            Current Sales
          </h1>
          <table className="table-auto w-full">
            <thead className="border-b-2   border-gray-300 font-bold ">
              <td>ID</td>

              <td>Name</td>
              <td>Percentage</td>
              <td>Date Start</td>
              <td>Date Finish</td>
            </thead>
            <tbody>
              <tr className="border-b-2   border-gray-300">
                <td>1</td>

                <td>Yuru Camp mega sale</td>
                <td>5%</td>
                <td>03/06</td>
                <td>03/06</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-1/2 ">
        <header className="font-bold uppercase text-2xl mb-5 pt-5">
          Sales Available
        </header>
        <table className="table-auto w-full">
          <thead className="border-b-2   border-gray-300 font-bold ">
            <td>ID</td>

            <td>Name</td>
            <td>Percentage</td>
            <td>Date Start</td>
            <td>Date Finish</td>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index} className="border-b-2   border-gray-300">
                <td>{sale.id}</td>

                <td>{sale.name}</td>
                <td>{sale.percentage}%</td>
                <td>{sale.date}</td>
                <td>{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
