import React from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="w-full h-full ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
