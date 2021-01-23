import React from "react";

function NoteViewer({ note, onEditNote }) {

  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEditNote}>Edit</button>
    </>
  );
}

export default NoteViewer;
