import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Topnav from '../components/Topnav';
import { fetchPosts } from '../store/postslice';

import '../App.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);
  const navigate = useNavigate();

  const addToFavorites = (title) => {
    setFavorites((prevFavorites) => [...prevFavorites, title]);
    console.log(favorites);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favId) => favId !== id)
    );
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    const { error } = status;
    return <div>Error loading posts: {error}</div>;
  }

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className='hero'>
      <h1>Home</h1>
      <Topnav isScrolled={isScrolled} />

      <button
        className='favbtn'
        onClick={() => {
          navigate('/player');
        }}
      >
        To Player
      </button>

      {favorites.length > 0 && (
        <div>
          <h2 className='favheader'>Favorites</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((favorite, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {favorite}
                    <button
                      className='removebutton'
                      onClick={() => removeFromFavorites(favorite)}
                    >
                      Remove from favorites
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                {post.title}
                <button
                  className='favoritebutton'
                  onClick={() => addToFavorites(post.title)}
                >
                  Add to favorites
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
