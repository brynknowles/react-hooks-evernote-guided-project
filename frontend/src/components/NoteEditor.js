
import React, { useState } from "react";

function NoteEditor({ note, onAddNote, onCancelAddNote, onUpdateNote }) {
  const { id, title, body } = note
  const [noteTitle, setNoteTitle] = useState("")
  const [noteBody, setNoteBody] = useState("")
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedBody, setEditedBody] = useState(body)

  // console.log({ title, body })

      // *************************     SUBMIT HANDLER FUNCTION FOR THE NEW NOTE     *************************

  function handleCreateSubmit(event) {
    event.preventDefault()
    // console.log("submitting")

    const formData = {
      title: noteTitle,
      body: noteBody
    };

    // console.log(formData);

    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(console.log)
      // .then((newNote => {
      //   console.log(newNote)
      // }))
      .then(newNote => {
        onAddNote(newNote)
      })
      
  }; 

    // *************************     SUBMIT HANDLER FUNCTION FOR THE EDIT FORM     *************************

  function handleEditSubmit(e) {
    e.preventDefault()
    console.log({ editedTitle, editedBody })

    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: editedTitle,
        body: editedBody
      })
    })
      .then(r => r.json())
      .then(console.log)
      // .then(editedNote => {
      //   onAddNote(editedNote)
      // })
  }

// need to make a toggle in the form so that if it's a post request, handleCreateSubmit and setNoteBody + setNoteTitle OR if it's a patch request, handleEditSubmit and setEditedTitle + setEditedBody

  // *************************     JSX RETURNS Note Editor Form     *************************

  return (
    <form className="note-editor" onSubmit={handleCreateSubmit}>
      <input type="text" name="title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
      <textarea name="body" value={noteBody} onChange={(e) => setNoteBody(e.target.value)}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={onCancelAddNote}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;