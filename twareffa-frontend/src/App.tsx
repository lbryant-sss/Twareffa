import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Signin from './pages/auth/signin/Signin'
import Register from './pages/auth/signup/Register';
import ForgotPassword from './pages/auth/forgotpass/ForgotPassword';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Twareffa' element={<Homepage />} />
        <Route path='/Twareffa/login' element={<Signin />} />
        <Route path='/Twareffa/signup' element={<Register />} />
        <Route path='/Twareffa/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
