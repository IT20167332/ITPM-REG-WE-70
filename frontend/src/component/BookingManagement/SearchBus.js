import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function SearchBus() {

    const [fromInput, setfromInput] = useState("")
    const [toInput, settoInput] = useState("")

    function onSubmit(e){
        e.preventDefault();
        window.location.replace(`/services/${fromInput}/${toInput}`);
    }  


  return (
      <form onSubmit={onSubmit}>
          <div className='container-sm border border-primary my-5 bg-light text-dark p-3'>
                <div className='row fs-5'>
                    <h1 className='my-3'>The smart way to find your bus ticket</h1>
                    <div className='col-md-4'>
                    <label for="exampleFormControlInput1" class="form-label fs-5"><strong>From</strong></label>
                        <div class="input-group mb-3">
                            <label class="input-group-text" htmlfor="inputGroupSelect01">From</label>
                            <select class="form-select" id="inputGroupSelect01" onChange={(e)=>{setfromInput(e.target.value)}}>
                                <option selected>Choose...</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Kegalle">Kegalle</option>
                                <option value="Mathara">Mathara</option>
                                <option value="Kurunegala">Kurunegala</option>
                                <option value="Jaffna">Jaffna</option>
                                <option value="Warakapola">Warakapola</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-4 '>
                    <label for="exampleFormControlInput1" class="form-label fs-5"><strong>To</strong></label>
                        <div class="input-group mb-3">
                            <label class="input-group-text" htmlfor="inputGroupSelect02">To</label>
                            <select class="form-select" id="inputGroupSelect02" onChange={(e)=>{settoInput(e.target.value)}}>
                                <option selected>Choose...</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Kegalle">Kegalle</option>
                                <option value="Mathara">Mathara</option>
                                <option value="Kurunegala">Kurunegala</option>
                                <option value="Jaffna">Jaffna</option>
                                <option value="Warakapola">Warakapola</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label fs-5"><strong>Journey Date</strong></label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Journey Date"/>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center my-3'>
                    <div className='col-md-5'></div>
                    <div className='col-md-4'>
                        
                    <button type="submit" className="btn btn-warning mx-auto fs-4">Find Buses</button>
                        
                    </div>    
                </div>
            </div>

      </form>
    

  )
}

export default SearchBus