import React from 'react'
import './Navbar.css'
import Notification from "../Components/Icons/notification.png";
import Search from "../Components/Icons/search (1).png";
import Profile from "../Components/Icons/trupti.png";

const Navbar = () => {
  return (
    <>
    
    <div className="container">
      <div className='mainNavbarContainer pt-1'> 
        <div className="dashboardContainer ms-5 ">
        <h1 className='dashText'>Dashboard</h1>       
      </div>
      <div className='searchItemContainer'>
        <img src={`${Search}`} className='searchIcon' alt="" />
        <input type="search" placeholder='Search..' className='searchInput'/>
      </div>
      <div className='profileItemContainer'>
        <img src={`${Notification}`} className='notificationIcon' alt="" />
        <div className='profileItemContainer'>
          <img src={`${Profile}`} className='profileIcon' alt="" />
          <p className='profileName'>Trupti</p>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
