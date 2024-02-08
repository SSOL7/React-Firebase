import React from 'react';
import Topnav from '../components/Topnav';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Topnav />
      <h1>Player</h1>

      <div>
        <button
          className='tohomebtn'
          onClick={() => {
            navigate('/');
          }}
        >
          To homepage
        </button>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/5ZdHfJVAY-s?si=ib5yizc3WZGrM5a7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
    </div>
  );
};

export default Player;
