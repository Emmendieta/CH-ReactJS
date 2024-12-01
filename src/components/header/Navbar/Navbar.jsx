import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import Logo from "./logo/Logo";
import Links from "./links/Links";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navBar">
            <div className="container-fluid" id="headerNavbarDiv">
                <Logo/>
                <Links/>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;