import React,{useState} from 'react'
import AddPost from './AddPost'
import AdminNavBar from './AdminNavBar'
import { Route } from 'react-router-dom';
import './Adminpanel.css'
import CategoryManagement from './CategoryManagement';
import PostManagement from './PostManagement';
import UpdatePost from './UpdatePost';
import axios from 'axios';


function Adminpanel() {
        //************************************************ *

        const [validUser, setvalidUser] = useState(false)
        let id = sessionStorage.getItem("AdminId")
        
        axios.post('http://localhost:8989/api/admin/checkadmin',{id:id})
        .then((res)=>{
            
            //console.log(res.data)
            if(res.data.success === true){
                console.log("hip hip hureee")
                setvalidUser(true)
            }else{
                setvalidUser(false)
            }
            
        })
        .catch((err)=>{
            console.log("this is error in post "+err)
            setvalidUser(false)
        })
        //**************************************** *
        if(validUser){
            return (
                    <div className='ap-div'>
                        <ul className='ap-ul'>
                            <li className='ap-li'>
                                <AdminNavBar/>
                            </li>
                            <li className='ap-li'>
                                <Route exact path='/AdminPanel/addpost' component={AddPost}/>
                                <Route exact path='/AdminPanel/category' component={CategoryManagement}/>
                                <Route exact path='/AdminPanel/postmanagement' component={PostManagement}/>
                                <Route exact path='/AdminPanel/updatepost' component={UpdatePost}/>
                                
                            </li>
                                

                            
                        </ul>

                        
                    </div>
                )
        }else{
            return(<div><h1>plese Login!</h1> </div>)
        }
    
}

export default Adminpanel
