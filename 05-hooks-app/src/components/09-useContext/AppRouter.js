import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { Navbar } from './Navbar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        
        <Navbar />
        
        <Routes>
          
          <Route path='/' element={ <HomeScreen/> } />
          
          <Route path='/about' element={ <AboutScreen/> } />
          <Route path='/login' element={ <LoginScreen/> } />
          
          <Route path='*' element={<Navigate to ='/' />}/>

        </Routes>
      
      </div>
    </Router>
  )
}
