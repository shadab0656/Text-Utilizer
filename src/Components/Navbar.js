import React from 'react'
import "../index.css"
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
    
    <nav className='navbar'>
        <div className="left">
    <ul>
        <h3>{props.title}</h3>
      <li>Home</li>
      <li>About us</li>
      <li>Contact Us</li>
    </ul>
    </div>
        <div className="right">
            <input type="text" name="" id=""  placeholder='Search here'/>
            <button>Search</button>
        </div>
    
   </nav>
    
    </>
  )
}
Navbar.PropTypes ={
  title: PropTypes.string.isRequired
};
Navbar.defaultProps={
title:"set text here"
};