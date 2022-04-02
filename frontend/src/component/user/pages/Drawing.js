import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../Cards';
import './Drawing.css'
import ScrollToTop from "react-scroll-to-top";

function Drawing() {
    //const[url,setUrl] = useState("getg");

    const[category,setCategory] = useState("ALL");
    const[isTiggled, setTiggled] = useState(false);
    

    // function cardset(category) {
    //     return <Cards 
    //             status = {false}
    //             url = {`getg/${category}`}
    //             />;
    // }
    function categoryclick(category){
        console.log(category);
        setCategory(category);
        setTiggled(!isTiggled);
    }
    const [categorys, setcategorys] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8989/api/category/getcategory`)
        .then(res => setcategorys(res.data) )
        .catch(error => console.log(error));
    },[isTiggled]);


    
    return (
        
            <div >
                <ScrollToTop smooth />
                <div className='titlebar'>
                    <h1 className='subtitle'>Drawing</h1>
                </div>
                <div className='bordder-c'>
                    <div className='button-bar-div'>
                    {  
                        categorys.map((item, index)=>{
                            
                            return(
                                <div className='button-bar-inner' key={index}>
                                    <li href='#' className={`btn button-bar-btn `} onClick={()=>{
                                        categoryclick(item.category);
                                        
                                    }}>{item.category}</li>
                                </div>
                            )
                        })
                        
                    }
                    </div>
                </div>
                
              
               {isTiggled && <Cards status = {false} url = {`getg/${category}`}/>  }
               {!isTiggled && <Cards status = {false} url = {`getg/${category}`}/>  }
                
            </div>
            
            
    
    )
}

export default Drawing


/*
<Cards 
                status = {false}
                url = 'getg'

            />

,
        {
            category: "category 2"

        },
        {
            category: "cat"

        },
        {
            category: "category 4"

        },
        {
            category: "category 5"

        },
        {
            category: "category 6"

        },
        {
            category: "cat 1"

        },
        {
            category: "category 2"

        },
        {
            category: "category 3"

        },
        {
            category: "cat 4"

        },
        {
            category: "category 5"

        },
        {
            category: "category 6"

        }

        */