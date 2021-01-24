import React, { useState } from "react";

function NoteEditor({ onAddNewNote, onCancelAddNote }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // console.log({ title, body })

  function handleSubmit(event) {
    event.preventDefault()
    // console.log("submitting")

    const formData = {
      title: title,
      body: body
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
        onAddNewNote(newNote)
      })
      
  }; 

  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={onCancelAddNote}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;

/*
CREATING NOTES
[x] At the bottom of your left sidebar, show a New button.
[x] Clicking New will create a new note via a POST request with some default title and body.
[x] This new note should appear in the sidebar.
*/

/*
EDITING NOTES
[ ] When displaying a note in the right panel, show an Edit button.
[ ] Clicking the Edit button will allow the user to edit the title and body in the right panel.
[ ] When in edit mode, also show a Save button which saves the note via a PATCH request.
[ ] When in edit mode, also show a Cancel button which discards any changes and reverts back to displaying the note.
[ ] Clicking a different note while in edit mode should discard your changes and display the new note instead.
*/
