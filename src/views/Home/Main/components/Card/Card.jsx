import React from "react";
import "./card.css";

const CardImg = ({ src, desc }) => {
    return (
        <>
            <div className="imgCard">
                <img src={src[0]} alt="" className="imgCard" />
                <div className="showHide">
                    <div className="multiImg">
                        <div className="container">
                            {src.map((imgSrc) => {
                                return (
                                    <img
                                        src={imgSrc}
                                        alt=""
                                        className="multiImg"
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
        </>
    );
};

export default CardImg;
