import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onShowContent }) {

  const displayNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} onShowContent={onShowContent} />
  })
  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
