import React from "react";
//Dummy data
import { cartItems } from "../utils/dummyData";
const Cart = () => {
  let totalPrice = cartItems.reduce((prev, curr) => prev.price + curr.price);
  let totalQuantity = cartItems.reduce(
    (prev, curr) => prev.quantity + curr.quantity
  );

  return (
    <div className="h-screen w-full">
      <header className="text-2xl text-indigo-400 font-semibold tracking-wide">
        Cart
      </header>
      <div className="pt-6 ">
        <table className="table-auto w-full ">
          <thead className="text-left border-b border-indigo-200 pb-6">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                className="text-left border-b border-indigo-200 "
                key={item.id}
              >
                <td>{item.id}</td>
                <td>
                  <img
                    className="w-50 h-40"
                    src={item.image}
                    alt={`img-${item.id}`}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{`$${item.price}`}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="h-7">
              <td></td>
              <td></td>
              <td></td>
              <td className="font-bold text-lg">Quantity</td>
              <td className="font-bold text-lg">{`${totalQuantity}`}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-bold text-lg">Total Price</td>
              <td className="font-bold text-lg">{`$${totalPrice}`}</td>
            </tr>
          </tfoot>
        </table>
        <div className="flex flex-cols justify-end items-center pr-32">
          <button className="cursor-pointer mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
