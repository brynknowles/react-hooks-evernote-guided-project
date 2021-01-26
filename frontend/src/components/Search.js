import React from "react";

function Search({ searchTerm, setSearchTerm }) {

  return (
    <div className="filter">
      <input 
        id="search-bar" 
        type="text" 
        placeholder="Search Notes" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
