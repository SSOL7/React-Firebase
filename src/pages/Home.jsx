import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Topnav from '../components/Topnav';

import '../App.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);

  return (
    <div className='hero'>
      <h1>Home</h1>
      <Topnav isScrolled={isScrolled} />
      
    <div>
    <button
      className='playbtn'
        onClick={() => {
          navigate('/player');
        }}
      >To comments</button>
    </div>


    </div>
  );
};

export default Home;
