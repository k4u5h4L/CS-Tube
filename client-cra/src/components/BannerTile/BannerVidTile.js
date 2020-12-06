import React from "react";

const BannerVidTile = () => {
    return (
        <div className="owl-items">
            <div className="banner-wrap justify-content-between align-items-center">
                <div className="left-wrap">
                    <span className="rnd">IMDb 6.7</span>
                    <h2>
                        The <br />
                        night ever
                    </h2>
                    <span className="tag">
                        <b>SEASON 1</b>
                    </span>
                    <span className="tag">2020</span>
                    <span className="tag">
                        <b>HD</b>
                    </span>
                    <span className="tag">
                        <b>16+</b>
                    </span>
                    <span className="tag">2 h 20 min</span>
                    <p>
                        Radhe is a singing prodigy determined to follow in the
                        classNameical footsteps of his grandfather. Tamanna is a
                        YouTube pop sensation desperate to become .
                    </p>
                    <a href="video.html" className="btn btn-lg">
                        <img src="images/play.png" alt="icn" />
                        Watch now
                    </a>
                </div>
                <div className="right-wrap">
                    <video autoPlay muted loop id="myVideo">
                        <source src="images/video3.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default BannerVidTile;
