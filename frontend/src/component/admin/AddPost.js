import React, { useState, useEffect } from 'react'

import './AddPost.css'
import axios from 'axios';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddPost() {

    //const {User, setUser } = useContext(UserContext);

    const[productImage,setproductImage] = useState([]);
    //const [imgUrl, setimgUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [ailability, setavAilability] = useState("");
    const [category, setCategory] = useState("");
    const [drowingType, setDrowingType] = useState("");
    const [Width, setWidth] = useState("");
    const [Length, setLength] = useState("");
    const [SI, setSI] = useState("mm");
    const [board, setboard] = useState("");
    const [price, setprice] = useState("");
    const [tag, settag] = useState("");


        //************************************************ *

        const [validUser, setvalidUser] = useState(false)
        let id = sessionStorage.getItem("AdminId")
        
        axios.post('http://localhost:8989/api/admin/checkadmin',{id:id})
        .then((res)=>{
            
            //console.log(res.data)
            if(res.data.success === true){
                //console.log("hip hip hureee")
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
    
    console.log(productImage[0])
    var binaryData = [];
    binaryData.push(productImage[0]);
    const path = URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
    //console.log(new Blob(binaryData));
    
    // 
    //console.log(imgUrl)
    // productImage.map((oneI,index)=>{
    //     console.log(oneI)
    // })

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

    function SendData(e){

        e.preventDefault();
        const size = Width +" x "+Length+" "+SI;
        //const tagarry = tag.split(",");

        //const tagobject = {tagarry}
        //console.log(tagarry);
        const formData=new FormData(); 
        formData.append("title",title);
        formData.append("description",description);
        formData.append("ailability",ailability);
        formData.append("category",category);
        formData.append("drowingType",drowingType);
        formData.append("size",size);
        formData.append("productImage",productImage[0]);
        formData.append("board",board);
        formData.append("tag",tag);
        formData.append("price",price);



        axios.post("http://localhost:8989/product/add",formData)
        .then((res)=>{
            //console.log(res);  
            notify("Post added success.")
            document.getElementById("form").reset()
            console.log(res)
            
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
                    <h1>Add Post</h1>
                    <div className='form-div'>
                    <img src={path} alt='upload!' className='privewe-img' id="img"/>
                        <form className='ap-from' onSubmit={SendData} id='form' >
                            
                            <ul className='ap-form-ul'>
                                <li className='ap-form-li' >
                                        <div className="ap-control">
                                        
                                        <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" onChange={(e)=>{
                                            setproductImage(e.target.files)
                                        }}/>
                                        
                                    </div>
                                    <div className='ap-control'>
                                        <lable for='name'>Title</lable>
                                        <input type='title' className="form-control" id='name' onChange={(e)=>{
                                            setTitle(e.target.value);
                                        }}/>
                                    </div>
                                    <div className='ap-control'>
                                        <lable for='text-area'>Description</lable>
                                        <textarea  type='text-area' className="form-control" id='text-area' onChange={(e)=>{
                                            setdescription(e.target.value);
                                        }}/>
                                    </div>
                                    <div className=''>
                                        <lable className='form-check-label' for='checkbox' onChange={(e)=>{
                                            
                                            setavAilability(e.target.value);
                                        }}>availability</lable>
                                        <input type='checkbox' id='checkbox'/>
                                        
                                    </div>
                                
                                    <div className="input-group ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="">size (width x length)</span>
                                        </div>
                                        <input type="text" className="form-control" onChange={(e)=>{
                                            setWidth(e.target.value);
                                        }}/>
                                        <input type="text" className="form-control" onChange={(e)=>{
                                            setLength(e.target.value);
                                        }}/>
                                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e)=>{
                                            setSI(e.target.value);
                                        }}>
                                    
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
                                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e)=>{
                                                    setCategory(e.target.value);
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
                                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e)=>{
                                                    setDrowingType(e.target.value);
                                                }}>
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
                                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e)=>{
                                                    setboard(e.target.value);
                                                }}>
                                                    <option selected>Choose...</option>
                                                    <option value="1">one</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                </div>
                                    </div>
                                    <div className='ap-control'>
                                        <lable for='text-area'>Tag</lable>
                                        <textarea  type='text-area' className="form-control" id='text-area' placeholder='Separate commas, when inserting tags                  eg:- tag1,tag2,tag3' onChange={(e)=>{
                                            settag(e.target.value);
                                        }}/>
                                    </div>
                                    <div className='ap-control '>
                                        <lable for='name'>Price  (RS.)</lable>
                                        <input type='number' className="form-control" id='name' onChange={(e)=>{
                                            setprice(e.target.value);
                                        }}/>
                                    </div>

                                </li>
                                
                            </ul>
                            <button  type="submit" className='s-btn'>Submit</button>
                            
                        </form>

                    </div>
                </div>

                </div>
                
            )
    }else{
        return(
            <div><h1>plese Login!</h1> </div>
        )
    }
    
}

export default AddPost
