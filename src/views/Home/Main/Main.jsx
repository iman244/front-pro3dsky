import React, { useContext } from "react";
import "./main.css";
import "./paginate.css";
import ProFreeButtons from "./components/ProFreeButtons/ProFreeButtons";
import Card from "./components/Card/Card";
import { cardsData } from "./cardsData";
import ReactPaginate from "react-paginate";
import { HomeContext } from "../../../Services/HomeService";
import LoaderPaginate from "./LoaderPaginate";
import ReactLoading from "react-loading";

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
  } = useContext(HomeContext);

  return (
    <div className="content main">
      <ProFreeButtons />
      <div className="cardList wrapper">
        {isLoading ? (
          <ReactLoading
            type={"bars"}
            color={"gray"}
            height={"30%"}
            width={"20%"}
          />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="grid-container">
            {data &&
              data.designs.map((card) => {
                return (
                  <div className="card" key={card._id}>
                    <Card id={card._id} src={card.keyList} desc={card.name} />
                  </div>
                );
              })}
          </div>
        )}
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
