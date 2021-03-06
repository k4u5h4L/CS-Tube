import React from "react";

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="header-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 navbar p-0">
                        {/* <a href="index.html" className="logo"> */}
                        <Link className="logo" href="/">
                            <a>
                            <img src="images/logo.png" alt="logo" />
                            </a>
                        </Link>
                        {/* </a> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav nav-menu float-none text-center">
                                <li className="nav-item">
                                    <Link className="nav-link" href={`/v/videoinfo?id=5`}>
                                        <a>
                                        Video Info
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="single.html">
                                        Single
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="search.html">
                                        Action
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="video.html">
                                        Video
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">
                                        <a>
                                        About
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/login">
                                    <a>
                                        Login
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/register">
                                    <a>
                                        Register
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="user-avater">
                            <img src="images/user-8.png" alt="user" />
                            <div className="user-menu">
                                <ul>
                                    <li>
                                        <a href="profile.html">
                                            <i className="ti-user"></i>My
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="favorites.html">
                                            <i className="ti-heart"></i>My
                                            Favorites
                                        </a>
                                    </li>
                                    <li>
                                        <a href="term.html">
                                            <i className="ti-world"></i>Privacy
                                            Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home.html">
                                            <i className="ti-power-off"></i>Log
                                            Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-div">
                            <input type="text" placeholder="Seacrh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
