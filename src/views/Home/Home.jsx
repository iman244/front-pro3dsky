import React from "react";
import "./home.css";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="page home">
            <div className="container sidebar">
                <Sidebar />
            </div>
            <div className="container main">
                <Main />
            </div>
        </div>
    );
};

export default Home;
