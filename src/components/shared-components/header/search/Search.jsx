import React from "react";
import searchSVG from '../../../../assets/svg/search.svg';

const Search = () => {
    return (<>
        <img src={searchSVG} className='icon-search' alt="Icon search" /> <span className="text-search">Search</span>
    </>)
}

export default Search;