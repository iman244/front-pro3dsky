import React, { useCallback, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import { cardsData } from "../Home/Main/cardsData";
import DownloadButton from "../../components/Buttons/DownloadButton";
import MiniImage from "./MiniImage";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import { useQuery } from "react-query";
import { useEffect } from "react";

const getDesign = async (id) => {
  const response = await fetch(
    `http://${process.env.REACT_APP_NETWORKIP}:3000/designs/${id}`
  );

  return response.json();
};

const Product = () => {
  let params = useParams();
  const design = useQuery("design", () => getDesign(params.id));

  const { data } = design;
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

  useEffect(() => {});
  return (
    <>
      {data && (
        <>
          <div className="page product">
            <div className="product container">
              <div className="imagePdescDownload">
                <div className="image">
                  {
                    <img
                      className="image-index"
                      src={`https://${process.env.REACT_APP_BUCKETS3_NAME}.${process.env.REACT_APP_ENDPOINT_URL}/${data.keyList[0]}`}
                      alt="design"
                    />
                  }
                </div>
                <div className="descAndDownload">
                  <div className="desc">
                    <span className="desc">{data.name}</span>
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
