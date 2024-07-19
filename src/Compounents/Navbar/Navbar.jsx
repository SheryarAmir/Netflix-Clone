import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

import  { useState, useEffect } from 'react';


const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('transparent');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor('rgba(0, 0, 0, 10)'); // Light black color
    } else {
      setNavbarColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (



    <div className="Navbar " style={{ backgroundColor: navbarColor, transition: 'background-color 0.3s ease' }}>
      <div className="navbarLeft">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li> Browse by Languages</li>
        </ul>
      </div>

      <div className="NavbarRight">
        <img src={search_icon} alt="" className="icons" />
        <p>Childern</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="Profile" />
          <img src={caret_icon} alt="" />

<div className="Dropdown">
    <p>Sign out of Netflix</p>
    
</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
