import React from "react";
import 'Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navbar-logo" to="/" exact>
                Cosmos News
            </NavLink>
        </nav>
    )
}