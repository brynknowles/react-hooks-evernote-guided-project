import React from "react";

function NoteViewer({ note, onEditNote, onDeleteNote }) {
  const { id, title, body } = note

  function handleDeleteClick() {
    // console.log(id)
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "DELETE"
    })
    onDeleteNote(id)
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onEditNote}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  );
}

export default NoteViewer;
