/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../Footer/footer.jsx";
import Routes from "../../routes/Routers";
import Navbar from "../Navbar/navbar.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
