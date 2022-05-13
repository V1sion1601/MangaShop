import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
//Dummy data
import { itemsDataReleased, productbyID } from "../utils/dummyData";

const ProductDetails = () => {
  const { productId } = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const ID = parseInt(productId);
  var cart = [];
  //const [cart,setcart] = useState([]);
  
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
   const fetchProductList = async () => {
   try {
   const response = await productbyID(ID);
    console.log('Fetch products successfully: ' + response);
    setProductList(response);
  } catch (error) {
    console.log('Failed to fetch product list: ');
  }
  }
   fetchProductList();
  }, []);
  console.log(productList[0]?.ID);
  


  const navigate = useNavigate();

  const handleOrder = () => {
    
    if (user) {
      let flag = 0;
      cart = JSON.parse(sessionStorage.getItem("cart"));
      if (
        sessionStorage.getItem("cart") != null &&
        sessionStorage.getItem("cart") != "null"
      ){
        cart = JSON.parse(sessionStorage.getItem("cart"));
        // cart.push(productList[0]);
        // let carts = [];
        // if(cart.find(item => item?.ID === productList[0]?.ID).status){
        //   cart.find(item => item?.ID === productList[0]?.ID).quantity-=1;
        // }
        
        console.log(typeof cart);
        console.log(productList[0]?.ID);
        // setcart(...productList[0]);
        // cart.push(productList[0]);
        // sessionStorage.setItem("cart",cart);
      
        sessionStorage.setItem("cart",JSON.stringify(cart));
        // navigate("/cart");
      }
      else{
        sessionStorage.setItem("cart",JSON.stringify(productList[0]));
      }
      // navigate("/cart");
    
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
            Nhà sản xuất: <span className="font-bold">
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
                productList[0]?.status === 1 ? "text-indigo-400" : "text-red-600"
              } font-bold`}
            >
              {productList[0]?.status === 1 ? "Còn hàng" : "Hết hàng"}
            </span>
          </h2>
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
