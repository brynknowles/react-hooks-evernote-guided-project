import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onShowContent }) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onShowContent={onShowContent} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
