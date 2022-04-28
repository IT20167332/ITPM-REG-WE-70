
import React  from 'react';
import { Route } from 'react-router-dom';
//import axios from "axios";
import Navbar from './component/user/Navbar';
import './App.css';
import Home from './component/user/pages/Home';
import Footer from './component/user/Footer';

import UserLogin from './component/user/pages/UserLogin';
import SingInForm from './component/user/SingInForm';
import AddBus from './component/busManagement/AddBus';
<<<<<<< HEAD
import SearchBus from './component/BookingManagement/SearchBus';
import BusList from './component/BookingManagement/BusList';
import GetyourSeat from './component/BookingManagement/GetyourSeat';
=======
import Displaydriver from './component/EmployeeMagement/Displaydriver';
import AddDriver from './component/EmployeeMagement/AddDriver';
>>>>>>> 6208b7ad098cc2455f2868a92a5db1ad487eebb9

function App() {

  return (
    <div className='main-background'>
      
      <Navbar/> 
          <Route exact path='/' component={Home}/> 
          <Route exact path='/services' component={SearchBus}/>
          <Route exact path= '/contact' render={()=><AddBus/>}/>
          <Route exact path='/usersingin' render={()=> <SingInForm/>}/>
<<<<<<< HEAD
          <Route exact path='/userlogin' component={UserLogin}/>
          <Route exact path='/services/:from/:to' component={BusList}/>
          <Route exact path='/booking/:id' render={()=> <GetyourSeat/>}/>
=======
      <Route exact path='/userlogin' component={UserLogin} />
      <Route exact path='/showdriver' component={Displaydriver} />
      <Route exact path='/adddriver' component={AddDriver} />
    
>>>>>>> 6208b7ad098cc2455f2868a92a5db1ad487eebb9
      <Footer/>
      
  
    </div>
    
  );
}
export default App;
