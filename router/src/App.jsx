import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" elemen={<Blog />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
