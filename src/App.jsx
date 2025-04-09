import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Contact from './components/Contact'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
