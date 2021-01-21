import React from "react";

function Search({ onNoteSearch}) {

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange={onNoteSearch}/>
    </div>
  );
}

export default Search;
