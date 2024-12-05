import React from "react";
import { Route, Routes } from "react-router-dom"
import { HomePage, UploadPage } from "../Pages"

const Router =() => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/regression-via-upload" element={<UploadPage/>}></Route>
            
        </Routes>
    )
};
export default Router;