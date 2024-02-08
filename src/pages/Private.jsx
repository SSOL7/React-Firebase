import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebaseconfig';

const Private = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => console.log('Sign Out'))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <section>
        <h1>Private</h1>
        <button className='favoritebutton' onClick={handleSignOut}>
          To Home
        </button>
      </section>
    </div>
  );
};

export default Private;
