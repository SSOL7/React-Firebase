import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className='header-container'>
        <h1>Header</h1>
      <div className='emblem'>

        <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
          {props.login ? 'Login' : 'SignIn'}
        </button>
      </div>
    </div>
  );
};

export default Header;
