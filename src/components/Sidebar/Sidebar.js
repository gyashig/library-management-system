import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { setGenre } from '../../redux/genre.action';

const Sidebar = () => {
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
                onClick={(e) => dispatch(setGenre(e.target.value))} 
                type="radio" 
                value="fiction" 

                />
              Fiction
            </label>
            <br />
            <label>
              <input type="radio" value="science-fiction" />
              Science-Fiction
            </label>
            <br />
            <label>
              <input type="radio" value="non-fiction" />
              Non Fiction
            </label>
            <br />
            <label>
              <input type="radio" value="comedy" />
              Comedy
            </label>
            <br />
            <label>
              <input type="radio" value="horror" />
              Horror
            </label>
            <br />
            <label>
              <input type="radio" value="romance" />
              Romance
            </label>

            <button type='submit'>Filter</button>
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
