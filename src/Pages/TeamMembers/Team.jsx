import React from 'react'
import './Team.css'
import Sidebar from '../../Components/Sidebar'
import TeamMembers from '../../Components/TeamMembers'

const Team = () => {
  return (
    <>
    <div className="teamContainer">
    <Sidebar />
    <TeamMembers />
    </div>
    </>
  )
}

export default Team
