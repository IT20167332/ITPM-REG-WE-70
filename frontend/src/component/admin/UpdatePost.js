import React, { useState, useEffect, useContext } from 'react'

import './AddPost.css'
import axios from 'axios';
import {UserContext} from "../user/UserContext";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UpdatePost() {

    const {User } = useContext(UserContext);

            //************************************************ *

            const [validUser, setvalidUser] = useState(false)
            let ids = sessionStorage.getItem("AdminId")
            
            axios.post('http://localhost:8989/api/admin/checkadmin',{id:ids})
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
   
        var Size,Title,Description,Availability,Category,DrowingType,W,L,Si,img="",id,Board,Tag,Price;
    
        const notify = (messege) => {
            toast.success(`${messege}`,{
                position: "top-right",
                autoClose: true,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            
            })
        };
        try {
            id = User._id
            Size = User.size
            Title=User.title
            Description=User.description
            Availability=User.availability
            Category=User.category
            DrowingType=User.drowingType
            var sizeArr = Size.split(" ")
            W=sizeArr[0]
            L=sizeArr[2]
            Si=sizeArr[3]
            img = `http://localhost:8989/api/${User.productImage}`
            Board = User.Board
            Tag = User.tag
            Price = User.price
        } catch (error) {
            window.location.replace("/AdminPanel/postmanagement")
        }
        

        
    
        //const[productImage,setproductImage] = useState([]);
        //const [imgUrl, setimgUrl] = useState("");
        const [title, setTitle] = useState(Title);
        const [description, setdescription] = useState(Description);
        const [ailability, setavAilability] = useState(Availability);
        const [category, setCategory] = useState(Category);
        const [drowingType, setDrowingType] = useState(DrowingType);
        const [Width, setWidth] = useState(W);
        const [Length, setLength] = useState(L);
        const [SI, setSI] = useState(Si);
        const [tag, settag] = useState(Tag)
        const [price, setprice] = useState(Price)
        const [board, setboard] = useState(Board)
    

    

    console.log(User);
    
    
    // console.log(productImage[0])
    // var binaryData = [];
    // binaryData.push(productImage[0]);
    // const path = URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))

    function SendData(e){

        e.preventDefault();

        // var title = document.getElementById("title").value
        // var description = document.getElementById("description").value
        // var ailability = document.getElementById("ailability").value
        // var category = document.getElementById("category").value
        // var drowingType = document.getElementById("drowingType").value
        // var Width = document.getElementById("Width").value
        // var Length = document.getElementById("Length").value
        // var SI = document.getElementById("SI").value
        
        const size = Width +" x "+Length+" "+SI;
        
        const formData = {
            id:id,
            title:title,
            description:description,
            ailability:ailability,
            category:category,    
            drowingType:drowingType,
            size:size,
            board:board,
            price:price,
            tag:tag
        }

        console.table(formData);
        
        axios.put("http://localhost:8989/product/update",formData)
        .then((res)=>{
            console.log(res);   
            notify("Data updated")
            window.location.replace("/AdminPanel/postmanagement")
        }).catch((err)=>{
            console.log("sorry we can't add Event! "+err);
        });
    }
    const [categorys, setcategorys] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8989/api/category/getcategory`)
        .then(res => setcategorys(res.data) )
        .catch(error => console.log(error));
    },[]);
    if(validUser){
        return (
            <div>
        
                <div className='ap-b-div'>
                <h1>Update Post</h1>
                <div className='form-div'>
                <img src={img} alt='' className='privewe-img'/>
                    <form className='ap-from' onSubmit={SendData} >
                        
                        <ul className='ap-form-ul'>
                            <li className='ap-form-li' >
                                    <div className="ap-control">
                                    
                                    <input type="file" className="form-control" id="title" aria-describedby="inputGroupFileAddon03" aria-label="Upload"   disabled/>
                                    
                                </div>
                                <div className='ap-control'>
                                    <lable for='name' >Title</lable>
                                    <input type='title' className="form-control" id='name' value={title}  onChange={(e)=>{
                                        setTitle(e.target.value)
                                    }} />
                                </div>
                                <div className='ap-control'>
                                    <lable for='text-area'>Description</lable>
                                    <textarea  type='text-area' className="form-control" id='text-area' value={description} onChange={(e)=>{
                                        setdescription(e.target.value)
                                    }}/>
                                </div>
                                <div className=''>
                                    <lable className='form-check-label' for='checkbox' >availability</lable>
                                    <input type='checkbox' id='checkbox' value={ailability} onChange={(e)=>{
                                        setavAilability(e.target.value)
                                    }}/>
                                    
                                </div>
                            
                                <div className="input-group ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="">size (width x length)</span>
                                    </div>
                                    <input type="text" className="form-control" value={Width} onChange={(e)=>{
                                        setWidth(e.target.value)
                                    }}/>
                                    <input type="text" className="form-control" value={Length} onChange={(e)=>{
                                        setLength(e.target.value)
                                    }}/>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={SI} onChange={(e)=>{
                                        setSI(e.target.value)
                                    }} >
                                
                                            <option selected value="mm">mm</option>
                                            <option value="cm">cm</option>
                                            <option value="m">m</option>
                                            <option value="inc">inc</option>
                                        </select>
                                </div>
                            </li>
                            <li className='ap-form-li'>
                                <div className='ap-control'>
                                        <div className="col-auto my-1">
                                            <label className="mr-sm-2" for="inlineFormCustomSelect">Category</label>
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={category} onChange={(e)=>{
                                        setCategory(e.target.value)
                                    }}>
                                                <option selected>Choose...</option>
                                                {
                                                    categorys.map((category1,index)=>(
                                                        <option value={`${category1.category}`}>{category1.category}</option>
                                                    ))
                                                }
                                                
                                                
                                            </select>
                                            </div>
                                </div>
                                <div className='ap-control'>
                                        <div className="col-auto my-1">
                                            <label className="mr-sm-2" for="inlineFormCustomSelect">Drowing Type</label>
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={drowingType} onChange={(e)=>{
                                        setDrowingType(e.target.value)
                                    }}
                                            >
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            </div>
                                </div>
                                <div className='ap-control'>
                                        <div className="col-auto my-1">
                                            <label className="mr-sm-2" for="inlineFormCustomSelect">Board</label>
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={board} onChange={(e)=>{
                                                setboard(e.target.value);
                                            }}>
                                                <option selected>Choose...</option>
                                                <option value="1">Canvas</option>
                                                <option value="2">A4 sheet</option>
                                                <option value="3">Paper</option>
                                            </select>
                                            </div>
                                </div>
                                <div className='ap-control'>
                                    <lable for='text-area'>Tag</lable>
                                    <textarea  type='text-area' className="form-control" id='text-area' value={tag} placeholder='Separate commas, when inserting tags                  eg:- tag1,tag2,tag3' onChange={(e)=>{
                                        settag(e.target.value);
                                    }}/>
                                </div>
                                <div className='ap-control '>
                                    <lable for='name'>Price  (RS.)</lable>
                                    <input type='number' className="form-control" id='name' value={price} onChange={(e)=>{
                                        setprice(e.target.value);
                                    }}/>
                                </div>

                            </li>
                            
                        </ul>
                        <button  type="submit" className='s-btn'>Update</button>
                        
                    </form>

                </div>
            </div>

            </div>
        
    )
    }else{
        return(<div><h1>plese Login!</h1></div>)
    }
    
}

export default UpdatePost