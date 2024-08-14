import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Signin from './pages/auth/signin/Signin'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Twareffa' element={<Homepage />} />
        <Route path='/Twareffa/login' element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
