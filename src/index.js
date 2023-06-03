import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookCard from './components/BookCard/BookCard';
import Login from './components/Login/Login';
import { Provider } from 'react-redux'
import store from './redux/store';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <BookCard />
//   },
//   {
//     path: '/login', 
//     element: <Login />
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
