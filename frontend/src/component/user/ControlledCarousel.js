//import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlledCarousel.css'

function ControlledCarousel() {
    
    return (
        
            <Carousel className='cu-carousel '>
                <Carousel.Item className='carousels-item '>
                    <img
                        className="cu-img "
                        src="images/51030764_107178077073955_6362496197889884160_n.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <div className='caption-div'>
                            <h1 className='caption1-h1'>Draw Your custom image</h1>
                            <p className=''>you need to drow your own drowing get start hear</p>
                            <button className='caption-button'>Get start.</button> 
                        </div> */}
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousels-item'>
                    <img
                        className="cu-img"
                        src="images/67343534_157684475356648_5254815125705064448_n.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousels-item'>
                    <img
                        className="cu-img "
                        src="images/93257840_251328539325574_3883051748738203648_n.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
  }
  export default ControlledCarousel;