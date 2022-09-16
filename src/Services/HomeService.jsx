import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const HomeContext = createContext();

const getDesignsFetch = async (
  name = "",
  pro = false,
  free = false,
  category = "",
  page = 1,
  limit = 1
) => {
  const response = await fetch(
    `http://${
      process.env.REACT_APP_NETWORKIP
    }:3000/designs?name=${name}&isPremium=${
      pro ? (free ? "" : true) : free ? false : ""
    }&category=${category}&page=${page}&limit=${limit}`,
    { method: "GET", credentials: "include" }
  );
  return response.json();
};

const HomeService = ({ children }) => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [pro, setPro] = useState(false);
  const [free, setFree] = useState(false);
  const [category, setCategory] = useState("");
  const itemsPerPage = 6;
  const { isLoading, isError, status, error, data } = useQuery(
    ["designs", page, name, pro, free, category],
    () => getDesignsFetch(name, pro, free, category, page, itemsPerPage)
  );

  // data.totalUsers
  const DesignsCount = status === "success" ? data.totalDesigns : 1;

  useEffect(() => {});

  return (
    <HomeContext.Provider
      value={{
        isLoading,
        isError,
        error,
        data,
        status,
        page,
        setPage,
        itemsPerPage,
        DesignsCount,
        name,
        setName,
        pro,
        setPro,
        free,
        setFree,
        category,
        setCategory,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeService;
