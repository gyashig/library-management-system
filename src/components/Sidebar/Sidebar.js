import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side-layout">
        <div className="category-option">
          <span className="category-title">Category</span>
          <div className="checkboxes">
            <label>
              <input type="checkbox" value="fiction" />
              Fiction
            </label>
            <br />
            <label>
              <input type="checkbox" value="science-fiction" />
              Science-Fiction
            </label>
            <br />
            <label>
              <input type="checkbox" value="non-fiction" />
              Non Fiction
            </label>
            <br />
            <label>
              <input type="checkbox" value="comedy" />
              Comedy
            </label>
            <br />
            <label>
              <input type="checkbox" value="horror" />
              Horror
            </label>
            <br />
            <label>
              <input type="checkbox" value="romance" />
              Romance
            </label>
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
              <input type="checkbox" value="Lessthan3" />
              Less than 3
            </label>
            <br />
            <label>
              <input type="checkbox" value="three" />
              3-4
            </label>
            <br />
            <label>
              <input type="checkbox" value="four" />
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
