import React from 'react'
import { Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home'


const Allroutes = () => {
  return (
    <div>Allroutes
        <Router>
            <Routes path="/" element={<Home/>} />
        </Router>
    </div>
  )
}

export default Allroutes