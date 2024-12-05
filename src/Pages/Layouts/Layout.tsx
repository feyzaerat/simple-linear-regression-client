import React, { useState } from "react";
import Router from "../../Routes/Router";
import { Navbar, Sidebar } from "../../components";
import Footer from "../../components/Footer/Footer";
import "./layout.css";
type Props = {};
const sidebarLinks = [
  { name: "What's regression and why is it used?", url: "/" },
  { name: "What's the Linear Regression?", url: "/" },
  { name: "What methods do we use when doing regression modeling?", url: "/" },
];
const Layout = (props: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <><Navbar />
      <div
        className={`d-grid ${
          isCollapsed ? "grid-column-percent-3" : "grid-column-percent-15"
        }`}
      >
        <Sidebar sidebarLinks={sidebarLinks} toggleSidebar={toggleSidebar}/>
        <div className="main-layout d-flex f-direction-column justify-flex-start ">
          
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
