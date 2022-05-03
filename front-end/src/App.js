import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./admin/containers/Admin";
import Home from "./containers/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/:fea" element={<Admin />} />
    </Routes>
  );
};

export default App;
