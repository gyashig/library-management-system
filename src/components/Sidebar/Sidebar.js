import React, { useState } from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { setGenre } from '../../redux/genre.action';

const Sidebar = () => {
  const [movieGenre, setMovieGenre] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <div className="side-layout">
        <div className="category-option">
          <span className="category-title">Category</span>
          <div className="checkboxes">
          <form onSubmit={(e) => console.log(e)}>
            <label>
              <input 
                type="radio"
                name="genre"
                value="fiction" 
                checked={movieGenre === 'fiction'}
                onChange={(e) => {
                  setMovieGenre(e.target.value)
                  dispatch(setGenre(e.target.value))
                }}
                />
              Fiction
            </label>
            <br />
            <label>
              <input 
                type="radio"
                name="genre" 
                value="science-fiction" 
                checked={movieGenre === 'science-fiction'}
                onChange={(e) => {
                  setMovieGenre(e.target.value)
                  dispatch(setGenre(e.target.value))
                }}
                />
              Science-Fiction
            </label>
            <br />
            <label>
              <input 
              type="radio"
              name="genre" 
              value="non-fiction" 
              checked={movieGenre === 'non-fiction'}
              onChange={(e) => {
                  setMovieGenre(e.target.value)
                  dispatch(setGenre(e.target.value))
              }}
              />
              Non Fiction
            </label>
            <br />
            <label>
              <input 
                type="radio"
                name="genre" 
                value="comedy" checked={movieGenre === 'comedy'}
                onChange={(e) => {
                  setMovieGenre(e.target.value)
                  dispatch(setGenre(e.target.value))
                }}
                
                />
              Comedy
            </label>
            <br />
            <label>
              <input 
                type="radio"
                name="genre" 
                value="horror" 
                checked={movieGenre === 'horror'}
                onChange={(e) => {
                  setMovieGenre(e.target.value)
                  dispatch(setGenre(e.target.value))
                }}
                />
              Horror
            </label>
            <br />
            <label>
              <input 
                type="radio"
                name="genre" 
                value="romance" 
                checked={movieGenre === 'romance'}
                onChange={(e) => {
                  setMovieGenre(e.target.value)
                  dispatch(setGenre(e.target.value))
                }}
                />
              Romance
            </label>
          </form>
          </div>
          <a
            href="/categories"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            View More
          </a>
        </div>
        <div className="rating-option">
        <div className="rating-title">Rating</div>
        <div className="checkboxes">
            <label>
              <input type="radio" value="Lessthan3" />
              Less than 3
            </label>
            <br />
            <label>
              <input type="radio" value="three" />
              3-4
            </label>
            <br />
            <label>
              <input type="radio" value="four" />
              4-5
            </label>
            <br />
            </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
