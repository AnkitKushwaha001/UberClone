// npm create vite@latest
// project_name - uber-react
// cd uber-react  
// npm install    
// npm run dev
// add bootstrap_cdn link in index.html file
// npm i react-router-dom
// chrome extension - Color Catcher


// install extensen - 1. Simple React Snippets, 2. react-simple-snippets (rafce) (not work)
// ES7+ React/Redux/React-Native snippets (rafce) (work properly)

import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signup' element={<UserSignup />} />
            <Route path='/captain-login' element={<CaptainLogin />} />
            <Route path='/captain-signup' element={<CaptainSignup />} />
        </Routes>
    </div>
  )
}

export default App