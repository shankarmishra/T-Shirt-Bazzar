import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/user/components/Navbar';
import Homepage from '../src/user/pages/Homepage'


function App() {
  

  return (
    <>
     <Router>
     <Navbar/>
      <Routes>
   
    <Route path="/" element={<Homepage/>}/>
        
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App
