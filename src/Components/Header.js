import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";


const Header = () => {
    return(
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
};

export default Header;