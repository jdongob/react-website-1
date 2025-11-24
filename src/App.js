import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';  

import Home from './components/pages/Home'; 
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>  
      <Navbar /> 
    
        <Routes> 
          <Route path='/' exact Component={Home} />  
        
          <Route path='/products' Component={Products}/> 
          
          <Route path='/services' Component={Services}/>

          <Route path='/sign-up' Component={SignUp} />
          
        </Routes>
    
    </Router>
    </>
    
  );
}

export default App;