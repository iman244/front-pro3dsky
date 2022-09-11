import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const DesignContext = createContext();

const getAllUsersFetch = async (keyword = "", page = 1, limit = 1) => {
  const response = await fetch(
    `http://${process.env.REACT_APP_NETWORKIP}:3000/users?keyword=${keyword}&page=${page}&limit=${limit}`
  );
  return response.json();
};

const DesignService = ({ children }) => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const itemsPerPage = 6;
  const { isLoading, isError, status, error, data } = useQuery(
    ["users", page, keyword],
    () => getAllUsersFetch(keyword, page, itemsPerPage)
  );

  // data.totalUsers
  const DesignsCount = status === "success" ? 10 : 10;

  useEffect(() => {});

  return (
    <DesignContext.Provider
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
        keyword,
        setKeyword,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};

export default DesignService;
