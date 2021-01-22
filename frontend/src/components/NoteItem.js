import React from "react";

function NoteItem({ note, onNoteClick }) {
  // console.log(note)
  // const { id, title, body } = note

  // console.log("body", note.body)

  const truncatedBody = () => {
    if (note.body) {
      return note.body.substring(0, 25).concat("...")
    }
  }

  return (
    <li onClick={() => onNoteClick()} >
      <h2>{note.title}</h2>
      {/* <p>{note.body}</p> */}
      <p>{truncatedBody(note.body)}</p>
    </li>
  );
}

export default NoteItem;
