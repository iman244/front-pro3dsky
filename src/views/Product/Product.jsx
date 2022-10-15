import React, { useCallback, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import DownloadButton from "../../components/Buttons/DownloadButton";
import MiniImage from "./MiniImage";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import { useQuery } from "react-query";
import ReactLoading from "react-loading";
import PageNotFound from "../404/PageNotFound";
import ImageLoading from "../../components/ImageLoading";
import Error403 from "../../components/Error403/Error403";
import { useContext } from "react";
import { AppContext } from "../../Services/AppService";

const getDesign = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_NETWORKIP}/designs/${id}`,
        { method: "GET", credentials: "include" }
    );

    return response.json();
};

const getFile = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_NETWORKIP}/file/${id}`,
        { method: "GET", credentials: "include" }
    );

    return response.json();
};

const Product = () => {
    let params = useParams();
    const { UserLog } = useContext(AppContext);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const { data, isLoading, isError, error } = useQuery(
        ["design", params.id],
        () => getDesign(params.id),
        {
            onError: (error) => UserLog("error", `${error.message}`),
        }
    );
    const file = useQuery("file", () => getFile(params.id), {});

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
            {isLoading ? (
                <div className="loading">
                    <ReactLoading
                        type={"bars"}
                        color={"gray"}
                        height={"fit-content"}
                        width={"200px"}
                    />
                </div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : data.statusCode === 400 || data.statusCode === 404 ? (
                <PageNotFound />
            ) : data.statusCode === 403 ? (
                <Error403 />
            ) : (
                <>
                    <div className="page product">
                        <div className="product container">
                            <div className="imagePdescDownload">
                                <div className="image">
                                    <ImageLoading
                                        height="100%"
                                        className="image-index"
                                        src={`https://${process.env.REACT_APP_BUCKETS3_NAME}.${process.env.REACT_APP_ENDPOINT_URL}/${data.keyList[0]}`}
                                        alt="design"
                                    />
                                </div>
                                <div className="descAndDownload">
                                    <div className="detail-container">
                                        <div className="d-wrapper">
                                            <span className="d-label">
                                                name:
                                            </span>
                                            <span className="d">
                                                {data.name}
                                            </span>
                                        </div>
                                        <div className="d-wrapper">
                                            <span className="d-label">
                                                category:
                                            </span>
                                            <span className="d">
                                                {data.category}
                                            </span>
                                        </div>
                                        <div className="d-wrapper">
                                            <span className="d-label">
                                                isPremium:
                                            </span>
                                            <span className="d">{`${data.isPremium}`}</span>
                                        </div>
                                    </div>
                                    <div className="download">
                                        <DownloadButton
                                            buttonStyle={{
                                                padding: "10px 20px",
                                            }}
                                            downloadLink={
                                                file.isSuccess
                                                    ? file.data.preSignedURL
                                                    : "#"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hr"></div>
                            <div className="listOfImages">
                                {data.keyList.map((name, index) => (
                                    <MiniImage
                                        key={name}
                                        image={`https://${process.env.REACT_APP_BUCKETS3_NAME}.${process.env.REACT_APP_ENDPOINT_URL}/${name}`}
                                        index={index}
                                        openImageViewer={openImageViewer}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {isViewerOpen && (
                        <ReactSimpleImageViewer
                            src={data.keyList.map(
                                (name) =>
                                    `https://${process.env.REACT_APP_BUCKETS3_NAME}.${process.env.REACT_APP_ENDPOINT_URL}/${name}`
                            )}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            disableScroll={false}
                            backgroundStyle={{
                                backgroundColor: "rgba(0,0,0,0.8)",
                                zIndex: "5000",
                            }}
                            closeOnClickOutside={true}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default Product;
