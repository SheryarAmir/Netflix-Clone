import { useState } from 'react'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import  Login from  "./Pages/Login/Login"
import Player from './Pages/Player/Player'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App ">
      <Routes>

        <Route path='/' element={  <Home/>}/>
        
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/Player/:id' element ={<Player/>}/>
      </Routes>

  </div> 
    </>
  )
}

export default App
