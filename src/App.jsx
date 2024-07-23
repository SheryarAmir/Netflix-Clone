import { useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import  Login from  "./Pages/Login/Login"
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [count, setCount] = useState(0)
  const navigate=useNavigate()


  useEffect(()=>{
    onAuthStateChanged(auth ,async(user)=>{
      if (user){
        console.log("logged in")
        navigate('/')
      } else{
        console.log ("logged out")
        navigate('/login')
      }
    })


  } ,[])

  return (
    <>
    <div className="App">

    <ToastContainer  theme='dark'/>
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
