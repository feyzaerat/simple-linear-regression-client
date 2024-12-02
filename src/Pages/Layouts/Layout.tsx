import React from "react";
import Router from "../../Routes/Router";
import { Navbar } from "../../components";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};

export default Layout;
