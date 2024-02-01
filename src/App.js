import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Player from './pages/Player';
import TvShow from './pages/TvShow';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import BackgroundImage from './components/BackgroundImage';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/player" element={<Player />} />
            <Route exact path="/tv" element={<TvShow />} />
            <Route exact path="/movie" element={<MoviePage />} />
          </Routes>
          <BackgroundImage />
        </BrowserRouter>
      
    </div>
  );
}

export default App;
