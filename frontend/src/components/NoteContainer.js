import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [showContent, setShowContent] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(r => r.json())
    // .then(console.log)
    .then(data => setNotes(data))
  }, [])

  // console.log(notes)

  function handleShowContent(e) {
    console.log("displaying note", e.target)
    setShowContent(!showContent)
  }

  const displayedNotes = notes.filter((note) => {
    if (note.title) {
      return note.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  return (
    <>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="container">
        <Sidebar notes={displayedNotes} onShowContent={handleShowContent} />
        <Content notes={displayedNotes} showContent={showContent} />
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