import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap"
import {Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material"
import "../style/loginStyle.css"

export const RegisterScreen = () =>{

    

    return(
        <Container className="container"> 
            <div >
                <form className="formWrapper">
                    <div className="headingTxt">Sign up</div>
                   
                    <Row>    
                        <TextField id="fName" label="Frist Name" variant="standard" fullWidth/>
                    </Row>

                    <Row>    
                        <TextField id="lName" label="Last Name" variant="standard" fullWidth/>
                    </Row>
                    
                    <Row>    
                        <TextField id="mail" label="E - mail" variant="standard" fullWidth/>
                    </Row>

                    <Row className="bottomLayer">    
                       <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Row>

                    <Row>    
                        <TextField id="pass" label="Password" variant="standard" fullWidth/>
                    </Row>

                    <Row>    
                        <TextField id="conPass" label="Confirm Password" variant="standard" fullWidth/>
                    </Row>

                    <Row>
                         <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to terms and conditions" />
                    </Row>
                    <Row>
                        <Button className="btn-primary">Register</Button>
                    </Row>
                    <Row className="bottomLayer">
                        <Col>
                            <div>Already a User ? <a className="linkWrapper">Sign in</a></div> 
                        </Col>
                        
                    </Row>
                </form>
            </div>
        </Container>
    )
}