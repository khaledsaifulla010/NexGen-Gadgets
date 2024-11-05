import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../AllPages/NavBar/NavBar";
import Footer from '../../components/AllPages/Footer/Footer'

const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-6">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
