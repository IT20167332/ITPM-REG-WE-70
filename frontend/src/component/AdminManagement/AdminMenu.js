import React from 'react'
import './adminMenu.css'
import { Route,Link } from 'react-router-dom';
import AddBus from '../busManagement/AddBus';
function AdminMenu() {
  return (
      <>
    <div className="sidebar">
        <Link to='/adminPanel/addbus'><a ><i className="fa fa-fw fa-home"></i> Home</a></Link>
        <Link to=''><a ><i className="fa fa-fw fa-wrench"></i> Add Buses</a></Link>
        <Link to=''><a ><i className="fa fa-fw fa-user"></i> Bus List</a></Link>
        <Link to=''><a ><i className="fa fa-fw fa-envelope"></i> Add </a></Link>
        
        
        
        
        
    </div>
    <div class="main">
        <h2>Sidebar with Icons</h2>
        <Route exact path= '/adminPanel/addbus' render={()=><AddBus/>}/>
        
    </div>
  </>
  )
}

export default AdminMenu