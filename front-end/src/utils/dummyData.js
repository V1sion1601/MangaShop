import axios from "axios";
import api from "../api";
const Cover86 = "assets/TestItem.jpg";
const CoverYuruCamp = "assets/CoverYuruCamp.jpg";

export const numberWithComma = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// import Stone01 from "../assets/stone01.jpg";

// import React, { useState } from "react";
// class product extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       products:[]
//     }
//   }
//   compomentDidMount(){
//     axios.get('http://localhost:8000/product').then(res=>{
//       this.setState({
//         products:res.data
//     })
//   });
//   }
// }
// export default product;

export const categoryData = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Light novel",
  },
  {
    id: 2,
    name: "Manga",
  },
];
export const updateproduct = async (id, name, price, quantity) => {
  const url =
    "/product/updateproduct/" + id + "/" + name + "/" + price + "/" + quantity;
  console.log(url);
  return api.put(url);
};
export const createproduct = async (name, price, quantity, cateID, image) => {
  const url =
    "/product/create/" +
    name +
    "/" +
    price +
    "/" +
    cateID +
    "/" +
    quantity +
    "/" +
    image;
  console.log(url);
  return api.put(url);
};
export const deleteproduct = async (id) => {
  const url = "/product/delete/" + id;
  return api.put(url);
};
export const updatestatusaccount = async (id, status) => {
  const url = "/account/updatestatus/" + id + "/" + status;
  console.log(url);
  return api.put(url);
};
export const getallaccount = async () => {
  const url = "/account";
  return api.get(url);
};
export const addcategory = async (id) => {
  const url = "/cate/add/" + id;
  return api.put(url);
};
export const deletecategory = async (id) => {
  const url = "/cate/update/" + id;
  console.log(url);
  return api.get(url);
};
export const getallcategory = async () => {
  const url = "/cate";
  return api.get(url);
};
export const getsalebyName = async (name) => {
  const url = "/sale/" + name;
  console.log(url);
  return api.get(url);
};
export const createsale = async (
  name,
  percent,
  require,
  date_start,
  date_finish
) => {
  const url =
    "/sale/" +
    name +
    "/" +
    percent +
    "/" +
    require +
    "/" +
    date_start +
    "/" +
    date_finish;
  console.log(url);
  return api.put(url);
};
export const updatesale = async (
  id,
  name,
  percent,
  require,
  date_start,
  date_finish
) => {
  const url =
    "/sale/update/" +
    id +
    "/" +
    name +
    "/" +
    percent +
    "/" +
    require +
    "/" +
    date_start +
    "/" +
    date_finish;
  console.log(url);
  return api.get(url);
};
export const updateorder = async (id, status) => {
  const url = "/order/" + id + "/" + status;
  console.log(url);
  return api.post(url);
};
export const getallorder = async () => {
  const url = "/order";
  return api.get(url);
};
export const getorderdetailbyid = async (id) => {
  const url = "/order/detail/" + id;
  return api.get(url);
};
export const getorderbyId = async (id) => {
  const url = "/order/" + id;
  return api.get(url);
};
export const updatecart = async (id, quantity) => {
  const url = "/product/update/cart/" + id + "/" + quantity;
  console.log(url);
  return api.put(url);
};
export const createorder = async (id, price, quantity) => {
  const url = "/order/" + id + "/" + price + "/" + quantity;
  console.log(url);
  return api.put(url);
};
export const createorder_detail = async (id, id_product, quantity) => {
  const url = "/order/detail/" + id + "/" + id_product + "/" + quantity;
  console.log(url);
  return api.put(url);
};
export const getsale = async () => {
  const url = "/sale";
  console.log(url);
  return api.get(url);
};
export const updatepassword = async (id, password) => {
  const url = "/account/updatepassword/" + id + "/" + password;
  console.log(url);
  return api.put(url);
};
export const updateprofile = async (id, name, address, phone, ID_account) => {
  const url =
    "/cus/update/" +
    id +
    "/" +
    name +
    "/" +
    address +
    "/" +
    phone +
    "/" +
    ID_account;
  return api.post(url);
};
export const createcustomerforgoogle = async (name, ID_account) => {
  const url = "/cus/" + name + "/" + ID_account;
  return api.post(url);
};
export const accountbyusername2 = async (username) => {
  const url = "/account/" + username;
  return api.post(url);
};
export const createaccount = async (username, password) => {
  const url = "/account/" + username + "/" + password;
  return api.post(url);
};
export const createaccountforgoogle = async (username, password, ID_google) => {
  const url = "/account/" + username + "/" + password + "/" + ID_google;
  return api.post(url);
};
export const createcustomer = async (name, ID_account, address, phone) => {
  const url = "/cus/" + name + "/" + ID_account + "/" + address + "/" + phone;
  return api.post(url);
};
export const productbyID = async (id) => {
  const url = "/product/detail/" + id;
  // console.log(api.get(url, {params}));
  return api.get(url);
};
export const accountbyusername = async (username, password) => {
  const url = "/account/" + username + "/" + password;
  // console.log(api.get(url, {params}));
  return api.get(url);
};
export const accountbygoogle = async (id) => {
  const url = "/account/" + id;
  console.log(url);
  // console.log(api.get(url, {params}));
  return api.get(url);
};
export const customerbyID = async (id) => {
  const url = "/cus/" + id;
  // console.log(api.get(url, {params}));
  return api.get(url);
};
export const itemsDataReleased = async () => {
  const url = "/product";
  // console.log(api.get(url, {params}));
  return api.get(url, {});
};

//    [
//   {
//     id: 10,
//     name: "Dr.Stone",
//     cateId: 1,
//     price: 500,
//     status: 1,
//     imgSrc: Stone01,
//   },
//   {
//     id: 11,
//     name: "86: Eighty-Six",
//     cateId: 1,
//     price: 500,
//     status: 1,
//     imgSrc: Cover86,
//   },
//   {
//     id: 12,
//     name: "86: Eighty-Six",
//     cateId: 1,
//     price: 500,
//     status: 1,
//     imgSrc: Cover86,
//   },
//   {
//     id: 13,
//     name: "86: Eighty-Six",
//     cateId: 1,
//     price: 500,
//     status: 1,
//     imgSrc: Cover86,
//   },
//   {
//     id: 14,
//     name: "86: Eighty-Six",
//     cateId: 1,
//     price: 500,
//     status: 0,
//     imgSrc: Cover86,
//   },
//   {
//     id: 15,
//     name: "Yuru Camp",
//     cateId: 2,
//     price: 500,
//     status: 0,
//     imgSrc: CoverYuruCamp,
//   },
// ];

// export const itemsDataTrending = [
//   {
//     id: 20,
//     name: "Yuru Camp",
//     price: 500,
//     status: 0,
//     imgSrc: CoverYuruCamp,
//   },
//   {
//     id: 21,
//     name: "Yuru Camp",
//     price: 500,
//     status: 1,
//     imgSrc: CoverYuruCamp,
//   },
//   {
//     id: 22,
//     name: "Yuru Camp",
//     price: 500,
//     status: 1,
//     imgSrc: CoverYuruCamp,
//   },
//   {
//     id: 23,
//     name: "Yuru Camp",
//     price: 500,
//     status: 1,
//     imgSrc: CoverYuruCamp,
//   },
//   {
//     id: 24,
//     name: "Yuru Camp",
//     price: 500,
//     status: 1,
//     imgSrc: CoverYuruCamp,
//   },
// ];

export const cartItems = [
  {
    id: 1,
    image: CoverYuruCamp,
    name: "Yuru Camp",
    quantity: 20,
    price: 600,
  },
  {
    id: 2,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
  },
];

export const checkItems = [
  {
    id: 1,
    image: CoverYuruCamp,
    name: "Yuru Camp",
    quantity: 20,
    price: 600,
  },
  {
    id: 2,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
  },
  {
    id: 3,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
  },
  {
    id: 4,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
  },
];

export const orderItems = [
  {
    id: 1,
    image: CoverYuruCamp,
    name: "Yuru Camp",
    quantity: 20,
    price: 600,
    status: "delivery",
  },
  {
    id: 2,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
    status: "delivery",
  },
  {
    id: 3,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
    status: "delivery",
  },
  {
    id: 4,
    image: Cover86,
    name: "86: Eighty-Six",
    quantity: 20,
    price: 600,
    status: "delivery",
  },
];

export const accounts = [
  {
    id: 1,
    name: "V1sion",
    status: 1,
  },
  {
    id: 2,
    name: "Hao",
    status: 2,
  },
];

export const sales = [
  {
    id: 1,
    name: "Yuru Camp super sale",
    percentage: 12,
    dateStart: "03/05/2022",
    dateEnd: "03/05/2022",

    condition: 10000,
  },
  {
    id: 2,
    name: "Lena's super sale",
    percentage: 86,
    dateStart: "03/05/2022",
    dateEnd: "03/05/2022",
    condition: 10000,
  },
];

export const checkCategories = [
  {
    id: 1,
    name: "Light novel",
    description: "Hello world!",
  },
];
