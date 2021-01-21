import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {

  const displayNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} />
  })
  return (
    <ul>
      {displayNotes}
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
