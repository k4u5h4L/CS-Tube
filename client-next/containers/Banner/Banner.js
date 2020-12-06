import React from "react";
import BannerPicTile from "../../components/BannerTile/BannerPicTile";
import BannerVidTile from "../../components/BannerTile/BannerVidTile";

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner-slider owl-carousel owl-theme">
                            <BannerPicTile />

                            <BannerPicTile />

                            <BannerPicTile />

                            <BannerVidTile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
