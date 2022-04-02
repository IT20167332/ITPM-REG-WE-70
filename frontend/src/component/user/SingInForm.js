import axios from 'axios'
import React,{useState} from 'react'
import "./SingInForm.css"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingInForm() {
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [password, setpassword] = useState("")
    const [Cpassword, setCpassword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [postalCode, setpostalCode] = useState("")
    const [termsAndConditions, settermsAndConditions] = useState(true)
    //const [valid, setvalid] = useState(false)
    
    function onclickT(){
        
        settermsAndConditions(!termsAndConditions)

        if(termsAndConditions=== true && password===Cpassword){
            document.getElementById("submitButton").removeAttribute("disabled")
        }else{
            document.getElementById("submitButton").setAttribute("disabled","disabled")
        }
        
        console.log("value = "+termsAndConditions)
    }

    function onFormSubmit(){

        console.log("form sbmiting")
        const userData = {
            name:name,
            email:email,
            password:password,
            phoneNumber:phoneNumber,
            postalCode:postalCode,
            address:address
        }

        axios.post(`http://localhost:8989/api/user/add`,userData)
        .then((res)=>{
            window.location.replace('/userlogin');
        })
        .catch((err)=>{
            notify2("faill")
        })

    }
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
        <>
            <div className='sing-contanner'>
            <form className="row g-3" onSubmit={onFormSubmit}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required onChange={(e)=>{
                        setemail(e.target.value)
                    }}/>
                </div>
                <div className="col-md-6">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="name" onChange={(e)=>{
                        setname(e.target.value)
                    }}/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e)=>{
                        setaddress(e.target.value)
                    }}/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" onChange={(e)=>{
                        setpassword(e.target.value)
                    }}/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="inputPassword4" onChange={(e)=>{
                        setCpassword(e.target.value)
                      
                    }}/>
                </div>
                <div className="col-md-6">
                    <label for="phone" className="form-label">Phone number</label>
                    <input type="text" className="form-control" id="phone" onChange={(e)=>{
                        setphoneNumber(e.target.value)
                    }}/>
                </div>
                
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Postal code</label>
                    <input type="text" className="form-control" id="inputZip" onChange={(e)=>{
                        setpostalCode(e.target.value)
                    }}/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"
                    onClick={()=>{
                        onclickT()
                    }}/>
                    <label className="form-check-label" for="gridCheck" >
                        I agree the terms and conditions
                    </label>
                    </div>
                </div>
                <div className="col-md-2 submit-btn">
                    <button type="submit" className="btn btn-primary" id='submitButton' disabled>Sign in</button>
                </div>
            </form>
            
        </div>
        </>
        
    )
}

export default SingInForm
