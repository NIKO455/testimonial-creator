import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="max-w-[1220px] m-auto bg-red-500">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
