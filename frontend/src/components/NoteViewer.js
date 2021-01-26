import React from "react";

function NoteViewer({ note, onUpdateNote, onDeleteNote }) {
  const { id, title, body } = note

  function handleDeleteClick() {
    // console.log(id)
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "DELETE"
    })
    onDeleteNote(id)
  }

  // another idea is to have the handleEditNote function live here with the PATCH.
  // remove the onUpdateNote
  // pass down showEditForm and setShowEditForm state to use here in the handleEditNote fn
  // create a function handleEditNote that sets the state as showing the edit form

  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onUpdateNote}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  );
}

export default NoteViewer;
