import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BangCong from "../../../pages/BangCong/BangCong";
import Home from "../../../pages/Home/Home";
import ListTask from "../../../pages/ListTask/ListTask";
import QuanLyNhanSu from "../../../pages/HRM/QuanLyNhanSu";
import Sidebar from "./Sidebar";

const SideMenu = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bangCong" element={<BangCong />} />
        <Route path="/ListTask" element={<ListTask />} />
        <Route path="/quanLyNhanSu" element={<QuanLyNhanSu />} />
      </Routes>
    </BrowserRouter>
  );
};
export default SideMenu;
