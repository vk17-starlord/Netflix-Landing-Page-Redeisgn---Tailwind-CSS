import React from 'react';
import logo from '../Assets/logo.png'; // Tell webpack this JS file uses this image
function SideNav() {
  return(
  <div className='sidenav'>
  <div className="logo">
      <img src={logo} alt="logo" />
  </div>
  <div className="menu">

  <button><i class='bx bxs-home'></i></button>
  <button><i class='bx bxs-heart'></i></button>
  <button><i class='bx bx-world' ></i></button>
  <button className='logout'><i class='bx bx-log-out-circle' ></i></button>
  </div>
 
  <span></span>
  </div>
  );
}

export default SideNav;
