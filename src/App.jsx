import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
         <Nav />
        <Routes>
        <Route path="/signup" element={<SignUp />} />
       </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
