/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../Footer/footer.jsx";
import Routes from "../../routes/routers";

const Layout = () => {
  return (
    <div>

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;