import React from "react";
import Router from "../../Routes/Router";
import { Navbar, Sidebar } from "../../components";
import Footer from "../../components/Footer/Footer";
import "./layout.css"
type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="d-grid grid-column-percent-15">
        <Sidebar />
        <div className="main-layout d-flex f-direction-column justify-flex-start padding-top-2">
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
