
import React ,{useState,useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from "axios";
import Navbar from './component/user/Navbar';
import './App.css';
import Home from './component/user/pages/Home';
import Footer from './component/user/Footer';

import UserLogin from './component/user/pages/UserLogin';
import SingInForm from './component/user/SingInForm';
import AddBus from './component/busManagement/AddBus';

function App() {

  return (
    <div className='main-background'>
      
      <Navbar/> 
          <Route exact path='/' component={Home}/> 
          
          <Route exact path= '/contact' render={()=><AddBus/>}/>
          <Route exact path='/usersingin' render={()=> <SingInForm/>}/>
          <Route exact path='/userlogin' component={UserLogin}/>
      <Footer/>
    </div>
    
  );
}
export default App;
