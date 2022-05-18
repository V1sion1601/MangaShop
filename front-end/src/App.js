import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./admin/containers/Admin";
import Home from "./containers/Home";

import axios from "axios";
import OrderDetail from "./components/OrderDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/:fea" element={<Admin />} />
      <Route path="/admin/detail/:id" element={<Admin />} />
     
    </Routes>
  );
};
// axios.get('http://localhost:8000/product')
// .then(res=>{
//   console.log(res.data);
// });
export default App;
