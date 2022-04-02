import React,{useContext,useState,useEffect} from 'react'
import './PostTable.css'
import {GetImgPreview} from '../user/GetImgPreview';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserContext} from "../user/UserContext";


function PostTable(probs) {
    //console.table(probs.products)
    //const products = probs.products;
    const {setmodel,settempImg} = useContext(GetImgPreview)
    const [ tigButton,settigButton] = useState(false)
    const[products, setProducts] =useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8989/product/getfortable/-1/title`)
        .then(res => setProducts(res.data.modelData))
        .catch(error => console.log(error));


    },[tigButton]);

    
    function setimg(img){
        settempImg(img);
        setmodel(true);
    }
    function GetLikeCount(id){
        
        //const [count, setcount] = useState("")
        var count = 0
        axios.get(`http://localhost:8989/api/like/get_like_count/${id}`)
        .then((res)=>{
            //console.log(res.data.count);
            count = res.data.count 
            
        } )
        .catch(error => console.log(error));
        return(count);
    }

    
    function deletePost(id,src,path){
        notify(id,src,path)
    }

    const notify = (id,src,path) => {
        toast.error(yesno(id,src,path),{
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        
        })
    };
    const yesno =(Id,src,Path)=>{
        //console.log({Src:src})
        function clickYes(ids,paths){
            
            
            axios.post(`http://localhost:8989/product/delete`,{id:ids,path:paths})
            .then((data)=>{
                notify2("Delete successfuly.")
                settigButton(!tigButton)
            }).catch((err)=>{
                console.log(err.response)
            })

        }
        const notify2 = (messege) => {
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



        return(
            <div>
                <ul className='yesno-ul'>
                    <li>
                        <img className='yesno-img' src={src} alt='err img'/>
                    </li>
                    <li>
                        <p>Are you sure to delete this?</p>
                    </li>
                </ul>
                <ul className='yesno-ul '>
                    <li>
                        <button type="button" className="btn btn-success">No</button>
                    </li>
                    <li>
                        {/* <Link to="/postmanagement"> */}
                        <button type="button" className="btn btn-danger" onClick={()=>{
                            clickYes(Id,Path) 
                        }}>Yes</button>

                        {/* </Link> */}
                        
                    </li>
                </ul>
                

            </div>
        )
    }

    const { setUser } = useContext(UserContext);
    function onUpdate(Product){
        console.log(Product)
        setUser(Product)
        // window.location.replace("/AdminPanel/updatepost")
    }




    return (
        <div>
            <table className="table table-success table-striped cu-table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">image</th>
                        <th scope="col">Title</th>
                        <th scope="col">views</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Category</th>
                        <th scope="col">Size</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,index)=>(

                                <tr>
                                    <th scope="row">{index+1}</th>
                                        <td>
                                            {
                                                <img className='table-img' alt='' src={`http://localhost:8989/api/${product.productImage}`} onClick={()=>{
                                                    setimg(`http://localhost:8989/api/${product.productImage}`)
                                                }}/>

                                            }
                                        </td>
                                        <td className='td-title'>
                                            <p>{product.title}</p>
                                        </td>
                                        <td>
                                            <p>{product.likes}</p>
                                            
                                        </td>
                                        <td>
                                            <p>{GetLikeCount(product._id)}</p>
                                            
                                        </td>
                                        <td>
                                            <p>{product.category}</p>
                                            
                                        </td>
                                        <td>
                                            <p>{product.size}</p>
                                            
                                        </td>
                                        <td>
                                            {
                                                <div className='table-icon-div' >
                                                    <Link to="/AdminPanel/updatepost">
                                                        <i className="fas fa-edit" type='update' onClick={()=>{
                                                            onUpdate(product);
                                                        }}></i>
                                                    </Link>
                                                    
                                                    <i className="fas fa-trash-alt" type='delete' alt="Delete" onClick={()=>{
                                                        deletePost(product._id,`http://localhost:8989/api/${product.productImage}`,product.productImage)
                                                    }}></i>

                                                </div>

                                            }
                                            
                                        </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            
        </div>
    )
}

export default PostTable
