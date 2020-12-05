import React, { useState, useEffect } from "react";

import PicTile from "../../components/PicTile/PicTile";

const Slider = () => {
    // const tileElements = [
    //     { title: "Lorem ipsum 1", text: "This is weird" },
    //     { title: "Lorem ipsum 2", text: "This is weird" },
    //     { title: "Lorem ipsum 3", text: "This is weird" },
    //     { title: "Lorem ipsum 4", text: "This is weird" },
    //     { title: "Lorem ipsum 5", text: "This is weird" },
    //     { title: "Lorem ipsum 6", text: "This is weird" },
    //     { title: "Lorem ipsum 7", text: "This is weird" },
    //     { title: "Lorem ipsum 8", text: "This is weird" },
    //     { title: "Lorem ipsum 9", text: "This is weird" },
    //     { title: "Lorem ipsum 10", text: "This is weird" },
    // ];

    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:8000/api/data/")
                .then((res) => res.json())
                .then((data) => {
                    let csItems = [];
                    // data.items.forEach((item) => {
                    //     /CS:GO/g.test(item.snippet.title)
                    //         ? csItems.push(item)
                    //         : null;
                    // });
                    data.items.forEach((item) => {
                        csItems.push(item);
                    });
                    setItemData(csItems);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchData();
    });

    return (
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
                            {itemData.map((item, index) => (
                                <PicTile
                                    srcId={item.id.videoId}
                                    eleTitle={item.snippet.title}
                                    eleText={item.snippet.description}
                                    imageSrc={item.snippet.thumbnails.medium}
                                    key={index}
                                />
                            ))}

                            {/* {tileElements.map((item, index) => (
                                <PicTile
                                    eleTitle={item.title}
                                    eleText={item.text}
                                    imageSrc="images/s5.jpg"
                                    key={index}
                                />
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
