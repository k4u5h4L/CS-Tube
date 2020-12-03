import React from "react";

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PicTile = (props) => {
    const image = {
        width: 300,
        // height: 600,
        // resizeMode: 'cover'
    };
    return (
        <div className="owl-items" style={image}>
            <Link className="slide-one" to={`/v/${props.srcId}`}>
                <div className="slide-image">
                    <img
                        src={props.imageSrc.url}
                        // width="400"
                        // height="180"
                        alt="image"
                    />
                </div>
                <div className="slide-content">
                    <h2>
                        {props.eleTitle}
                        <img src="images/plus.png" alt="icon" />
                    </h2>
                    <p>{props.eleText}</p>
                    <span className="tag">2 h 20 min</span>
                    <span className="tag">2020</span>
                    <span className="tag">
                        <b>HD</b>
                    </span>
                    <span className="tag">
                        <b>16+</b>
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default PicTile;
