import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import { firebaseAuth } from '../utils/firebaseconfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate('/');
    });
  });

  return (
    <>
      <BackgroundImage />
      <div className='loginContent'>
        <Header />
        <div className='form-wrapper'>
          <div className='form'>
            <div className='title'>
              <h1>login</h1>
            </div>
            <div className='container'>
              <input
                type='text'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
