import React from "react";
import "./Sidebar.css";
import Home from "../Components/Icons/home.png";
import DailyTask from "../Components/Icons/DailyTask.png";
import Salary from "../Components/Icons/Salary.png";
import Setting from "../Components/Icons/settings.png";
import Teammembers from "../Components/Icons/Teammembers.png";
import monthlyIncome from "../Components/Icons/monthlyIncome.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
return (
    <>

<nav className="navbar fixed-top">
        <div className="container">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img src={Home} className="sidebaricons mx-4" alt="Home" />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dailytask" className="nav-link">
                    <img src={DailyTask} className="sidebaricons mx-4" alt="Daily Task" />
                    Daily Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/team" className="nav-link">
                    <img src={Teammembers} className="sidebaricons mx-4" alt="Team Members" />
                    Team Members
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/monthlyIncome" className="nav-link">
                    <img src={monthlyIncome} className="sidebaricons mx-4" alt="Monthly Income" />
                    Monthly Income
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/salary" className="nav-link">
                    <img src={Salary} className="sidebaricons mx-4" alt="Salary" />
                    Salary
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    <img src={Setting} className="sidebaricons mx-4" alt="Settings" />
                    Settings
                  </Link>
                </li>
              </ul>
              <div className="mainScheduledContainer">
                <h4 className="scheduledTitle">Scheduled Events</h4>
                <div className="scheduledContainer">
                  <input type="radio" id="friendsBday" name="event" value="Friends's Bday" />
                  <label htmlFor="friendsBday">Friends's Bday</label>
                </div>
                <div className="scheduledContainer">
                  <input type="radio" id="dadsBday" name="event" value="Dad's Bday" />
                  <label htmlFor="dadsBday">Dad's Bday</label>
                </div>
                <div className="scheduledContainer">
                  <input type="radio" id="sistersWedding" name="event" value="Sister's Wedding" />
                  <label htmlFor="sistersWedding">Sister's Wedding</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for large screens */}
      <div className="mainSidebarContainer d-none d-lg-block">
        <ul className="ulContainer">
          <h4 className="menu">Menu</h4>
          <Link to="/">
            <li className="liContainer">
              <img src={Home} className="sidebaricons" alt="Home" />
              <p className="itemName">Home</p>
            </li>
          </Link>
          <Link to="/dailytask">
            <li className="liContainer">
              <img src={DailyTask} className="sidebaricons" alt="Daily Task" />
              <p className="itemName">Daily Task</p>
            </li>
          </Link>
          <Link to="/team">
            <li className="liContainer">
              <img src={Teammembers} className="sidebaricons" alt="Team Members" />
              <p className="itemName">Team Members</p>
            </li>
          </Link>
          <Link to="/monthlyIncome">
            <li className="liContainer">
              <img src={monthlyIncome} className="sidebaricons" alt="Monthly Income" />
              <p className="itemName">Monthly Income</p>
            </li>
          </Link>
          <Link to="/salary">
            <li className="liContainer">
              <img src={Salary} className="sidebaricons" alt="Salary" />
              <p className="itemName">Salary</p>
            </li>
          </Link>
          <Link to="/settings">
            <li className="liContainer">
              <img src={Setting} className="sidebaricons" alt="Settings" />
              <p className="itemName">Settings</p>
            </li>
          </Link>
        </ul>
        <div className="mainScheduledContainer">
          <h4 className="scheduledTitle">Scheduled Events</h4>
          <div className="scheduledContainer">
            <input type="radio" id="friendsBdayLarge" name="event" value="Friends's Bday" />
            <label htmlFor="friendsBdayLarge">Friends's Bday</label>
          </div>
          <div className="scheduledContainer">
            <input type="radio" id="dadsBdayLarge" name="event" value="Dad's Bday" />
            <label htmlFor="dadsBdayLarge">Dad's Bday</label>
          </div>
          <div className="scheduledContainer">
            <input type="radio" id="sistersWeddingLarge" name="event" value="Sister's Wedding" />
            <label htmlFor="sistersWeddingLarge">Sister's Wedding</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


