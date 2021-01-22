import React, { useState } from "react";

function NoteEditor() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // console.log("title", title)
  // console.log("body", body)

  function handleSubmit(event) {
    event.preventDefault()
    console.log("submitting")

    const formData = {
      title: title,
      body: body
    };

    console.log(formData);
  }; 
  
  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
