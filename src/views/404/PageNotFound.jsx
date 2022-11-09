import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = ({ redirectPage }) => {
  const navigate = useNavigate();
  const default_destination = "/";
  const destination = redirectPage ? redirectPage : default_destination;
  useEffect(() => {
    setTimeout(() => navigate(destination), 2000);
  }, []);
  return (
    <div
      style={{
        fontWeight: "900",
        textTransform: "capitalize",
        fontSize: "4rem",
        textAlign: "center",
      }}
    >
      page not found
    </div>
  );
};

export default PageNotFound;
