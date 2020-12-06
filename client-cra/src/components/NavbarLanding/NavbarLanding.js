import React from "react";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Link to="/" className="logo float-none mt-4">
                            <img src="images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarLanding;
