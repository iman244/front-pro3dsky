import React, { useCallback, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { cardsData } from "../Home/Main/cardsData";
import DownloadButton from "../../components/Buttons/DownloadButton";
import MiniImage from "./MiniImage";
import ReactSimpleImageViewer from "react-simple-image-viewer";

// cardsData[`${params.id - 1}`].src

const Product = () => {
    let params = useParams();
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
            <div className="page product">
                <div className="product container">
                    <div className="imagePdescDownload">
                        <div className="image">
                            <img
                                className="Image0"
                                src={cardsData[`${params.id - 1}`].src[0]}
                                alt="design"
                            />
                        </div>
                        <div className="descAndDownload">
                            <div className="desc">
                                <span className="desc">
                                    {cardsData[`${params.id - 1}`].desc}
                                </span>
                            </div>
                            <div className="download">
                                <DownloadButton
                                    buttonStyle={{
                                        borderRadius: "3px",
                                        padding: "10px 20px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="listOfImages">
                        {cardsData[`${params.id - 1}`].src.map(
                            (image, index) => (
                                <MiniImage
                                    image={image}
                                    index={index}
                                    openImageViewer={openImageViewer}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
            {isViewerOpen && (
                <ReactSimpleImageViewer
                    src={cardsData[`${params.id - 1}`].src}
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

export default Product;
