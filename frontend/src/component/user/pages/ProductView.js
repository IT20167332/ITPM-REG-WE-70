import React,{useContext} from 'react'
import {UserContext} from "../UserContext";
import './ProductView.css'


function ProductView() {
    const {User } = useContext(UserContext);

    //const [buyButton, setbuyButton] = useState(false)
    console.log("productview")
    console.table(User)
    const tagbar =User.tag

    // function getCookie(cname) {
    //     let name = cname + "="
    //     let decodedCookie = decodeURIComponent(document.cookie)
    //     let ca = decodedCookie.split(';')
    //     for(let i = 0; i <ca.length; i++) {
    //       let c = ca[i];
    //       while (c.charAt(0) === ' ') {
    //         c = c.substring(1);
    //       }
    //       if (c.indexOf(name) === 0) {
    //         console.log("cookes return!")
    //         return c.substring(name.length, c.length)
            
    //       }
    //     }
    //     return "";
    // }

    //const userID = getCookie("_id")
    // function onClickBuyNow(){
    //     if(userID == null){
    //         console.log("user id null")
    //         window.location.replace('/userlogin')
            
    //     }
        
    //     window.location.replace("/productdetails/setpayment")
    // }

        
    
    return (
        
        <div className='pw-container'>
            <div className='pw-container-left'>
                <div className='pw-img-bordder'>
                    <img className="pw-img" alt='' src={`http://localhost:8989/api/${User.productImage}` }/>
                </div>
            </div>
            <div className='pw-container-right'>
                <div className='pw-container-right-top'>
                    <h2>{User.title}</h2>
                    <div className='pw-tagbar'>
                    {
                        tagbar.map((onetag,index)=>(
                            <div>
                                {onetag}
                            </div>
                        ))
                    }
                    </div>
                    
                    <p>
                    {User.description}
                    </p>

                </div>
                <div className='pw-container-right-bottom'>
                    <p>Size: {User.size}</p>
                    <p>Media: {User.drowingType}</p>
                    <p>Canvas type: {User.board} </p>

                    
                </div>
                
                <h5 className='pw-price'>Price: Rs. {User.price}/-</h5>
                {/* <Link to="/productdetails/payment"> */}
                    {/* <button type="button" className="btn btn-warning pw-checkout" onClick={()=>{onClickBuyNow()}}>Buy Now</button>     */}
              
            </div>
        </div>
    )
}

export default ProductView
