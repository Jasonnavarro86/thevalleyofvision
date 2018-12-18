import React from 'react'
import "./Menu.css";

export const Menu = (props) =>

<div id="menu" className="d-none fixed-top">
<div className="menu-social-anchors">
  <a href="#menu"><i className="fab fa-soundcloud"></i></a>
  <a href="#menu"><i className="fab fa-youtube"></i></a>
  <a href="#menu"><i className="fab fa-instagram"></i></a>
  <a href="#menu"><i className="fab fa-facebook-square"></i></a>
  <a href="#menu"><i className="fab fa-twitter-square"></i></a>

</div>
<ul className="menuUl">
  <li><a className="menu-links" href="#menu">Home</a></li>
  <li><a className="menu-links" href="#menu">Resources</a></li>
  <li><a className="menu-links" href="#menu">About</a></li>
  <li><a className="menu-links" href="#menu">Blog</a></li>
</ul>
</div>
