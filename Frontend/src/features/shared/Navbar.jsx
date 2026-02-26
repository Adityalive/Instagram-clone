import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbarbars.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button type="button" onClick={() => navigate('/post')}>
        Add to create
      </button>
    </nav>
  );
};

export default Navbar;
