import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const Header = () => {
const logout = ()=>{
  localStorage.clear();
}

return <div className='mynavbar'>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Lottery</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link active" to="/">Home</Link></li>
      </ul>
  
    </div>
  </div>
</nav>

<Outlet />
  </div>
};

export default Header;
