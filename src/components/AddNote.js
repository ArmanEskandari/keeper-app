import React, { useState, useContext } from "react";
import { NoteContext } from "./NoteContext";

const Addnote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useContext(NoteContext);

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addContent = (e) => {
    setContent(e.target.value);
  };

  const addToNotes = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => [...prevNotes, { title, content }]);
    setContent("");
    setTitle("");
  };

  return (
    <form onSubmit={addToNotes}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        onChange={addTitle}
      />
      <input
        className={"textArea"}
        type="text"
        name="title"
        value={content}
        placeholder="Take a note..."
        onChange={addContent}
      />
      <button>Add</button>
    </form>
  );
};

export default Addnote;
