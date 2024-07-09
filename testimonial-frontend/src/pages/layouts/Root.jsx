import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="max-w-[1220px] m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
