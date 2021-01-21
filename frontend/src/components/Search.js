import React from "react";

function Search({ setSearchTerm, onSearchChange }) {

  return (
    <div className="filter">
      <input 
        id="search-bar" 
        type="text" 
        placeholder="Search Notes" 
        value={setSearchTerm} 
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
