import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Player from './pages/Player';
import Home from './pages/Home';
import BackgroundImage from './components/BackgroundImage';
import ProtectedRoute from './components/ProtectedRoute';
import { firebaseAuth } from './utils/firebaseconfig';

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home user={user} />} />
          <Route
            path='/private'
            element={
              <ProtectedRoute user={user}>
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/player' element={<Player />} />
        </Routes>
        <BackgroundImage />
      </BrowserRouter>
    </div>
  );
}

export default App;
