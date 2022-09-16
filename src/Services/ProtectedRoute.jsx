import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "../views/Login/Login";
import { LoginServiceContext } from "./LoginService";
import ReactLoading from "react-loading";

const ProtectedRoute = ({ children }) => {
  const { sec } = useContext(LoginServiceContext);

  useEffect(() => {});

  return (
    <>
      {document.cookie ? (
        sec.data ? (
          sec.data.data ? (
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
        ) : sec.isLoading ? (
          <div className="loading">
            <ReactLoading
              type={"bars"}
              color={"gray"}
              height={"30%"}
              width={"30%"}
            />
          </div>
        ) : (
          <Login />
        )
      ) : (
        <Login />
      )}
    </>
  );
};

export default ProtectedRoute;
