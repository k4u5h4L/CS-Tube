import React, { useState } from "react";

import Link from "next/link";

import NavbarLanding from "../components/NavbarLanding/NavbarLanding";

const Login = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div>
            <NavbarLanding />

            <section className="form-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                            <div className="form-div text-center">
                                <h2>Login</h2>
                                <p>Enter your account details below</p>
                                <form action="/login" method="POST">
                                    <div className="form-group mt-5">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
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
                                            <p>Keep me signed in </p>
                                        </label>
                                    </div>
                                    <div className="form-group button-block text-center">
                                        <button className="form-btn">
                                            Log me in
                                        </button>
                                        <p className="sign-up-text">
                                            Don&apos;t have an account yet?
                                            <Link href="/register"><a> Sign up</a></Link>
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

export default Login;
