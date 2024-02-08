import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';
import { firebaseAuth } from '../utils/firebaseconfig';
import '../App.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate('/');
      }
    });
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <Header login />
      <BackgroundImage />
      <div className='content'>
        <div className='body'>
          <div className='text'>
            <h1>Sign up to register for our world wide events</h1>
          </div>
          <div className='form'>
            {showPassword ? (
              <input
                type='password'
                placeholder='password'
                name='password'
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                type='email'
                placeholder='email address'
                name='email'
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword ? (
              <button
                onClick={() => {
                  setShowPassword(true);
                }}
              >
                Get started
              </button>
            ) : (
              <button onClick={handleSignIn}>Sign up</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
