import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onDisplayContent, onAddNewNote }) {

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onDisplayContent={onDisplayContent} />
      <button onClick={onAddNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
