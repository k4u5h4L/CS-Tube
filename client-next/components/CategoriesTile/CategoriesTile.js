import React from "react";

const CategoriesTile = (props) => {
    return (
        <div className="owl-items">
            <a
                href="search.html"
                className="category-wrap"
                style={{
                    backgroundImage: 'url("' + `images/gb1.png` + '")',
                }}
            >
                <span>{props.category}</span>
            </a>
        </div>
    );
};

export default CategoriesTile;
