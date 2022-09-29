import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Services/AppService";
import { HomeContext } from "../../Services/HomeService";
import Search from "../svg/Search";
import "./page.css";

const Page = ({ content }) => {
  let navigate = useNavigate();
  const [viewPortSizeSmall, setViewPortSizeSmall] = useState(true);
  const { name, setName } = useContext(HomeContext);
  const { errorUI, logOut } = useContext(AppContext);

  const handleView = () => {
    if (window.innerWidth <= 768) {
      setViewPortSizeSmall(true);
    } else {
      setViewPortSizeSmall(false);
    }
  };
  window.addEventListener("resize", handleView);

  const handleSignOut = () => {
    logOut.mutate();
  };

  useEffect(() => {
    handleView();
  }, []);

  useEffect(() => {
    if (document.cookie) {
      let access_token = document.cookie.match(
        /(?<=access_token=)[\s\S]+(?=;*)/
      )[0];
      if (!access_token) {
        errorUI("cookieProblem");
      }
    } else {
      errorUI("cookieProblem");
    }
  });

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/">
              {viewPortSizeSmall ? (
                <i className="fa-solid fa-house logo fa-lg"></i>
              ) : (
                <img
                  src="/LogoFinalCroped.png"
                  alt="pro3dskyLogo"
                  className="logo"
                />
              )}
            </Link>
            <div className="searchBar">
              <input
                className="searchBar"
                placeholder="Search 3D models, textures, materials..."
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <button className="searchBar">
                <Search onClick={() => navigate("/")} />
              </button>
            </div>
          </div>
          <div className="signOut" onClick={handleSignOut}>
            {viewPortSizeSmall ? (
              <>
                <i className="fa-solid fa-arrow-right-from-bracket fa-lg signOut"></i>
              </>
            ) : (
              <>
                <span className="signOut">sign out</span>
                <i className="fa-solid fa-arrow-right-from-bracket fa-lg signOut"></i>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="page-content">{content}</div>
    </>
  );
};

export default Page;
