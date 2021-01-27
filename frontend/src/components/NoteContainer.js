import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";


function NoteContainer() {

  // *************************     STATE VARIABLES WITH USE STATE HOOK    *************************

  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [noteContent, setNoteContent] = useState({})
  const [showViewer, setShowViewer] = useState(false)
  const [showEditor, setShowEditor] = useState(false)

  // console.log(notes)
  // console.log("search term: ", searchTerm)

// *************************     USE EFFECT HOOK & FETCH FOR API     *************************

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(r => r.json())
    // .then(console.log)
    .then(notesArray => setNotes(notesArray))
  }, [])

  // console.log(notes)

    // *************************     CLICK HANDLER FUNCTION FOR EDIT BUTTON     *************************

  // // // setting this up to handle my editing feature
  function handleEditNote(editedNote) {
    console.log(editedNote)
    const updatedNoteArray = notes.map((note) => {
      if (note.id === editedNote.id) {
        return editedNote
      } else {
        return note
      }
    })
    console.log(updatedNoteArray)
    // setNotes(updatedNoteArray)
  }

  // *************************     CLICK HANDLER FUNCTION FOR DELETE BUTTON    *************************

  function handleDeleteNote(id) {
    console.log(id)
    const updatedNoteArray = notes.filter((note) => note.id !== id)
    setNotes(updatedNoteArray)
    setNoteContent({})
    setShowViewer(!showViewer)
  }

  // *************************     CLICK HANDLER FUNCTION FOR CANCEL BUTTON -- USED ONLY FOR CANCELING A NEW NOTE    *************************

  function handleCancelAddNote() {
    setShowEditor(!showEditor)
  }

  // *************************     CLICK HANDLER FUNCTION FOR NEW BUTTON     *************************

  function handleAddNote(newNote) {
    // console.log(newNote)
    setShowEditor(!showEditor)
    const newNoteArray = [newNote, ...notes]
    setNotes(newNoteArray)
  }

  // *************************     CLICK HANDLER FUNCTION FOR NOTE CONTENT DISPLAY     *************************

  function handleDisplayContent(selectedNote) {
    // console.log("display note content", selectedNote)
    setShowViewer(!showViewer)
    setNoteContent(selectedNote)
    // console.log(isSelected)
  }


// *************************     FILTERED NOTES COMPARED TO SEARCH TERM    *************************

  const displayedNotes = notes.filter((note) => {
    // console.log("note in search term filter: ", note)
    if (note) {
      if (note.title) {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase())
      }
    }
  })

// *************************     JSX RETURNS Search, Sidebar & Content COMPONENTS    *************************

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <Sidebar notes={displayedNotes} onDisplayContent={handleDisplayContent} onAddNote={handleAddNote} />
        <Content note={noteContent} showViewer={showViewer} showEditor={showEditor} onAddNote={handleAddNote} onCancelAddNote={handleCancelAddNote} onDeleteNote={handleDeleteNote} onEditNote={handleEditNote} />
      </div>
    </>
  );
}

export default NoteContainer;
