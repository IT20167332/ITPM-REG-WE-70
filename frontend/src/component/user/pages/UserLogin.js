import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './UserLogin.css';
import axios from 'axios';



import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserLogin() {

    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   // const [User, setUser] = useState([]);



   function setCookie(cname, cvalue, exdays) {
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log("cookes create");
  }

    function Cheackuser(e){
        
        e.preventDefault();

        const newUser ={
            email,
            password
        }
        
        axios.post('http://localhost:8989/api/user/signin',newUser)
        .then((res)=>{
            console.log(res.data);
            if(res.data.success){
                //setUser(res.data.id)
                console.log("log in sucsesful")
                setCookie("_id",res.data.id,365);
                window.location.replace('/');
            }
        })
        .catch((error)=>{
            //console.log(error.response.data)
            notify2(error.response.data.message)
        });
       //error => console.log(error.response.data)
    };
    const notify2 = (messege) => {
        toast.error(`${messege}`,{
            position: "top-right",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        
        })
    };
    

    return (
        <div>
            <section className='UL-section'>
                <div className='from-container'>
                    <h1>ligin from</h1>
                    <form onSubmit={Cheackuser}>
                        <div className='control'>
                            <lable for='email'>Email</lable>
                            <input type='email' name="email" id='email' onChange={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                        </div>
                        <div className='control'>
                            <lable for='pasw'>Password</lable>
                            <input type='password' name="pasw" id='pasw' onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                        </div>
                        <div className='control'>
                            <input type='submit' value='Login'/>
                        </div>
                    </form>
                    <div className='link'>
                        <Link to='/usersingin'>
                            <a href='# '>Sing in</a>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default UserLogin
