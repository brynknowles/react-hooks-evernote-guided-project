import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDisplayContent }) {

  const displayNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} onDisplayContent={onDisplayContent} />
  })

  // *************************     JSX RETURNS NoteItem COMPONENT     *************************

  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
