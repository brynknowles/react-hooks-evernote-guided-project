import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
// import NoteEditor from "./NoteEditor";
// import NoteViewer from "./NoteViewer";
// import Instructions from "./Instructions";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectNote, setSelectNote] = useState(false)
  const [noteContent, setNoteContent] = useState({})

  console.log(notes)

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(r => r.json())
    // .then(console.log)
    .then(notesArray => setNotes(notesArray))
  }, [])

  // console.log(notes)

  const displayedNotes = notes.filter((note) => {
    if (note.title) {
      return note.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  // const getContent = () => {

  //   if (selectedNote === "Edit") {
  //     return <NoteEditor />;
  //   } else if (selectedNote === "NoteItem") {
  //     return <NoteViewer />;
  //   } else {
  //     return <Instructions />;
  //   }
  // };

  function handleDisplayNoteContent(newSelectedNote) {
    console.log("display note content", newSelectedNote)
    setSelectNote(!selectNote)
    setNoteContent(newSelectedNote)
    // console.log(selectNote)
  }

  return (
    <>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="container">
        <Sidebar notes={displayedNotes} selectNote={selectNote} onNoteClick={handleDisplayNoteContent} />
        <Content selectNote={selectNote} note={noteContent} />
        {/* <div className="master-detail-element detail">{getContent()}</div> */}
      </div>
    </>
  );
}

export default NoteContainer;


/* 
[ ] Display all notes in the left sidebar.
[ ] Displayed sidebar notes should show the title and a truncated body.
[ ] When clicking a note from the sidebar, display its contents in the right panel.
*/

// import React from "react";
// import Search from "./Search";
// import Sidebar from "./Sidebar";
// import Content from "./Content";

// function NoteContainer() {
//   return (
//     <>
//       <Search />
//       <div className="container">
//         <Sidebar />
//         <Content />
//       </div>
//     </>
//   );
// }

// export default NoteContainer;