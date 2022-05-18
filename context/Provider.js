import React, { createContext, useState } from "react";

export const GlobalContext = createContext(); // you can set a default value inside createContext if you want

export const Provider = ({ children }) => {
  
  const [load, setLoad] = useState(true); 
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ 
        load: [load, setLoad], 
        category: [category, setCategory],
        search: [search, setSearch],
        filter: [filter, setFilter],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
