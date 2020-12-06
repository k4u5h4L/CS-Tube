import React from "react";

import { useParams } from "react-router-dom";

import VideoInfoBanner from "../components/VideoInfoBanner/VideoInfoBanner";

const VideoInfo = () => {
    let { vId } = useParams();
    console.log(vId);
    return (
        <div>
            <VideoInfoBanner />

            <div className="slide-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-left mb-4 mt-4">
                            <h2>Specials & Latest Movies</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="slide-slider-full owl-carousel owl-theme">
                                <div className="owl-items">
                                    <a className="slide-one" href="season.html">
                                        <div className="slide-image">
                                            <img
                                                src="images/s1.jpg"
                                                alt="image"
                                            />
                                        </div>
                                        <div className="slide-content">
                                            <h2>
                                                Made in haven{" "}
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <p>
                                                Radhe is a singing prodigy
                                                determined to follow in the
                                                classNameical footsteps of his
                                                grandfather.
                                            </p>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
                                            <span className="tag">
                                                <b>HD</b>
                                            </span>
                                            <span className="tag">
                                                <b>16+</b>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="owl-items">
                                    <a className="slide-one" href="season.html">
                                        <div className="slide-image">
                                            <img
                                                src="images/s2.jpg"
                                                alt="image"
                                            />
                                        </div>
                                        <div className="slide-content">
                                            <h2>
                                                Made in haven{" "}
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <p>
                                                Radhe is a singing prodigy
                                                determined to follow in the
                                                classNameical footsteps of his
                                                grandfather.
                                            </p>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
                                            <span className="tag">
                                                <b>HD</b>
                                            </span>
                                            <span className="tag">
                                                <b>16+</b>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="owl-items">
                                    <a className="slide-one" href="season.html">
                                        <div className="slide-image">
                                            <img
                                                src="images/s3.jpg"
                                                alt="image"
                                            />
                                        </div>
                                        <div className="slide-content">
                                            <h2>
                                                Made in haven{" "}
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <p>
                                                Radhe is a singing prodigy
                                                determined to follow in the
                                                classNameical footsteps of his
                                                grandfather.
                                            </p>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
                                            <span className="tag">
                                                <b>HD</b>
                                            </span>
                                            <span className="tag">
                                                <b>16+</b>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="owl-items">
                                    <a className="slide-one" href="season.html">
                                        <div className="slide-image">
                                            <img
                                                src="images/s4.jpg"
                                                alt="image"
                                            />
                                        </div>
                                        <div className="slide-content">
                                            <h2>
                                                Made in haven{" "}
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <p>
                                                Radhe is a singing prodigy
                                                determined to follow in the
                                                classNameical footsteps of his
                                                grandfather.
                                            </p>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
                                            <span className="tag">
                                                <b>HD</b>
                                            </span>
                                            <span className="tag">
                                                <b>16+</b>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoInfo;
