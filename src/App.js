import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProductDescription from './components/ProductDescription/ProductDescription';
import BookCard from './components/BookCard/BookCard';
import Footer from './components/Footer/Footer';
import './App.css';
const App = () => {
  return (
    <div>
        <Navbar />
        <div className="app-container">
        <Sidebar />
        <BookCard />
      </div>
        {/* <Sidebar/> */}
        {/* <ProductDescription/> */}
<Footer />
     
     
    </div>
  );
};

export default App;
