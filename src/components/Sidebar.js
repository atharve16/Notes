import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/reminder" activeClassName="active">Reminder</NavLink>
      <NavLink to="/trash" activeClassName="active">Trash</NavLink>
    </div>
  );
};

export default Sidebar;
