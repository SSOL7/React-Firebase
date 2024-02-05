import React from 'react'
import Topnav from '../components/Topnav'
import { useNavigate } from 'react-router-dom';


const Player = () => {
  const navigate = useNavigate();


  return (
    <div>
      <Topnav />
      <h1>Player</h1>


      <button
      className='playbtn'
      onClick={() => {
        navigate('/');
      }}
    >
      To homepage
    </button>

    </div>
  )
}

export default Player