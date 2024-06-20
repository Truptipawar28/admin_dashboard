import React from 'react'
import './Salary.css'
import Sidebar from '../../Components/Sidebar'
// import TeamMembers from '../../Components/TeamMembers'
import Salaries from '../../Components/Salaries'

const Salary = () => {
  return (
    <>
    <div className="teamContainer">
    <Sidebar />
    <Salaries />
    </div>
    </>
  )
}

export default Salary
