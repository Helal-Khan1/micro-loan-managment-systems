import React from "react";
import { Outlet } from "react-router";
import Naber from "../components/Shared/Navber/Naber";
import Footer from "../components/Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <header>
        {/* Navber */}
        <Naber></Naber>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
