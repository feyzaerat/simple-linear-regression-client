import React, { useState } from "react";
import "./sidebar.css";
import { PiSticker } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";
type sidebarLinks = {
  name: string;
  url: string;
};

type Props = {
  sidebarLinks: sidebarLinks[];
  toggleSidebar: () => void;
};

const Sidebar = ({ sidebarLinks, toggleSidebar }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebars = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div className="sidebar-layout">
      {}
      <div
        className={`${
          isCollapsed
            ? "button-container-collapsed"
            : "button-container-NonCollapsed"
        }`}
        onClick={() =>{toggleSidebar() ; toggleSidebars()}} 
      >
        <GiHamburgerMenu />

      </div>
      <div className="sidebar-layout__container d-flex f-direction-column gap-1 align-i-f-start">
        {sidebarLinks.map((link, index) => (
          <div key={index} className="d-flex align-i-center">
            <span className="margin-top-4">
            <PiSticker />
            {" "}
            </span>
            <Link
              to={link.url}
              className={`sidebar-layout__container__link text small-text text-italic text-light-mode margin-top-4 ${
                isCollapsed
                  ? "transparent"
                  : "opaque"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
