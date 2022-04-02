import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import './Cards.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {GetImgPreview} from '../user/GetImgPreview';


function Cards(props) {

    const {model,setmodel,tempImg} = useContext(GetImgPreview);
    const[products, setProducts] =useState([]);
    AOS.init()
    
    useEffect(() => {
        axios.get(`http://localhost:8989/product/${props.url}`)
        .then(res => setProducts(res.data.modelData))
        .catch(error => console.log(error));
    },[]);
    console.log(products.length/3);
    


    return (
        
        <div>
            <div className={model? "model open" : "model"}>
                <img src={tempImg} alt=''/>
                <i className="fas fa-times" onClick={()=>{setmodel(false)}}></i>
            </div>
            <div className='gallery'>
                {products.map((oneP,index)=>{
                    return(
                        <CardItem key={index}
                            product = {oneP}
                        /> 
                    )
                })}
            </div>
        </div>    
    );
}

export default Cards;

/*
src={`http://localhost:8989/api/${oneP.productImage}`} 
                            text={`${oneP.description}`}
                            label='Adventure' 
                            path='/servise' 
                            title={`${oneP.title}`} 
                            likes={`${oneP.likes}`}
                            id = {`${oneP._id}`}*/

/*
<div className='cards'>
                <h1> Top five</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            {
                                products.map((oneP,key)=>(
                                    
                                    key<2?
                                        
                                            <CardItem 
                                                src={`http://localhost:8989/api/${oneP.productImage}`} 
                                                text={`${oneP.description}`}
                                                label='Adventure' 
                                                path='/servise'
                                                title={`${oneP.title}`} 
                                                likes={`${oneP.likes}`}
                                                id = {`${oneP._id}`}
                                                
                                            /> 
                                        
                                    :
                                    <></>
                                    
                                ))
                                
                            }
                        </ul>
                        <ul className='cards__items'>
                            {
                                products.map((oneP,key)=>(
                                    
                                    key>=2?
                                        
                                            <CardItem 
                                                src={`http://localhost:8989/api/${oneP.productImage}`} 
                                                text={`${oneP.description}`}
                                                label='Adventure' 
                                                path='/servise' 
                                                title={`${oneP.title}`} 
                                                likes={`${oneP.likes}`}
                                                id = {`${oneP._id}`}
                                            /> 
                                        
                                    :
                                    <></>
                                    
                                ))
                                
                            }
                        </ul>
                        
                    </div>    
                </div>            
            </div>
            */
           /*
           <div className='main-title-div'>
            <h3 className='main-title' data-aos="zoom-in-up" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration="6000">Top Five</h3>
            </div>
            <div className='gallery'>
                {products.map((oneP,index)=>{
                    return(
                        <CardItem 
                            src={`http://localhost:8989/api/${oneP.productImage}`} 
                            text={`${oneP.description}`}
                            label='Adventure' 
                            path='/servise' 
                            title={`${oneP.title}`} 
                            likes={`${oneP.likes}`}
                            id = {`${oneP._id}`}
                        /> 
                    )
                })}
            </div>
            <hr/>
            */

            /*
                    props.status == true?
        <div className='topfive-div' >
            <div className='main-title-div'>
            <h3 className='main-title' data-aos="zoom-in-up" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration="6000">Top Five</h3>
            </div>
            <div className='gallery newgallery'>
                {products.map((oneP,index)=>{
                    return(
                        <CardItem 
                            src={`http://localhost:8989/api/${oneP.productImage}`} 
                            text={`${oneP.description}`}
                            label='Adventure' 
                            path='/servise' 
                            title={`${oneP.title}`} 
                            likes={`${oneP.likes}`}
                            id = {`${oneP._id}`}
                        /> 
                    )
                })}
            </div>
            <hr/>
        </div>
        
            :

            */