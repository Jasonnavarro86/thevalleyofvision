import React from 'react'
import "./Nav.css";

export const Nav = (props) =>
  <div className="container ">
    <nav id="navBar" className="navbar navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#footer"> THE VALLEY OF VISION </a>
      {/* Log in*/}
      <div className="row loginMainRow">
        <div className="col-5 mr-1" style={{padding:'0px'}}>
          <label for="email" className="control-label">Email</label>
          <input type="email" className="form-control navInput" id="email" />
        </div>
        <div className=" col-5 mr-1" style={{padding:'0px'}}>
          <label for="password" className="control-label">Password</label>
          <input type="password" className="form-control navInput" id="password" />

        </div>
        <div className="col" style={{ position: 'relative', padding:"0px" }}>

          <button id="loginBtn" className="btn btn-dark navLoginBtn">Log in</button>
        </div>
      </div>

      {/*<button id="noBorder" className="navbar-toggler" type="button">
        <i id="bars" className="fas fa-bars menuIcon"></i>
        <i id="xbars" className="fas fa-times menuIcon d-none"></i>
        <p id="test">Test</p>
</button>*/}
    </nav>
  </div>