import React from "react";

function NoteViewer({ notes }) {
  // console.log(note)
  const { id, title, body } = notes

  // const note = 

  return (
    <>
      <h2>title</h2>
      <p>body</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
