
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
import ShowBusDetails from './component/busManagement/ShowBusDetails';
import SearchBus from './component/BookingManagement/SearchBus';
import BusList from './component/BookingManagement/BusList';
import GetyourSeat from './component/BookingManagement/GetyourSeat';
import Displaydriver from './component/EmployeeMagement/Displaydriver';
import AddDriver from './component/EmployeeMagement/AddDriver';
import AddConductor from './component/EmployeeMagement/AddConductor';
import Displayconductor from './component/EmployeeMagement/DisplayConductor';
import UpdateDriver from './component/EmployeeMagement/UpdateDriver';
import UpdateConductor from './component/EmployeeMagement/UpdateConductor';
import AdminMenu from './component/AdminManagement/AdminMenu';
import MyBooking from './component/BookingManagement/MyBooking';

function App() {

  return (
    <div className='main-background'>
      
      <Navbar/> 
          <Route exact path='/' component={Home}/> 
          <Route exact path='/services' component={SearchBus}/>
          
            <Route exact path= '/contact' render={()=><AddBus/>}/>
            <Route exact path='/usersingin' render={()=> <SingInForm/>}/>
            <Route exact path='/userlogin' component={UserLogin} />
            <Route exact path='/showdriver' component={Displaydriver} />
            <Route exact path='/adddriver' component={AddDriver} />
            <Route exact path='/addconductor' component={AddConductor} />
            <Route exact path='/showconductor' component={Displayconductor} />
            <Route exact path='/updatedriver' component={UpdateDriver} />
            <Route exact path='/updateconductor' component={UpdateConductor} />
          <Route exact path= '/contact/:fomType' render={()=><AddBus/>}/>
          <Route exact path='/usersingin' render={()=> <SingInForm/>}/>
          <Route exact path='/userlogin' component={UserLogin}/>
          <Route exact path='/show' component={ShowBusDetails}/>
          <Route exact path='/usersingin/:payment' render={()=> <SingInForm/>}/>
          <Route exact path='/userlogin' component={UserLogin}/>
          <Route exact path='/services/:from/:to/:date' component={BusList}/>
          <Route exact path='/booking/:id' render={()=> <GetyourSeat/>}/>
          <Route exact path='/userlogin' component={UserLogin} />
          <Route exact path='/showdriver' component={Displaydriver} />
          <Route exact path='/adddriver' component={AddDriver} />
          <Route exact path='/adminPanel/:pname' render={()=> <AdminMenu/>}/>
          <Route exact path='/myBooking' render={()=> <MyBooking/>}/>
          <Route path='/adminPanel' render={()=> <AdminMenu/>}/>
          
      <Footer/>
      
  
    </div>
    
  );
}
export default App;
