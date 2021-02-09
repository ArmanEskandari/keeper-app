import React, { useContext } from "react";
import { NoteContext } from "./NoteContext";
import DeleteButton from "./DeleteButton";
import "../styles.css";

const Note = () => {
  const [notes, setNotes] = useContext(NoteContext);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} id={index} className="note">
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <DeleteButton index={index} onDelete={deleteNote} />
        </div>
      ))}
    </div>
  );
};

export default Note;
