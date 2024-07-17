import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../redux/notesSlice';
import './EditNoteModal.css';

const EditNoteModal = ({ note, onClose }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [image, setImage] = useState(note.image);
  const [backgroundColor, setBackgroundColor] = useState(note.backgroundColor);
  const dispatch = useDispatch();

  const handleUpdateNote = () => {
    const updatedNote = {
      ...note,
      title,
      content,
      image,
      backgroundColor,
    };
    dispatch(updateNote(updatedNote));
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-note-modal">
      <div className="modal-content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <button onClick={handleUpdateNote}>Update Note</button>
        <button onClick={onClose}>Cancel</button>
      </div> 
    </div>
  );
};

export default EditNoteModal;
