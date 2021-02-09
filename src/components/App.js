import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import { NoteProvider } from "./NoteContext";
import "../styles.css";

function App() {
  return (
    <NoteProvider>
      <div>
        <Header />
        <AddNote />
        <Note />
        <Footer />
      </div>
    </NoteProvider>
  );
}

export default App;
