import React from "react";
import "./main.css";
import ProFreeButtons from "./components/ProFreeButtons/ProFreeButtons";
import Card from "./components/Card/Card";
import { cardsData } from "./cardsData";

const Main = () => {
    return (
        <div className="content main">
            <ProFreeButtons />
            <div className="cardList wrapper">
                <div className="grid-container">
                    {cardsData.map((card) => {
                        return (
                            <div className="card" key={card.id}>
                                <Card
                                    id={card.id}
                                    src={card.src}
                                    desc={card.desc}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Main;
