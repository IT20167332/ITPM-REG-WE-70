import React,{useState,useEffect} from 'react'
import './CategoryManagement.css';
import axios from 'axios';


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CategoryManagement() {


    const [categorys, setcategorys] = useState([]);
    const [addCategorys, setaddCategorys] = useState(null);

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


    const yesno = (id,cate) =>{
        function clickYes(){
            axios.delete(`http://localhost:8989/api/category/deletecategory/${id}`)
            .then((res)=>{
                notify(`"${cate}" Delete successfuly`)
            })
            .catch((err)=>{
                notify2(`err`)
            })
        }
        return(
            <div>
               <p>are you sure to delete this</p>
               <div >
                    <button type="button" className="btn btn-success">No</button>
                    
                    <button type="button" className="btn btn-danger" onClick={()=>{
                        clickYes()
                        
                    }}>Yes</button>
               </div>
                
            </div>
            
        )
    }


    console.log(addCategorys)
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
    const notify3 = (id,cate) => {
        toast.error(yesno(id,cate),{
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        
        })
    };
    
    useEffect(() => {
        axios.get(`http://localhost:8989/api/category/getallcategory`)
        .then(res => setcategorys(res.data) )
        .catch(error => console.log(error));
    },[]);
    console.table(categorys);


    function addCategory(e){
        e.preventDefault();
        const categoryL={
            category:addCategorys
        }
        axios.post(`http://localhost:8989/api/category/addcategory`,categoryL)
        .then((res)=>{
            
            console.log(res.data.category)
            notify(`"${res.data.category}" aded to Category list`);
        })
        .catch((err) => {
            //console.log(err.response.data.error);
            notify2(`${err.response.data.error}`);
        });
    }

    function deleteCategory(id,cate){

        notify3(id,cate)

    }

    
    
    const TigButton = (id,status)=>{
       
        
        return(
            <input className="form-check-input cu-tig" type="checkbox" id="flexSwitchCheckDefault"  />
        )
    }
    

    if(validUser){
        return (
            <div className='ap-b-div'>
                <h1>Category Management</h1>

                <div className='cm-inner-div'>
                    <form onSubmit={addCategory}>
                        <div className="input-group mb-3">
                            <input type="text" className='form-control cm-input' placeholder="Enter your new Category here." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e)=>{
                            setaddCategorys(e.target.value); 
                            }
                                
                            }/>
                            <button className="btn btn-primary btn-custom" type="submit"  >ADD</button>
                        </div>
                    </form>
                </div>
                <div className='table-div'>
                    <table className="table table-secondary">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categorys.map((category,index)=>(

                                    <tr>
                                        <th scope="row">{index+1}</th>
                                            <td>{category.category}</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                {TigButton(category._id,category.visible)}
                                                
                                            </div>

                                        </td>
                                        <td>
                                            <i className="fas fa-trash-alt cm-icon-delete" onClick={()=>{
                                                deleteCategory(category._id,category.category)
                                            }}></i>
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }else{
        return(<div><h1>plese Login!</h1> </div>)
    }

}

export default CategoryManagement
