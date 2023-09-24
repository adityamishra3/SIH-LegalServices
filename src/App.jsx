import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route,Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/UserSignup' element={<UserSignup/>}/>
        <Route path='/LawyerSignup' element={<LawyerSignup/>}/>
        <Route path='/BookingServices' element={<Booking/>}/>
        <Route path='/Laywers' element={<ProfileL/>}/>
        <Route path='/Users' element={<ProfileU/>}/>
      </Routes>
    </>
  )
}

export default App
