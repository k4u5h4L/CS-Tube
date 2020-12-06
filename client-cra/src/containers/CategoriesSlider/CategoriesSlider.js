import React from "react";
import CategoriesTile from "../../components/CategoriesTile/CategoriesTile";

const CategoriesSlider = () => {
    const categories = [
        "English",
        "Kannada",
        "Hindi",
        "Spanish",
        "Python",
        "JavaScript",
        "Django",
    ];

    return (
        <div className="category-wrapper slide-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-4">
                        <h2>Watch in Your Language</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="category-slider owl-carousel owl-theme">
                            {categories.map((item, index) => (
                                <CategoriesTile category={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;
