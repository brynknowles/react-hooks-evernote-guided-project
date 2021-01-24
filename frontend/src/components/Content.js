import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({ isSelected, note, showEditForm, onEditNote, onAddNewNote, onCancelAddNote, onDeleteNote }) {
  
  const getContent = () => {

    if (showEditForm) {
      return <NoteEditor onAddNewNote={onAddNewNote} onCancelAddNote={onCancelAddNote} />;
    } else if (isSelected) {
      return <NoteViewer note={note} onEditNote={onEditNote} onDeleteNote={onDeleteNote} />;
    } else {
      return <Instructions />;
    }
  };

  return (
    // <div className="master-detail-element detail"><NoteViewer /></div>
    // <div className="master-detail-element detail"><NoteEditor /></div>
    <div className="master-detail-element detail">{getContent()}</div>
  )
}

export default Content;

// function Content() {
//   const getContent = () => {
//     if (false) {
//       return <NoteEditor />;
//     } else if (false) {
//       return <NoteViewer />;
//     } else {
//       return <Instructions />;
//     }
//   };

//   return <div className="master-detail-element detail">{getContent()}</div>;
// }

// export default Content;
