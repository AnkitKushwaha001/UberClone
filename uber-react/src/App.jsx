// npm create vite@latest
// project_name - uber-react
// cd uber-react  
// npm install    
// npm run dev
// add bootstrap_cdn link in index.html file
// npm i react-router-dom
// chrome extension - Color Catcher
// npm i axios (data fatching like apiCalls)

// gsap -> npm i gsap
// npm i @gsap/react

// remix icon (through the github) -> npm install remixicon --save


// install extensen - 1. Simple React Snippets, 2. react-simple-snippets (rafce) (not work)
// ES7+ React/Redux/React-Native snippets (rafce) (work properly)

import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import { UserLogout } from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/riding' element={<Riding />} />
            <Route path='/captain-riding' element={<CaptainRiding />} />
            <Route path='/signup' element={<UserSignup />} />
            <Route path='/captain-login' element={<CaptainLogin />} />
            <Route path='/captain-signup' element={<CaptainSignup />} />
            <Route path='/home' element={
              <UserProtectWrapper>
                <Home />
              </UserProtectWrapper>
            } />
            <Route path='/user/logout' element={
              <UserProtectWrapper>
                <UserLogout />
              </UserProtectWrapper>
            } />
            <Route path='captain-home' element={
              <CaptainProtectWrapper>
                <CaptainHome />
              </CaptainProtectWrapper>
            } />
        </Routes>
    </div>
  )
}

export default App