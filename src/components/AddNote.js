import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import './AddNote.css';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (content || image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(addNote({
          id: uuidv4(),
          title,
          content,
          image: reader.result,
          backgroundColor,
          pinned: false,
        }));
        resetForm();
      };

      if (image) {
        reader.readAsDataURL(image);
      } else {
        dispatch(addNote({
          id: uuidv4(),
          title,
          content,
          image: null,
          backgroundColor,
          pinned: false,
        }));
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setBackgroundColor('#ffffff');
    setShowForm(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onFocus={() => setShowForm(true)}
        onChange={(e) => setTitle(e.target.value)}
      />
      {showForm && (
        <>
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
          <button onClick={handleAddNote}>Add Note</button>
        </>
      )}
    </div>
  );
};

export default AddNote;
