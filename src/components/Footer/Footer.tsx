import React from "react";
import "./footer.css";
import logo from "../../assets/fke-logo-light.png";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-layout text-center p-05 d-flex justify-center align-i-center">
      <div className=" d-flex justify-center align-i-center">
        <Link
          to="https://feyzaerat.com.tr"
          className="small-text text-dark-mode d-flex justify-center align-i-center"
        >
          <span>
            {" "}
            <img className="w48 margin-025" src={logo} alt="fke-logo" />
          </span>
          ©{currentYear} All rights reserved
        </Link>
      </div>
    </div>
  );
};

export default Footer;
