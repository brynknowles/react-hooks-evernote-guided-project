import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";


function NoteContainer() {

  // *************************     STATE VARIABLES WITH USE STATE HOOK    *************************

  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isSelected, setIsSelected] = useState(false)
  const [noteContent, setNoteContent] = useState({})
  const [showNoteEditor, setShowNoteEditor] = useState(false)
  const [isPost, setIsPost] = useState(false)

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

  // *************************     CLICK HANDLER FUNCTION FOR DELETE BUTTON    *************************

  function handleDeleteNote(id) {
    console.log(id)
    const updatedNoteArray = notes.filter((note) => note.id !== id)
    setNotes(updatedNoteArray)
    setNoteContent({})
    setIsSelected(!isSelected)
  }

  // *************************     CLICK HANDLER FUNCTION FOR CANCEL BUTTON    *************************

  function handleCancelAddNote() {
    setShowNoteEditor(!showNoteEditor)
  }

  // *************************     CLICK HANDLER FUNCTION FOR NEW BUTTON     *************************


  function handleAddNote(newNote) {
    // console.log(newNote)
    setIsPost(!isPost)
    setShowNoteEditor(!showNoteEditor)
    const newNoteArray = [newNote, ...notes]
    setNotes(newNoteArray)
  }

  // *************************     CLICK HANDLER FUNCTION FOR NOTE CONTENT DISPLAY     *************************

  function handleDisplayContent(selectedNote) {
    // console.log("display note content", selectedNote)
    setIsSelected(!isSelected)
    setNoteContent(selectedNote)
    // console.log(isSelected)
  }

  // *************************     CLICK HANDLER FUNCTION FOR EDIT BUTTON     *************************

  // // setting this up to handle my editing feature
  // function handleUpdateNote(updatedNote) {
  //   const updatedNoteArray = notes.map((note) => {
  //     if (note.id === updatedNote.id) {
  //       return updatedNote
  //     } else {
  //       return note
  //     }
  //   })
  //   setNotes(updatedNoteArray)
  // }

// *************************     FILTERED NOTES FOR SEARCH     *************************

  const displayedNotes = notes.filter((note) => {
    console.log("note in search term filter: ", note)
    if (note) {
      if (note.title) {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase())
      }
    }
  })

// *************************     JSX RETURNS SEARCH, SIDEBAR & CONTENT COMPONENTS    *************************

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <Sidebar notes={displayedNotes} onDisplayContent={handleDisplayContent} onAddNote={handleAddNote} />
        <Content note={noteContent} isSelected={isSelected} showNoteEditor={showNoteEditor} onAddNote={handleAddNote} onCancelAddNote={handleCancelAddNote} onDeleteNote={handleDeleteNote} isPost={isPost} />
      </div>
    </>
  );
}

export default NoteContainer;
