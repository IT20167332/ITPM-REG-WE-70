
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
import SearchBus from './component/BookingManagement/SearchBus';
import BusList from './component/BookingManagement/BusList';
import GetyourSeat from './component/BookingManagement/GetyourSeat';
import Displaydriver from './component/EmployeeMagement/Displaydriver';
import AddDriver from './component/EmployeeMagement/AddDriver';
import AdminMenu from './component/AdminManagement/AdminMenu';
import MyBooking from './component/BookingManagement/MyBooking';

function App() {

  return (
    <div className='main-background'>
      
      <Navbar/> 
          <Route exact path='/' component={Home}/> 
          <Route exact path='/services' component={SearchBus}/>
          
          <Route exact path='/usersingin/:payment' render={()=> <SingInForm/>}/>
          <Route exact path='/userlogin' component={UserLogin}/>
          <Route exact path='/services/:from/:to/:date' component={BusList}/>
          <Route exact path='/booking/:id' render={()=> <GetyourSeat/>}/>
          <Route exact path='/userlogin' component={UserLogin} />
          <Route exact path='/showdriver' component={Displaydriver} />
          <Route exact path='/adddriver' component={AddDriver} />
          <Route exact path='/adminPanel/:pname' render={()=> <AdminMenu/>}/>
          <Route exact path='/myBooking' render={()=> <MyBooking/>}/>
          
      <Footer/>
      
  
    </div>
    
  );
}
export default App;
