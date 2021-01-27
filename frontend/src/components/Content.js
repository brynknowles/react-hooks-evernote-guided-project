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

function Content({ note, showViewer, showEditor, onEditNote, onAddNote, onCancelAddNote, onDeleteNote }) {
  // console.log("note in Content: ", note)

  // *************************     CONDITIONAL RENDER OF NoteEditor, NoteViewer & Instructions COMPONENTS // ALSO PASSES DOWN PROPS TO THOSE COMPONENTS    *************************

  
  const getContent = () => {

    if (showEditor) {
      return <NoteEditor note={note} onAddNote={onAddNote} onCancelAddNote={onCancelAddNote} />;
    } else if (showViewer) {
      return <NoteViewer note={note} onEditNote={onEditNote} onDeleteNote={onDeleteNote} />;
    } else {
      return <Instructions />;
    }
  };

  // *************************     JSX RETURNS WHATEVER COMPONENT RETURNED TRUE IN THE CONDITIONAL    *************************


  return (
    <div className="master-detail-element detail">{getContent()}</div>
  )
}

export default Content;

