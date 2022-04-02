import React,{useContext,useState} from 'react'
import './AdminLogin.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {UserContext} from "../user/UserContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function AdminLogin() {
    const { setUser } = useContext(UserContext);
    const [userName,setuserName] = useState("");
    const [password,setPassword] = useState("");

    const toastBody = ({closeToast}) =>{
        return (
            <div>
                <h4>Login Sucsesful!</h4>
                <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
                    <Link to='/AdminPanel' ><button className='btn btn-success' onClick={closeToast}>OK</button></Link>
                </div>
                
            </div>
        )
    }

    const notify = () => {
        toast.success(toastBody,{
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        
        })
    };

    function Cheackuser(e){
        
        e.preventDefault();

        const newUser ={
            userName,
            password
        }
        
        axios.post('http://localhost:8989/api/admin/signin',newUser)
        .then((res)=>{
            console.log(res.data);
            if(res.data.success){
                setUser(res.data.id)
                console.log("log in sucsesful");
                sessionStorage.setItem("AdminId", res.data.id);
                notify();
                //window.location.replace('/AdminPanel');
            }
        })
        .catch(error => console.log(error));
       
    };

    return (
        <div>
           <ToastContainer />
        <section className='AL-section'>
            <div className='from-container'>
                <h1>ligin from</h1>
                <form onSubmit={Cheackuser}>
                    <div className='control'>
                        <lable for='name'>User Name</lable>
                        <input type='name' name="name" id='name' onChange={(e)=>{
                                setuserName(e.target.value);
                            }}/>
                    </div>
                    <div className='control'>
                        <lable for='pasw'>Password</lable>
                        <input type='password' name="pasw" id='pasw' onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                    </div>
                    <div className='control'>
                        <input type='submit' value='Login' />
                    </div>
                </form>
                <div className='link'>
                   
                </div>
            </div>
        </section>
        
    </div>
    )
}

export default AdminLogin
