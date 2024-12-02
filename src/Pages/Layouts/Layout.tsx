import React from "react";
import Router from "../../Routes/Router";
import { Navbar, Sidebar } from "../../components";
import Footer from "../../components/Footer/Footer";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="d-grid grid-column-percent-15">
        <Sidebar />
        <div>
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
