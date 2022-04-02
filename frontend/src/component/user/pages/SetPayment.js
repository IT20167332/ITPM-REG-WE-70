
import React, { useState } from "react"
import './SetPayment.css'
import { Link } from 'react-router-dom';

function SetPayment(props) {
    

    const [ setaccept] = useState(false)

    

    console.table(props.userData)
    var Email,PostalCode,PhoneNumber,Address;
    try {
       Email = props.userData.email
       PostalCode = props.userData.postalCode
       PhoneNumber = props.userData.phoneNumber
       Address = props.userData.address
    } catch (error) {
        console.log(error)
    }
    //const [email, setemails] = useState(Email)
    const [postalcode, setpostalcode] = useState(PostalCode)
    const [phoneNumber, setphoneNumber] = useState(PhoneNumber)
    const [address, setaddress] = useState(Address)
    
    function radioOnClick(){
        const radiobutton = document.getElementById("flexRadioDefault1")
        console.log("button = "+radiobutton.value)
        if(radiobutton.value === "on"){
            setaccept(true)
            document.getElementById("paybutton").removeAttribute("disabled")
        }
    }

    

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
  
    if(userID==null){
      console.log("user id null");
      window.location.replace('/userlogin');
    }
  

  
    
   
    //console.table(userData);

    

    return (
        <div>
            <div className="setp-main-containner">
                <div className="setp-div-left">
                    <div>
                        <div className='setp-img-bordder'>
                            <img className="setp-img" src={`http://localhost:8989/api/uploads\\2022-01-06T06,22,56.752Zsticker_6.png`}/>
                        </div>
                        <div className="setp-pricelist">
                            <h5>{`Item price `}</h5>
                            <h5>{`100`}</h5>
                        </div>
                        <div className="setp-pricelist">
                            <h5>{`Shiping free`}</h5>
                            <h5 >{`200`}</h5>
                            
                        </div>
                        <hr className="step-hr"/>
                        <div className="setp-pricelist">
                            <h5>{`Total`}</h5>
                            <h5 style={{fontSize:"4vh",color:"rgb(255, 126, 5)"}}>{`RS. 200/-`}</h5>
                        </div>
                        <hr className="step-hr"/>
                    </div>

                </div>
                <div className="setp-div-right ">
                    <div className="mb-3 setp-address">
                        <label for="exampleFormControlTextarea1" className="form-label">Shiping address</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={address}></textarea>
                    </div>
                    <div >
                        <div className="col-md-2 setp-address">
                            <label for="inputZip" className="form-label">Postal code</label>
                            <input type="text" className="form-control" id="inputZip" value={postalcode}/>
                        </div>
                        <div className="col-md-6 setp-address">
                            <label for="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                    </div>
                    <div className="col-md-6 setp-address">
                        <label for="inputphonenumber" className="form-label">Phone number</label>
                        <input type="text" className="form-control" id="inputphonenumber" value={phoneNumber} />
                    </div>

                    <div className="setp-address">
                        <input className="form-check-input" type="radio"  id="flexRadioDefault1" onClick={()=>{radioOnClick()}}/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="setp-address2">
                        <Link to='/productdetails/payment'>
                            <button className="btn btn-warning step-button" id="paybutton" disabled onClick={()=>{

                            }}>Pay</button>

                        </Link>
                        
                    </div>
                    

                </div>

            </div>
            
        </div>
    )
}

export default SetPayment
