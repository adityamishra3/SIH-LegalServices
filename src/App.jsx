import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import UserSignup from './Pages/UserSignup';
import LawyerSignup from './Pages/LaywerSignup';
import Booking from './Pages/Booking';
import ProfileL from './Pages/ProfileL';
import ProfileU from './Pages/ProfileU';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/UserSignup' element={<UserSignup/>}/>
          <Route path='/LawyerSignup' element={<LawyerSignup/>}/>
          <Route path='/BookingServices' element={<Booking/>}/>
          <Route path='/Laywers' element={<ProfileL/>}/>
          <Route path='/Users' element={<ProfileU/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
