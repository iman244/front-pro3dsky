import React from "react";
import { createContext } from "react";
import { useQuery } from "react-query";

export const ProductContext = createContext();

const getDesign = async (id) => {
  const response = await fetch(
    `http://${process.env.REACT_APP_NETWORKIP}:3000/designs/${id}`
  );
  return response.json();
};

const ProductService = () => {
  const { data } = useQuery();
  return <ProductContext.Provider>ProductService</ProductContext.Provider>;
};

export default ProductService;
