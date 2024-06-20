import React from 'react'
import Sidebar from '../../Components/Sidebar'
import HomeRightBar from '../../Components/HomeRightBar/HomeRightBar'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="mainHomeContainer">
    <Sidebar />
      <HomeRightBar />
    </div>
      
    </>
  )
}

export default Home
