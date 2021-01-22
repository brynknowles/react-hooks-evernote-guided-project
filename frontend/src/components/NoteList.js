import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onNoteClick }) {

  const displayNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} onNoteClick={onNoteClick} />
  })
  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
