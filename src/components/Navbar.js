import React, { useState } from 'react';
import './Home.css';
import logo from '../images/image 1.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="home-header">
        <img src={logo} alt="logo" />
        <nav className={`navbar ${isSidebarOpen ? 'active' : ''}`}>
          <ul>
            <Link to="/product">
              <li>PRODUCTS</li>
            </Link>
            <Link to="/">
              <li>ABOUT US</li>
            </Link>
            <li>REALTOR PORTAL</li>
            <li>REVIEWS</li>
            <li>EDUCATION</li>
            <i
              className={`fas fa-bars ${isSidebarOpen ? 'active' : ''}`}
              onClick={toggleSidebar}
            >
              <RiMenu3Fill />
            </i>
          </ul>
        </nav>

        <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
          <div className="close-button" onClick={toggleSidebar}>
            <AiOutlineCloseCircle />{' '}
          </div>
          <nav className="sidebar-nav">
            <a href="/product">PRODUCTS</a>
            <a href="/">ABOUT US</a>

            <a href="">REALTOR PORTAL</a>
            <a href="">REVIEWS</a>
            <a href="">EDUCATION</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
