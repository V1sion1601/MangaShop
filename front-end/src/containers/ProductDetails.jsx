import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
//Dummy data
import { productbyID } from "../utils/dummyData";

const ProductDetails = () => {
  const { productId } = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const ID = parseInt(productId);
  const [productList, setProductList] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

  var cart = [];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productbyID(ID);
        console.log("Fetch products successfully: " + response);
        setProductList(response);
      } catch (error) {
        console.log("Failed to fetch product list: ");
      }
    };
    fetchProductList();
  }, []);

  const handleOrder = () => {
    var flag = 0;

    if (user) {
      if (productList[0].quantity > productQuantity) {
        if (
          sessionStorage.getItem("cart") != null &&
          sessionStorage.getItem("cart") != "null"
        ) {
          cart = JSON.parse(sessionStorage.getItem("cart"));
          cart.map((data) => {
            if (data.ID === productList[0].ID) {
              flag++;
              data.quantity += parseInt(productQuantity);
            }
          });
          if (flag === 0) {
            cart.push(productList[0]);
          }
        } else {
          cart.push(productList[0]);
        }
        sessionStorage.setItem("cart", JSON.stringify(cart));
        navigate("/cart");
      } else {
        toast.error("Bạn nhập quá mức số lượng sản phẩm hiện có", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Bạn chưa đăng nhập tài khoản", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-row justify-start items-start gap-10 py-10 ">
      <div className="w-1/5 h-fill">
        <img src={`/assets/${productList[0]?.image}`} alt="Logo" />
      </div>
      <div className="pt-5 space-y-8 w-4/5">
        <div>
          <h1 className="font-extrabold text-5xl text-indigo-400">
            {productList[0]?.Name}
          </h1>
        </div>
        <div className="w-4/5 text-justify ">
          <h2 className="text-xl ">
            Nhà sản xuất:{" "}
            <span className="font-bold">
              {productList[0]?.ID_publisher === 1 ? "NXB Kim Đồng" : "NXB Trẻ"}
            </span>
          </h2>
          <h2 className="text-xl mt-3">
            Giá: <span className="font-bold">{productList[0]?.price} VNĐ</span>
          </h2>
          <h2 className="text-xl mt-3">
            Tình trạng:{" "}
            <span
              className={`${
                productList[0]?.status === 1
                  ? "text-indigo-400"
                  : "text-red-600"
              } font-bold`}
            >
              {productList[0]?.status === 1 ? "Còn hàng" : "Hết hàng"}
            </span>
          </h2>
          {productList[0]?.status === 1 && (
            <h2 className="text-xl mt-3">
              Số lượng:{" "}
              <span>
                <input
                  type="number"
                  className="px-3 py-1.5 text-gray-700 outline-none border  focus:border-indigo-600"
                  max={productList[0].quantity}
                  min={1}
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
              </span>
            </h2>
          )}
          {productList[0]?.status === 1 && (
            <button
              onClick={handleOrder}
              className={`mt-5 px-7 py-3 mb-4 rounded-lg bg-indigo-500 uppercase tracking-wider font-semibold text-sm text-white shadow-lg hover:-translate-y-0.5 transform transition hover:bg-indigo-400 focus:ring focus:ring-offset-2 active:bg-indigo-600`}
            >
              Đặt hàng
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
