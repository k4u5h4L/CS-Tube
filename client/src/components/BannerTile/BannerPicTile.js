import React from "react";

const BannerPicTile = () => {
    return (
        <div className="owl-items">
            <div className="banner-wrap justify-content-between align-items-center">
                <div className="left-wrap">
                    <span className="rnd">IMDb 6.7</span>
                    <h2>
                        Mother of <br />
                        Brooklyn
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
                    <a href="season.html" className="btn btn-lg">
                        <img src="images/play.png" alt="icn" />
                        Watch now
                    </a>
                </div>
                <div
                    className="right-wrap"
                    style={{
                        backgroundImage: 'url("' + `images/banner-4.jpg` + '")',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default BannerPicTile;
