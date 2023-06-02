import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProductDescription from './components/ProductDescription/ProductDescription';
import BookCard from './components/BookCard/BookCard';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookCard />} />
            <Route path="/components/ProductDescription/:bookId" element={<ProductDescription />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
