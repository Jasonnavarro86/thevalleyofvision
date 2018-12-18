import React from 'react'
import "./Nav.css";

export const Nav = (props) =>
<div className="container">
<nav id="navBar" className="navbar navbar-dark bg-dark fixed-top">
<a className="navbar-brand" href="#footer">THE VALLEY OF VISION</a>
<button id="noBorder" className="navbar-toggler" type="button">    
  <i id="bars" className="fas fa-bars menuIcon"></i>
  <i id="xbars" className="fas fa-times menuIcon d-none"></i>
  <p id="test">Test</p>
 </button>
</nav>
</div>