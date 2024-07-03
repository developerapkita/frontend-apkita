import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import HeaderDashboard from "../headers/HeaderDashboard";

const Layout: React.FC = () => {
  return (
    <div className="w-screen h-[100vh] grid grid-cols-12 ">
      <Sidebar />
      <main className="col-span-10 w-full h-full bg-[#4B70F5] p-3 overflow-hidden">
        <div className="w-full h-full rounded-[10px] bg-white   px-5 overflow-scroll">
          <HeaderDashboard />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
