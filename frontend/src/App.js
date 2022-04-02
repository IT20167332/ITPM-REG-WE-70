
import React ,{useState,useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from "axios";
import Navbar from './component/user/Navbar';
import './App.css';
import Home from './component/user/pages/Home';
import Footer from './component/user/Footer';
import Drawing from './component/user/pages/Drawing';
import UserLogin from './component/user/pages/UserLogin';
import SubscriptionPage from './component/user/pages/SubscriptionPage'
//import Adminpanel from './component/admin/adminpanel';
import AdminLogin from './component/admin/AdminLogin';
import { UserContext } from './component/user/UserContext';
import Adminpanel from './component/admin/Adminpanel';
import {GetImgPreview} from './component/user/GetImgPreview';
import ProductView from './component/user/pages/ProductView';
import SetPayment from './component/user/pages/SetPayment';
import SingInForm from './component/user/SingInForm';
import AboutMe from './component/user/pages/AboutMe';


function App() {
  const [User, setUser] = useState(null);

  //this two varible are define for get img preview 
  const [model, setmodel] = useState(false);
  const [tempImg, settempImg] = useState('')
  const [userData, setuserData] = useState(null)

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        console.log("cookes return!")
        return c.substring(name.length, c.length)
        
      }
    }
    return "";
  }
  const userID = getCookie("_id");

  useEffect(()=>{
     axios.get(`http://localhost:8989/api/user/getuser/${userID}`)
    .then((res)=>{
        setuserData(res.data[0])
    })
  },[])
  return (
    <div className='main-background'>
      
      <Navbar userData={userData}/> 
        <GetImgPreview.Provider value={{model, setmodel,tempImg,settempImg}}>
        <UserContext.Provider value={{User,setUser}}>
          <Route exact path='/' component={Home}/> 
        
          <Route exact path='/drawing' component={Drawing}/>
          <Route exact path='/productdetails' component={ProductView}/>
          <Route exact path='/productdetails/payment' render={()=> <SubscriptionPage userData={userData}/> } />
          <Route exact path='/productdetails/setpayment' render={()=> <SetPayment userData={userData} />}/>
          <Route exact path='/usersingin' render={()=> <SingInForm/>}/>
          <Route exact path='/aboutme' render={()=> <AboutMe/>}/>
          
          
          <Route exact path='/userlogin' component={UserLogin}/>
        
          <Route exact path='/admin' component={AdminLogin}/>
       
          <Route path='/AdminPanel' component={Adminpanel}/>
        </UserContext.Provider>  
        </GetImgPreview.Provider>
      <Footer/>
    </div>
    
  );
}
export default App;
