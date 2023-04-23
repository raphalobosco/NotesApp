import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Note = ({ id, text, date, handleDelete }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDeleteState = () => {
    setDeleting(true);
    handleDelete(id);
  };
  return (
    <>
      {deleting ? (
        "Deleting..."
      ) : (
        <m.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut" }}
        >
          <div key={id} className="note">
            <span>{text}</span>

            <div className="note-footer">
              <small>{date}</small>
              <FaTrashAlt
                className="delete"
                onClick={() => handleDeleteState()}
              />
            </div>
          </div>
        </m.div>
      )}
    </>
  );
};

export default Note;
