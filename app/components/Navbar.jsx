import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand"><h1>NYC College & Student Directory</h1></a>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/campuses">Campuses</Link></li>
        <li><Link to="/students">Students</Link></li>
      </ul>
    </div>
  </nav>
  );
}
