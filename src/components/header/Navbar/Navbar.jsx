import CartWidget from "./cartWidget/CartWidget";
import Logo from "./logo/Logo";
import Links from "./links/Links";
import { Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navBar">
                <div className="container-fluid" id="headerNavbarDiv">
                    <Logo />
                    <Links />
                    <CartWidget />
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;