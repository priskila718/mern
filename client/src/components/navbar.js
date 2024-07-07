import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom'
import './index.css';
function Navbar(){
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">MyApp</div>
            <div className="space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Home</a>
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Services</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </nav>
    );
}
export default Navbar;
