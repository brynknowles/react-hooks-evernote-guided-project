import React from "react";

function NoteItem({ note }) {
  const { id, title, body } = note
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
}

export default NoteItem;
