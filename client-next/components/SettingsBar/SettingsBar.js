import React from "react";

const SettingsBar = () => {
    return (
        <div>
            <div className="backdrop"></div>
            <div className="switchcolor">
                <img src="images/settings.png" alt="icon" />
            </div>
            <div className="switchcolor-wrap">
                <a className="link sheet-close">
                    <i className="ti-close"></i>
                </a>
                <h2>Settings</h2>
                {/* <h4>Choose Color Theme</h4>
                <ul>
                    <li>
                        <label className="item-radio item-content">
                            <input
                                type="radio"
                                name="color-radio"
                                value="red"
                                checked=""
                            />
                            <i className="ti-check"></i>
                            <span
                                className="circle-color bg-red"
                                style="background-color: #ff3b30;"
                            ></span>
                        </label>
                    </li>
                    <li>
                        <label className="item-radio item-content">
                            <input
                                type="radio"
                                name="color-radio"
                                value="green"
                            />
                            <i className="ti-check"></i>
                            <span
                                className="circle-color bg-green"
                                style="background-color: #4cd964;"
                            ></span>
                        </label>
                    </li> 
                </ul> */}
                <div className="toggle-div mt-4">
                    <h4 className="d-inline">Dark Mode</h4>
                    <div className="d-inline float-right">
                        <label className="toggle toggle-init">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsBar;
