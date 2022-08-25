import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../svg/Search";
import "./page.css";

const Page = ({ content }) => {
    const [viewPortSizeSmall, setViewPortSizeSmall] = useState();

    const handleView = () => {
        if (window.innerWidth <= 768) {
            setViewPortSizeSmall(true);
        } else {
            setViewPortSizeSmall(false);
        }
    };
    window.addEventListener("resize", handleView);

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/">
                            <img
                                src="/LogoFinalCroped.png"
                                alt="pro3dskyLogo"
                                className="logo"
                            />
                        </Link>
                        <div className="searchBar">
                            <input
                                className="searchBar"
                                placeholder="Search 3D models, textures, materials..."
                            />
                            <button className="searchBar">
                                <Search />
                            </button>
                        </div>
                    </div>
                    <div className="signOut">
                        {viewPortSizeSmall ? (
                            <>
                                <i className="fa-solid fa-arrow-right-from-bracket signOut"></i>
                            </>
                        ) : (
                            <>
                                <span className="signOut">sign out</span>
                                <i className="fa-solid fa-arrow-right-from-bracket signOut"></i>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <div className="page-width">{content}</div>
        </>
    );
};

export default Page;
