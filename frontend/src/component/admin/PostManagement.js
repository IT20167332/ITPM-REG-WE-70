import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import './PostManagement.css'
import PostTable from './PostTable';
import {GetImgPreview} from '../user/GetImgPreview';



function PostManagement() {
    const[products, setProducts] =useState([]);
    const {model,setmodel,tempImg} = useContext(GetImgPreview);

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


    //console.table(products)

    //console.log(val)
    if(validUser){
        return (
                <div>
                    <div className={model? "model open" : "model"}>
                        <img src={tempImg} alt=''/>
                        <i className="fas fa-times" onClick={()=>{setmodel(false)}}></i>
                    </div>
                <div className='ap-b-div'>
                    <h1>Post Management</h1>
                    <PostTable products={products}/>

                </div>
                </div>
                
            )
    }else{
        return (
            <div><h1>plese Login!</h1></div>
        )
    }
    
}

export default PostManagement
