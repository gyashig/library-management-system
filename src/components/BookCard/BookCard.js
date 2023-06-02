import React, { useState, useEffect } from 'react';
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
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.genre.toLowerCase().includes(searchQuery)
    );

    setSearchQuery(searchQuery);
    setFilteredBooks(filteredBooks);
  };

  const handleSort = (event) => {
    const sortOption = event.target.value;

    let sortedBooks = [...filteredBooks];

    if (sortOption === 'title') {
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title, 'en', { numeric: true }));
    } else if (sortOption === 'author') {
      sortedBooks.sort((a, b) => a.author.localeCompare(b.author, 'en', { numeric: true }));
    } else if (sortOption === 'genre') {
      sortedBooks.sort((a, b) => a.genre.localeCompare(b.genre, 'en', { numeric: true }));
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
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>

      <div className="book-card-section" id="book-section">
        {visibleBooks.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
