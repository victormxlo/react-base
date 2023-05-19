import React from 'react';
import { useSelector } from 'react-redux';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line
  const buttonClicked = useSelector(state => state.buttonClicked);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/wasd">
        <FaSignInAlt size={24} />
      </Link>
      {buttonClicked ? 'Button clicked' : 'Button not clicked'}
    </Nav>
  );
}
