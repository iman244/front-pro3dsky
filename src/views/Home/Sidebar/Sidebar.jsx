import React from "react";
import "./sidebar.css"
import { sidebarList } from "./SidebarData";

const Sidebar = () => {
    return (
        <>
            <ul className="sidebar">
                {sidebarList.map((item) => {
                    return (
                        <li key={item.id} className="sidebar">
                            <span className="sidebar">{item.name}</span>
                            <i className="sidebar fa-solid fa-angle-right"></i>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Sidebar;
