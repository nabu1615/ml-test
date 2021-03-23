import React, { useState } from 'react'

const SearchContext = React.createContext({});

export function ThemeSearchProvider ({ children }) {
    const [searchValue, setSearchValue] = useState('');

    return (
    <SearchContext.Provider value={{ searchValue, setSearchValue}}>
        {children}
    </SearchContext.Provider>
    )
}

export default SearchContext;