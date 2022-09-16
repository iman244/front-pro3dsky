import React from "react";
import { useContext } from "react";
import { HomeContext } from "../../../Services/HomeService";
import "./sidebar.css";
import { sidebarList } from "./SidebarData";

const Sidebar = () => {
  const { category, setCategory } = useContext(HomeContext);

  return (
    <>
      <ul className="sidebar">
        {sidebarList.map((item) => {
          return (
            <li
              key={item.id}
              className={
                item.value === category ? "sidebar selected" : "sidebar"
              }
              onClick={() => {
                item.value === category
                  ? setCategory("")
                  : setCategory(item.value);
              }}
            >
              <span className="sidebar">{item.label}</span>
              <i className="sidebar fa-solid fa-angle-right"></i>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
