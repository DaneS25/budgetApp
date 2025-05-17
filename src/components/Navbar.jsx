import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ width: '100%', maxWidth: '400px' }}>
    <nav>
      <Link to="/">Dashboard</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/register">Register</Link>
    </nav>
  </div>
);

export default Navbar;
