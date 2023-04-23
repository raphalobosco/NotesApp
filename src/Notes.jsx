import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import NotesGrid from "./components/NotesGrid";
import { BsStickiesFill } from "react-icons/bs";
import { getNotes } from "./lib/pocketbase";
import PocketBase from "pocketbase";

import Search from "./components/Search";

const Notes = () => {
  const pb = new PocketBase("https://notes-rapha.pockethost.io");
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes().then((data) => setNotes(data));
  }, []);

  console.log(notes);

  // Handle search
  const [search, setSearch] = useState("");

  // example create data

  const date = new Date();

  const addNote = async (text) => {
    const data = {
      note: text,
      date: date.toLocaleDateString(),
    };
    setLoading(true);
    try {
      const record = await pb.collection("notes").create(data);
      const newNotes = [...notes, record];
      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id) => {
    await pb.collection("notes").delete(id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1 className="title">
        <BsStickiesFill size={"1.5rem"} /> Notes App
      </h1>
      <Search handleSearch={setSearch} />
      {loading ? (
        <div className="loading-modal">
          {" "}
          <p>Saving...</p>
        </div>
      ) : null}

      <NotesGrid
        notes={notes.filter((note) => note.note.includes(search))}
        // notes={notes}
        handleAddNote={addNote}
        handleDelete={deleteNote}
      />
    </div>
  );
};

export default Notes;
