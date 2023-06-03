import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProductDescription from './components/ProductDescription/ProductDescription';
import BookCard from './components/BookCard/BookCard';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignupForm from './components/Login/SignUpForm/SignUpForm';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
          <Routes>
            <Route path="/" element={<BookCard />} />
            <Route path="/login" element={<Login/>}/>         
            <Route path="/book" element={<ProductDescription/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
          </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
