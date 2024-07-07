import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, 
  Routes, 
  Link, 
  Route} from 'react-router-dom' 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
    </Router>
  </div>
);

