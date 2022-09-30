import React, { useContext } from "react";
import "./main.css";
import "./paginate.css";
import ProFreeButtons from "./components/ProFreeButtons/ProFreeButtons";
import Card from "./components/Card/Card";
import ReactPaginate from "react-paginate";
import { HomeContext } from "../../../Services/HomeService";
import ReactLoading from "react-loading";
import Error403 from "../../../components/Error403/Error403";

const Main = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    setPage,
    itemsPerPage,
    DesignsCount,
  } = useContext(HomeContext);

  return (
    <div className="content main">
      <ProFreeButtons />
      <div className="cardList wrapper">
        {isLoading ? (
          <ReactLoading
            type={"bars"}
            color={"gray"}
            height={"fit-content"}
            width={"200px"}
          />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <div className="grid-container">
              {data && data.statusCode === 403 ? (
                <Error403 />
              ) : data.totalDesigns ? (
                data.designs.map((card) => {
                  return (
                    <div className="card" key={card._id}>
                      <Card
                        id={card._id}
                        src={card.keyList}
                        desc={card.name}
                        isPremium={card.isPremium}
                      />
                    </div>
                  );
                })
              ) : (
                <p>there is no item to show!</p>
              )}
            </div>
          </>
        )}
      </div>
      <div className="bottom">
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
      </div>
    </div>
  );
};

export default Main;
