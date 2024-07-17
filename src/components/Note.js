import React from 'react';
import { useDispatch } from 'react-redux';
import { pinNote, deleteNote } from '../redux/notesSlice';
import './Note.css';

const Note = ({ note, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="note" style={{ backgroundColor: note.backgroundColor }}>
      {note.title && <h3>{note.title}</h3>}
      <p>{note.content}</p>
      {note.image && <img src={note.image} alt="Note" />}
      <div className="note-actions">
        <button onClick={() => dispatch(pinNote(note.id))}>
          {note.pinned ? 'Unpin' : 'Pin'}
        </button>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
