import React, { useState } from "react";
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
function Content({ notes, isDisplayed }) {
  
  const getContent = () => {

    // if edit note button is clicked in NoteViewer component
    if (false) {
      // show edit form
      return <NoteEditor />;
      // else if note li in the sidebar is clicked
    } else if (isDisplayed) {
      // show note detail in NoteViewer
      return <NoteViewer notes={notes} />;
      // else if nothing is clicked
    } else {
      // show instructions
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
