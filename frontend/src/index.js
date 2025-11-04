import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Hero from './Landing Page/Main section/Hero';
import AboutUs from './Landing Page/About Us section/AboutUs';
import reportWebVitals from './reportWebVitals';
import Product from './Landing Page/Product Section/Product';
import Pricing from './Landing Page/Pricing section/Pricing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pricing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
