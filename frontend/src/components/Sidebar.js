import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onDisplayNote }) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onDisplayNote={onDisplayNote}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
