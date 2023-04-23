import AddNote from "./AddNote";
import Note from "./Note";

const NotesGrid = ({ notes, handleAddNote, handleDelete }) => {
  //   console.log(notes);
  return (
    <div className="noteList">
      <AddNote handleAddNote={handleAddNote} />
      {notes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        notes
          .slice()
          .reverse()
          .map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.note}
              date={note.date}
              handleDelete={handleDelete}
            />
          ))
      )}
    </div>
  );
};

export default NotesGrid;
