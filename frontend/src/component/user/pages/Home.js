import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import MainSection from '../MainSection'
import './home.css'
import CardItem from '../CardItem';
import {GetImgPreview} from '../GetImgPreview';


function Home() {

    const {model,setmodel,tempImg} = useContext(GetImgPreview);

    const[products, setProducts] =useState([]);
    const[content] = useState([]);
    //const[csskey, setcsskey] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8989/product/get/${5}`)
        .then(res => setProducts(res.data.modelData))
        .catch(error => console.log(error));
    },[]);
    console.log(products);
    try{
        //const windowsize = window.innerHeight;
        window.addEventListener('scroll',()=>{
            try{
                let content_0 = document.querySelector('.top-drow-div-0');
                let contentPosition_0 = content_0.getBoundingClientRect().top;
        
                let content_1 = document.querySelector('.top-drow-div-1');
                let contentPosition_1 = content_1.getBoundingClientRect().top;
        
                let content_2 = document.querySelector('.top-drow-div-2');
                let contentPosition_2 = content_2.getBoundingClientRect().top;
        
                let content_3 = document.querySelector('.top-drow-div-3');
                let contentPosition_3 = content_3.getBoundingClientRect().top;
        
                let content_4 = document.querySelector('.top-drow-div-4');
                let contentPosition_4 = content_4.getBoundingClientRect().top;
        
                let content_5 = document.querySelector('.third-section-heading');
                let contentPosition_5 = content_5.getBoundingClientRect().top;

                let screenPosition = window.innerHeight/2;
        
                if(contentPosition_0 < screenPosition){
                    content_0.classList.add('top-drow-div-active-0');
                }else{
                    content_0.classList.remove('top-drow-div-active-0');
                }
        
                if(contentPosition_1 < screenPosition){
                    content_1.classList.add('top-drow-div-active-1');
                }else{
                    content_1.classList.remove('top-drow-div-active-1');
                }
        
                if(contentPosition_2 < screenPosition){
                    content_2.classList.add('top-drow-div-active-2');
                }else{
                    content_2.classList.remove('top-drow-div-active-2');
                }
        
                if(contentPosition_3 < screenPosition){
                    content_3.classList.add('top-drow-div-active-3');
                }else{
                    content_3.classList.remove('top-drow-div-active-3');
                }
        
                if(contentPosition_4 < screenPosition){
                    content_4.classList.add('top-drow-div-active-4');
                }else{
                    content_4.classList.remove('top-drow-div-active-4');
                }
                if(contentPosition_5 < screenPosition){
                    content_5.classList.add('third-section-heading-active');
                }else{
                    content_5.classList.remove('third-section-heading-active');
                }

            }catch(err1){
                
            }

            
        },[]);
        console.log(content);
        console.log(window.innerHeight-content);            

    }catch(err){
        console.log(err.messege);
    }
    return (
        <div>
            <div className={model? "model open" : "model"}>
                <img src={tempImg} alt=''/>
                <i className="fas fa-times" onClick={()=>{setmodel(false)}}></i>
            </div>
            <div className="mainsection">
                <MainSection />
            </div>
            
            <div className='sec-two-div'>
                <div className='second-title'>
                    <h2>Top Five Drawing</h2>
                </div>
                {products.map((oneP,index)=>{
                    return(
                        
                        <div className={`top-drow-div-${index}`}  id='div-1'>
                            <CardItem 
                            product = {oneP}
                        /> 
                        
                        </div>
                        
                    )
                    })}
                
            </div> 

            
            
                <div className='third-section-heading'>
                    
                        <h2>
                            See my other drawings
                        </h2>
                    
                </div>
           
            
            
            
            
                
        </div>
        
    )
}

export default Home

/**
 * <div className='containers'>
            <section className='section'>
                
            </section>
            <section className='section'>
                
            </section>
            
            
            
        </div>
 */

        /*
        <Cards 
                    status = {true}
                    url = {`get/${5}`}
                    
                />
                */