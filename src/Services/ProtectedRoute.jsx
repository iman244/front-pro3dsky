import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { LoginServiceContext } from "./LoginService";
import ReactLoading from "react-loading";
import "./reactLoadingCss.css";
import Login from "../views/Login/Login";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { sec } = useContext(LoginServiceContext);

  useEffect(() => {});

  return (
    <>
      {document.cookie ? (
        sec.isSuccess ? (
          sec.data ? (
            children ? (
              children
            ) : (
              <Outlet />
            )
          ) : children ? (
            children
          ) : (
            <Outlet />
          )
        ) : (
          <div className="loading">
            <ReactLoading
              type={"bars"}
              color={"gray"}
              height={"fit-content"}
              width={"200px"}
            />
          </div>
        )
      ) : (
        <>
          {/* {console.log("we are in 4")} */}
          <Login />
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
