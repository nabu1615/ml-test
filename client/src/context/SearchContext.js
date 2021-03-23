import React, { useState } from "react";

const SearchContext = React.createContext({});

export function ThemeSearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue, categoryId, setCategoryId }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
