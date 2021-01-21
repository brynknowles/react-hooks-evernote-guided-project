import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [noteSearch, setNoteSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(r => r.json())
    // .then(console.log)
    .then(data => setNotes(data))
  }, [])

  // console.log(notes)

  function handleDisplayNote(e) {
    console.log("displaying note", e.target)
    setIsDisplayed(!isDisplayed)

  }

  const filteredNotes = notes.filter((note) => {
    if (note.title) {
      return note.title.toLowerCase().includes(noteSearch.toLowerCase())
    }
  })

  function handleSearchText(e) {
    console.log("searching...")
    setNoteSearch(e.target.value)
  }

  return (
    <>
      <Search onNoteSearch={handleSearchText} setNoteSearch={setNoteSearch} />
      <div className="container">
        <Sidebar notes={filteredNotes} onDisplayNote={handleDisplayNote} />
        <Content notes={notes} isDisplayed={isDisplayed} />
      </div>
      {/* <div className="master-detail-element detail">
        {getContent()}
      </div>; */}
    </>
  );
}

export default NoteContainer;


/* 
[ ] Display all notes in the left sidebar.
[ ] Displayed sidebar notes should show the title and a truncated body.
[ ] When clicking a note from the sidebar, display its contents in the right panel.
*/