import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import './Trash.css';

const Trash = () => {
  const trashedNotes = useSelector((state) => state.notes.trash);

  return (
    <div className="trash-container">
      <h2>Trash</h2>
      <div className="trash-list">
        {trashedNotes.length > 0 ? (
          trashedNotes.map(note => (
            <Note key={note.id} note={note} />
          ))
        ) : (
          <p>No notes in trash</p>
        )}
      </div>
    </div>
  );
};

export default Trash;
