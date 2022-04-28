import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'
import Resume from './Resume/ResumeNew'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
