import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const HomeContext = createContext();

const getDesignsFetch = async (name = "", page = 1, limit = 1) => {
  const response = await fetch(
    `http://${process.env.REACT_APP_NETWORKIP}:3000/designs?name=${name}&page=${page}&limit=${limit}`
  );
  return response.json();
};

const HomeService = ({ children }) => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const itemsPerPage = 6;
  const { isLoading, isError, status, error, data } = useQuery(
    ["designs", page, name],
    () => getDesignsFetch(name, page, itemsPerPage)
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
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeService;
