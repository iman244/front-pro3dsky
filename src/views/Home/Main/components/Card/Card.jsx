import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import "./card.css";

const CardImg = ({ src, desc }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            <div className="imgCard">
                <img src={src[0]} alt="" className="imgCard" />
                <div className="showHide">
                    <div className="multiImg">
                        <div className="container">
                            {src.map((imgSrc, index) => {
                                return (
                                    <img
                                        src={imgSrc}
                                        alt=""
                                        className="multiImg"
                                        onClick={() => openImageViewer(index)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc">
                <span className="desc">{desc}</span>
            </div>
            <div className="download">
                <button className="download">
                    <span className="download">download</span>
                    <i className="fa fa-download download"></i>
                </button>
            </div>
            {isViewerOpen && (
                <ImageViewer
                    src={src}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                    closeOnClickOutside={true}
                />
            )}
        </>
    );
};

export default CardImg;
