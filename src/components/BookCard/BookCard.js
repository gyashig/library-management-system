import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Bookcardstyling.css';
import bookData from './books.json';

const BookCard = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [loadCount, setLoadCount] = useState(18);

  useEffect(() => {
    const bookSection = document.getElementById('book-section');
    bookSection.scrollIntoView({ behavior: 'smooth' });

    setBooks(bookData);
    setFilteredBooks(bookData);
  }, []);

  useEffect(() => {
    setVisibleBooks(filteredBooks.slice(0, loadCount));
  }, [filteredBooks, loadCount]);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    const filteredBooks = books.filter(
      (book) => 
       
        book.author.toLowerCase().includes(searchQuery) ||
        book.genre.toLowerCase().includes(searchQuery)
    );

    setSearchQuery(searchQuery);
    setFilteredBooks(filteredBooks);
  };

  const handleSort = (event) => {
    const sortOption = event.target.value;

    let sortedBooks = [...filteredBooks];

    
      if (sortOption === 'author') {
      sortedBooks.sort((a, b) => a.author.localeCompare(b.author, 'en', { numeric: true }));
    } else if (sortOption === 'genre') {
      sortedBooks.sort((a, b) => a.genre.localeCompare(b.genre, 'en', { numeric: true }));
    } else if (sortOption === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    setSortOption(sortOption);
    setFilteredBooks(sortedBooks);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setLoadCount((prevCount) => prevCount + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleReadMore = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <div className="book-card-section-header">
        <input
          type="text"
          placeholder="Search books"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={sortOption} onChange={handleSort}>
          <option value="">Sort by</option>
         
         
          <option value="genre">Genre</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="book-card-section" id="book-section">
        {visibleBooks.map((book, index) => (
          <div key={index} className="book-card">
          <img src={`/images/${book.image}`} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <div className="book-details">
              <div className="star-rating">
                {[...Array(book.rating)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className="star" />
                ))}
              </div>
              <p>{book.rating}/5</p>
            </div>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <Link to={`/${book.link}`} className="read-more-button">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
