import React, { useState } from "react";
import "./proFreeButtons.css";
import Select from "react-select";
import { sidebarList } from "../../../Sidebar/SidebarData";

const selectStyle = {
    option: (styles) => ({ ...styles, textTransform: "capitalize" }),
    control: (styles) => ({
        ...styles,
        padding: "0.1rem 0rem",
        borderColor: "#d0d0d0",
        textTransform: "capitalize",
    }),
};

const ProFreeButtons = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="buttons">
            <div className="content proFreeButtons">
                <button className="proFreeButtons selected">pro</button>
                <button className="proFreeButtons">free</button>
            </div>
            <div className="sidebarOptions">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Categories"
                    options={sidebarList}
                    styles={selectStyle}
                />
            </div>
        </div>
    );
};

export default ProFreeButtons;
