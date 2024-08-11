import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Twareffa' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
