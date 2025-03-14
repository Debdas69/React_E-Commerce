import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App