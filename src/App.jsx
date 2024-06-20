import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Salary from './Pages/Salary/Salary'
import Team from './Pages/TeamMembers/Team'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/dailytask' element={<Home />} />
      <Route path='/monthlyIncome' element={<Home />} />
      <Route path='/salary' element={<Salary />} />
      <Route path='/settings' element={<Home />} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
