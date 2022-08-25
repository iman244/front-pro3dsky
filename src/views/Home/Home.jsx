import React from "react";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Main />
        </div>
    );
};

export default Home;
