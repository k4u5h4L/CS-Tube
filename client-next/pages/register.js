import React, { useState } from "react";
import Link from "next/link";

import NavbarLanding from "../components/NavbarLanding/NavbarLanding";

const Register = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div>
            <NavbarLanding />

            <section className="form-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                            <div className="form-div text-center">
                                <h2>Register</h2>
                                <p>No credit card required</p>
                                <form action="/register" method="POST">
                                    <div className="form-group mt-5">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                        />
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Company name"
                                        />
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group form-check-label">
                                        <label htmlFor="tarms-check">
                                            <input
                                                className="d-none"
                                                type="checkbox"
                                                id="tarms-check"
                                                checked={checked}
                                                onChange={() =>
                                                    setChecked(!checked)
                                                }
                                            />
                                            <span className="checkbox"></span>
                                            <p>
                                                I agree to the{" "}
                                                <a href="term.html">
                                                    {" "}
                                                    Terms &amp; Condition{" "}
                                                </a>
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-group button-block text-center">
                                        <button className="form-btn">
                                            Get Started
                                        </button>
                                        <p className="sign-up-text">
                                            Already have an account?
                                            <Link href="/login"><a> Sign in</a></Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
