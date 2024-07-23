import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

import  { useState, useEffect } from 'react';
import { logout } from "../../Firebase";


const Navbar = () => {
 
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      
      if(Window,scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    });

  },[])


const navRef =useRef();





  return (

    // style={{ backgroundColor: navbarColor, transition: 'background-color 0.3s ease' }}

    <div ref={navRef} className="Navbar " >
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
    <p onClick={()=>{logout()}}>Sign out of Netflix</p>
    
</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
