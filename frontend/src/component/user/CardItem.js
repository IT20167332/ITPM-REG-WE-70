import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom'
import {GetImgPreview} from '../user/GetImgPreview';
import {UserContext} from "../user/UserContext";


function CardItem(props) {

    //console.table(props.product._id)
    const { setUser } = useContext(UserContext);
    const {setmodel,settempImg} = useContext(GetImgPreview);
    //
    const [iconStatus,seticonStatus] = useState("far");
    const [isTuhmcsUp,setisTuhmcsUp] = useState(false);
    const [likeCount, setlikeCount] = useState(0);
    //const userID = User;
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
            
            return c.substring(name.length, c.length);
            
          }
        }
        return "";
    }
    const userID = getCookie("_id");

    useEffect(() => {
        axios.get(`http://localhost:8989/api/like/is_user_like/${userID}/${props.product._id}`)
        .then(res => setisTuhmcsUp(res.data.status))
        .catch(error => console.log(error));
    },[]);

    useEffect(() => {
        axios.get(`http://localhost:8989/api/like/get_like_count/${props.product._id}`)
        .then(res =>setlikeCount(res.data.count) )
        .catch(error => console.log(error));
    },[]);
    
    const thumbsClick = () =>{
        
        if(userID === ""){
            console.log("user id null");
            window.location.replace('/userlogin');
            
        }else{
            if(isTuhmcsUp){
                setisTuhmcsUp(false);
                
                axios.delete(`http://localhost:8989/api/like/like_delete/${userID}/${props.product._id}`)
                .then((res)=>{
                    console.log(res);
                    setlikeCount(likeCount-1);
                })
                .catch(()=>{
                    console.log("cannot delete!");
                })
            }else{
                setisTuhmcsUp(true);
                
                const newlike = {
                    userID:userID,
                    productID:props.product._id
                }
                axios.post('http://localhost:8989/api/like/add',newlike)
                .then((object)=>{
                    console.log(object);
                    setlikeCount(likeCount+1);
                }).catch((err)=>{
                    alert("sorry we can't add like! "+err)
                });
            }
           
        }

        

    }
    const showThumbs = () =>{
        if(isTuhmcsUp===true){
            seticonStatus("fas");
        }else{
            seticonStatus("far");
        }
    }
    
    useEffect(()=>{
        showThumbs();
        
    });
    function setimg(img){
        settempImg(img);
        setmodel(true);
        var plus = 1;
        const object = {
            "plus":plus
        }
        axios.put(`http://localhost:8989/product/view_update/${props.product._id}`,object)
        .then(()=>{
            
        }).catch((err)=>{
            alert("sorry we can't add like! "+err)
        });
    }

  
    return (
        <>
        
        <div className='pics'>
             <div className='outerBox'>
                <img src={`http://localhost:8989/api/${props.product.productImage}`} alt='Travel' className='img-new'/>
                <div className='inner-box'>
                    <h4 className='cu_title'>{props.product.title}</h4>
                    <p className='cards__item__text'>{props.product.description}</p>
                    <div className='cu-idiv'>
                            <div style={{display:"flex"}}>
                                <i className={` ${iconStatus}  fa-heart cu-icon`} onClick={()=>{thumbsClick()}}></i>
                            
                                <p className='cu-count'>{likeCount}</p>
                            </div>
                                
                            
                            <div style={{display:"flex"}}>
                                <i className='fas fa-search-plus cu-icon-zoom' onClick={()=>{setimg(`http://localhost:8989/api/${props.product.productImage}`)}} ></i>
                            
                                <Link to="productdetails">
                                    <i className="fas fa-book-open cu-icon-zoom" onClick={()=>{setUser(props.product)}}></i>
                                </Link>
                            </div>
                    </div>
                    
                </div>
             </div>
        </div>
        </>
    )
}

export default CardItem

/*
        <div className='pics'>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    
                        <div className='cards__item__pic-wrap' >
                            <img src={props.src} alt='Travel' className='cards__item__img'/>
                            
                        </div>
                    
                    <div className='cards__item__info'>
                    <h4 className='cu_title'>{props.title}</h4>
                    <hr></hr>
                    <h5 className='cards__item__text'>{props.text}</h5>
                    <div className='cu-idiv'>
                        <tr>
                            <th>
                                <i className={` ${iconStatus}  fa-heart cu-icon`} onClick={()=>{thumbsClick()}}></i>
                            </th>
                            <th>
                                <p className='cu-count'>{likeCount}</p>
                            </th>
                        </tr>
                    </div>
                        
                        
                        
                    </div>
                </div>
            </li>
        </div>
        */



        /*                    <div className='cu-idiv'>
                        <tr>
                            <th>
                                <i className={` ${iconStatus}  fa-heart cu-icon`} onClick={()=>{thumbsClick()}}></i>
                            </th>
                            <th>
                                <p className='cu-count'>{likeCount}</p>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <i className='fas fa-search-plus cu-icon-zoom' onClick={()=>{setimg(`http://localhost:8989/api/${props.product.productImage}`)}} ></i>
                            </th>
                            <th>
                                <Link to="productdetails">
                                    <i className="fas fa-book-open cu-icon-zoom" onClick={()=>{setUser(props.product)}}></i>
                                </Link>
                                
                            </th>
                        </tr>
                        
                    </div>

                    */