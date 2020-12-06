import React from "react";

// import SettingsBar from "../components/SettingsBar/SettingsBar";

// import Navbar from "../containers/Navbar/Navbar";
import Banner from "../containers/Banner/Banner";
import Slider from "../containers/Slider/Slider";
import CategoriesSlider from "../containers/CategoriesSlider/CategoriesSlider";

const Home = () => {
    return (
        <div>
            <Banner />
            <Slider />
            <CategoriesSlider />
        </div>
    );
};

export default Home;
