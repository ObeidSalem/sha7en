import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react'
// import { AuthProvider, useAuth } from './context/AuthContext';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Partners from './Components/Partners';
import Vehicles from './Components/Vehicles';
import NotFound from './Components/NotFound';


const App = () => {
  return (
    // <AuthProvider> //to be developed
      <Router>
        <div className="App">
        <NavBar />
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/Partners' element={<Partners/>} />
              <Route path='/Vehicles' element={<Vehicles/>} />
              <Route path='*' element={<NotFound/>} />

          </Routes>
        </div>
      </Router>
    // <AuthProvider>
  );
}

export default App;
