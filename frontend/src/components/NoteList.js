import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDisplayNote }) {

  const displayNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} onDisplayNote={onDisplayNote} />
  })
  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
