import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [create, setCreate] = useState(true);
  const limit = 150;

  const handleChange = (e) => {
    if (limit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setCreate(true);
    }
  };

  const handleCancel = () => {
    setCreate(true);
    setNoteText("");
  };

  const handleCreate = () => {
    setCreate(false);
  };

  return (
    <>
      {create ? (
        <div className="note addNote" onClick={() => handleCreate()}>
          <MdAddCircleOutline size={"20px"} /> Add new note
        </div>
      ) : (
        <div className="note new">
          <textarea
            cols="10"
            rows="8"
            placeholder="Type to add new note..."
            onChange={handleChange}
            value={noteText}
          ></textarea>
          <div className="note-footer">
            <span>{limit - noteText.length} remaining</span>
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save" onClick={handleSave}>
              Save Note
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNote;
