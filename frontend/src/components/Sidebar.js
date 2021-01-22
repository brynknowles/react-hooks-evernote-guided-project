import React, { useState } from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, selectNote, onNoteClick }) {
  // const [activeNote, setActiveNote] = useState(false)

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} selectNote={selectNote} onNoteClick={onNoteClick} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
