import React from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';

const Home = () => {
  return (
    <div className="home">
      <AddNote />
      <NotesList />
    </div>
  );
};

export default Home;
