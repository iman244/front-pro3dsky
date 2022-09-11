import React, { useContext } from "react";
import "./main.css";
import "./paginate.css";
import ProFreeButtons from "./components/ProFreeButtons/ProFreeButtons";
import Card from "./components/Card/Card";
import { cardsData } from "./cardsData";
import ReactPaginate from "react-paginate";
import { DesignContext } from "../DesignService";
import LoaderPaginate from "./LoaderPaginate";

const Main = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    setPage,
    itemsPerPage,
    DesignsCount,
    page,
    keyword,
    setKeyword,
  } = useContext(DesignContext);

  return (
    <div className="content main">
      <ProFreeButtons />
      <div className="cardList wrapper">
        <div className="grid-container">
          {cardsData.map((card) => {
            return (
              <div className="card" key={card.id}>
                <Card id={card.id} src={card.src} desc={card.desc} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        {isLoading ? (
          <LoaderPaginate />
        ) : (
          <ReactPaginate
            breakLabel="..."
            nextLabel="forward"
            onPageChange={(event) => setPage(event.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(DesignsCount / itemsPerPage)}
            previousLabel="backward"
            renderOnZeroPageCount={null}
            pageClassName="page"
            pageLinkClassName="pagelink"
            previousClassName="previouse"
            previousLinkClassName="previouselink"
            nextClassName="next"
            nextLinkClassName="nextlink"
            breakClassName="break"
            breakLinkClassName="breaklink"
            containerClassName="container"
            activeClassName="active"
          />
        )}
      </div>
    </div>
  );
};

export default Main;
