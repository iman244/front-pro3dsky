import React from "react";
import { Link } from "react-router-dom";
import Search from "../svg/Search";
import "./page.css";

const Page = ({ content }) => {
    return (
        <div>
            <nav>
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
            </nav>
            <div>{content}</div>
        </div>
    );
};

export default Page;
