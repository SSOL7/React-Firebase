import React, { useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebaseconfig';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import '../App.css';

const Topnav = ({ isScrolled }) => {
  const navlinks = [
    { name: 'Home', link: '/' },
    { name: 'My player', link: '/player' },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) {
        navigate('/login');
      }
    });
  });

  return (
    <div className='header-nav'>
      <nav className={`${isScrolled ? 'scrolled' : 'notScroll'}`}>
        <div className='leftside'></div>

        <ul className='links'>
          {navlinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className='rightside'>
          <button
            onClick={() => signOut(firebaseAuth)}
            className='logoutbutton'
          >
            Log out
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;
