import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap"
import {Avatar, ButtonBase, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material"
import "../style/profileStyle.css"
import userAvatar from "../images/avatar.jpg"
export const ProfileScreen = () =>{

    

    return(
        <Container className="container">  
                <div className="formWrapper">
                    <div className="headingTxt">User Profile</div>
                   
                    <Row className="picWrapper">    
                         <div className="dataWrapper">
                             <Avatar alt="Dinushi de silva" src={userAvatar}  sx={{ width: 150, height: 150 }}/>
                            <div className="displayData">
                                <div className="UserName">
                                    Dinushi de silva
                                </div>
                                <div className="otherText">
                                    Sri Lanka
                                </div>
                                <div className="email">
                                    bhashini@gmail.com
                                </div>
                            </div>
                        </div>
                        <Button className="btn-changeImage">Change Image</Button>
                    </Row>

                    <Row className="profileDataWrapper">    
                        <div className="profiledataLeft">
                            <p>First Name </p>
                            <p>Last Name </p>
                            <p>E- mail </p>
                            <p>Country </p>
                            <p>Gender</p> 
                        </div>
                        <div className="profiledataLeft">
                            <p> : </p>
                            <p> : </p>
                            <p> : </p>
                            <p> : </p>
                            <p> : </p>
                        </div>
                        <div className="profiledataLeft">
                            <p>Bashini</p>
                            <p>Wijesinghe</p>
                            <p>bashini@gmail.com</p>
                            <p>Sri Lanka</p>
                            <p>Female</p>    
                        </div>   
                    </Row>
                     <Row className="profileDataWrapper">    
                           <Button className="btn">Change password</Button>
                           <Button className="btn">Change details</Button>
                           <Button className="btn green">Download user details report</Button> 
                           <Button className="btn red">Disable rofile</Button>
                    </Row>
                    
                   
                </div>
        </Container>
    )
}