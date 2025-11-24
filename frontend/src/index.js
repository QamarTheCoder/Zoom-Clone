import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Hero from './Landing Page/Main section/Hero';
import AboutUs from './Landing Page/About Us section/AboutUs';
import reportWebVitals from './reportWebVitals';
import Product from './Landing Page/Product Section/Product';
import Pricing from './Landing Page/Pricing section/Pricing';
import Reviews from './Landing Page/Reviews Section/Reviews';
import LandingPage from './Landing Page/LandingPage';
import SingUp from './Signup/Signup';
import LoginPage from './Login/Login';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Error from './Error';
import DashboardHome from './Dashboard/dashboardHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/signup' element={<SingUp/>} />
      <Route path='/signin' element={<LoginPage/>} />
      <Route path='/dashboard' element={<DashboardHome/>} />
      
      <Route path='/*' element={<Error/>}/>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
