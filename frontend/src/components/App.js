import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {

  // *************************     JSX RETURNS HEADER & NOTECONTAINER COMPONENTS     *************************

  return (
    <div className="app">
      <Header />
      <NoteContainer />
    </div>
  );
}

export default App;
