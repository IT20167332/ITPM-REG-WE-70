import React from 'react'
import './adminMenu.css'
import { Route,Link } from 'react-router-dom';
import AddBus from '../busManagement/AddBus';
import ShowBusDetails from '../busManagement/ShowBusDetails';
function AdminMenu() {
  return (
      <>
    <div className="sidebar">
        <Link to='/adminPanel/home'><a ><i className="fa fa-fw fa-home"></i> Home</a></Link>
        <Link to='/adminPanel/addbus/add'><a ><i className="fa fa-fw fa-wrench"></i> Add Buses</a></Link>
        <Link to='/adminPanel/show'><a ><i className="fa fa-fw fa-user"></i> Bus List</a></Link>
        <Link to=''><a ><i className="fa fa-fw fa-envelope"></i> Add </a></Link>
        
        
        
        
        
    </div>
    <div class="main">
        <h2>Sidebar with Icons</h2>
        <Route exact path= '/adminPanel/addbus/:fomType' render={()=><AddBus/>}/>
        <Route exact path= '/adminPanel/show' render={()=><ShowBusDetails/>}/>
        
    </div>
  </>
  )
}

export default AdminMenu