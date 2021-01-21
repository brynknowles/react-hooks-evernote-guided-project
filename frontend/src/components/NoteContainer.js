import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(r => r.json())
    // .then(console.log)
    .then(data => setNotes(data))
  }, [])

  console.log(notes)

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes} />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
