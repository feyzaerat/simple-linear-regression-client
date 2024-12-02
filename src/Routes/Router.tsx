import React from "react";
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages"

const Router =() => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            
        </Routes>
    )
};
export default Router;