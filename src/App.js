import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reminder from './components/Reminder';
import Trash from './components/Trash';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
