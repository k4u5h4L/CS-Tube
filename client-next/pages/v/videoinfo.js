import React from "react";
import PicTile from "../../components/PicTile/PicTile";

import VideoInfoBanner from "../../components/VideoInfoBanner/VideoInfoBanner";

const VideoInfo = ({csItems}) => {
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
                            {/* {csItems.map((item, index) => (
                                <PicTile
                                    srcId={item.id.videoId}
                                    eleTitle={item.snippet.title}
                                    eleText={item.snippet.description}
                                    imageSrc={item.snippet.thumbnails.medium}
                                    key={index}
                                />
                            ))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps({ query }) {
    const id = query.id;
    console.log(id)
    try {
        const res = await fetch('http://localhost:8000/api/data/');
        const data = await res.json();
        console.log(data);
        let csItems = [];
                    data.items.forEach((item) => {
                        /CS:GO/g.test(item.snippet.title)
                            ? csItems.push(item)
                            : null;
                    });
        return {
            props: { csItems },
        };
    } catch (err) {
        console.error(err);
    }
}

export default VideoInfo;
