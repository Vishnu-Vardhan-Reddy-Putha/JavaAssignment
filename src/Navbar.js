// src/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Income Tax Department</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/add-taxpayer">Add Taxpayer</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/taxpayer-list">Taxpayer List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/calculate-tax">Calculate Tax</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/tax-rates">Tax Rates</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/faq">FAQ</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
