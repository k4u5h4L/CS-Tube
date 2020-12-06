import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SettingsBar from "./components/SettingsBar/SettingsBar";
import Navbar from "./containers/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TandC from "./pages/TandC";
import VideoInfo from "./pages/VideoInfo";

// style={{
//     backgroundImage: 'url("' + `images/gb1.png` + '")',
// }}

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/tandc" exact>
                        <TandC />
                    </Route>

                    <Route path="/">
                        <div className="preloader"></div>
                        <SettingsBar />

                        <div className="main-wrapper">
                            <Navbar />
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>

                                <Route path="/about" exact>
                                    <h1>ABOUT</h1>
                                </Route>

                                <Route path="/v/:vId" exact>
                                    <VideoInfo />
                                </Route>
                            </Switch>
                            <Footer />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
