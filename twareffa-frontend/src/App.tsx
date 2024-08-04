import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function Home(){
  return(
    <>
    <h1>Home</h1>
    </>
  )
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Twareffa' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
