import React from 'react'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='about-main-div'>
            <div className='about-img-div'>
                <img src='images/90330181_235467764244985_9027846648591548416_n.jpg' alt=''/>
            </div>
            <div className='about-description-div'>
                <h1 className='about-h1'>About Me</h1>
                <div className='wrapper'>
                    <div className='static-txt'>I'm a </div>
                    <ul className='dynamic-texts'>
                        <li><span>Artist....</span></li>
                        <li><span>Designer.</span></li>
                    </ul>
                    
                </div>
                <div className='about-p-div'>
                    <p className='about-p'>
                We are aware that currently the client-side custom validation styles and tooltips are 
                not accessible, since they are not exposed to assistive technologies. While we work on 
                a solution, we’d recommend either using the server-side option or the default browser
                 validation method.
                </p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe
