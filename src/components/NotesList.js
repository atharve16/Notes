import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import EditNoteModal from './EditNoteModal';
import './NotesList.css';

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleEdit = (note) => {
    setSelectedNote(note);
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
  };

  return (
    <div className="notes-list">
      {notes.filter(note => note.pinned).map((note) => (
        <Note key={note.id} note={note} onEdit={handleEdit} />
      ))}
      {notes.filter(note => !note.pinned).map((note) => (
        <Note key={note.id} note={note} onEdit={handleEdit} />
      ))}
      {selectedNote && (
        <EditNoteModal note={selectedNote} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default NotesList;
