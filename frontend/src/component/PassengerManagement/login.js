import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap"
import {Checkbox, FormControlLabel, TextField} from "@mui/material"
import "../style/loginStyle.css"
import {Link} from 'react-router-dom'

export const LoginScreen = () =>{
    return(
        <Container className="loginContainer"> 
            <div >
                <form className="formWrapper">
                    <div className="headingTxt">Sign in</div>
                   
                    <Row className="inputWrapper">    
                        <TextField id="userName" label="User name" variant="standard" fullWidth/>
                    </Row>
                    <Row>    
                        <TextField id="password" label="Password" variant="standard" fullWidth/>
                    </Row> 
                    <Row>
                         <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </Row>
                    <Row>
                        <Link to='/ProfileScreen'><Button className="btn-primary">Login</Button></Link>
                    </Row>
                    <Row className="bottomLayer">
                        <Col>
                            <div>New User ?<Link to='/RegisterScreen'><a className="linkWrapper">Sign up</a></Link> </div> 
                        </Col>
                        <Col>
                            <a>Forgot your password ?</a> 
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    )
}