import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";


function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isSelected, setIsSelected] = useState(false)
  const [noteContent, setNoteContent] = useState({})
  const [showEditForm, setShowEditForm] = useState(false)

  // console.log(notes)

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(r => r.json())
    // .then(console.log)
    .then(notesArray => setNotes(notesArray))
  }, [])

  const displayedNotes = notes.filter((note) => {
    if (note.title) {
      return note.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  function handleDisplayNoteContent(selectedNote) {
    console.log("display note content", selectedNote)
    setIsSelected(!isSelected)
    setNoteContent(selectedNote)
    // console.log(isSelected)
  }

  function handleEditNote() {
    console.log("edit button clicked")
  }

  function handleDeleteNote(id) {
    console.log(id)
    const updatedNoteArray = notes.filter((note) => note.id !== id)
    setNotes(updatedNoteArray)
  }

  function handleNewNote(newNote) {
    console.log(newNote)
    setShowEditForm(!showEditForm)
    const newNoteArray = [newNote, ...notes]
    setNotes(newNoteArray)
  }

  return (
    <>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="container">
        <Sidebar notes={displayedNotes} isSelected={isSelected} onDisplayContent={handleDisplayNoteContent} onAddNewNote={handleNewNote} />
        <Content note={noteContent} isSelected={isSelected} showEditForm={showEditForm} onEditNote={handleEditNote} onAddNewNote={handleNewNote} onDeleteNote={handleDeleteNote} />
      </div>
    </>
  );
}

export default NoteContainer;
