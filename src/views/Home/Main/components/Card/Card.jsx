import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import DownloadButton from "../../../../../components/Buttons/DownloadButton";
import "./card.css";

const CardImg = ({ id, src, desc }) => {
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
            <Link to={`${id}`}>
                <div className="desc">
                    <span className="desc">{desc}</span>
                </div>
            </Link>
            <div className="download">
                <DownloadButton />
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
