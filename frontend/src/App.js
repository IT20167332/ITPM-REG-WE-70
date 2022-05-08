
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
import ShowBusDetails from './component/busManagement/ShowBusDetails';

function App() {

  return (
    <div className='main-background'>
      
      <Navbar/> 
          <Route exact path='/' component={Home}/> 
          
          <Route exact path= '/contact/:fomType' render={()=><AddBus/>}/>
          <Route exact path='/usersingin' render={()=> <SingInForm/>}/>
          <Route exact path='/userlogin' component={UserLogin}/>
          <Route exact path='/show' component={ShowBusDetails}/>
      <Footer/>
    </div>
    
  );
}
export default App;
