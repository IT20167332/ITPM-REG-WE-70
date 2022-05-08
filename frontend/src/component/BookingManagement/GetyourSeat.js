import React, { useState,useEffect  } from 'react'
import './GetyourSeat.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function GetyourSeat() {
    const [busData, setbusData] = useState([]);
    const [loading, setLoading] = useState(false);
    const ids = "";

    useEffect(async() => {         
        axios.get(`http://localhost:8989/api/timetable/get_select_time_by_id/${id}`)
        .then(res => setbusData(res.data))
        .catch(error => console.log(error));
    },[loading]);
    console.log(busData);
    if(busData.length == 0){
        console.log("its null");
    }

    const { id } = useParams();
 
    console.log("seatcount reset");
    const [addButton, setaddButton] = useState(true);
    const [Svalue, setSvalue] = useState(1);
    const [resetDsplay, setresetDsplay] = useState(true);
    const [seatcount,setseatcount] = useState([]);
    const [temparray] = useState([]);
 
// const [bookedseat, setbookedseat] = useState([])

// useEffect(() => {
//    axios.get(`http://localhost:8989/api/timetable/get_select_time_by_id/625b977115c1794418eae371`)
//    .then(res => setbusData(res.data))
//    .catch((err)=>{
//         console.log("width geting data")
//    })  
//  },[])

    console.log("busData here 22");
    
    var arr = busData.seatCountArray;
    console.log(arr);
    
    try{
        if(busData.length != 0){
            arr.map((one,index)=>{
                seatcount.push(one);
            })
        }else{
            
        }
    }catch(err){
        console.log("can not do")
    }

    useEffect(()=>{
        displaySeat()
        calTotal()
        
    },[resetDsplay]);

    useEffect(()=>{
        setresetDsplay(!resetDsplay);
        if(!checkAvailable(Svalue)){
            setaddButton(true)
        }else{
            setaddButton(false)
        }
    },[Svalue]);


//  console.log("busData here")
//  console.log(busData)


 //setseatCount(busData.seatCountArray)
 //setbookedseat(busData.seatCountArray)

 
 const fromDate = busData.fromTime
 const Ftime = new Date(fromDate).toLocaleTimeString('en',{ timeStyle: 'short', hour12: false, timeZone: 'UTC' });;
 
 const fromDate2 = new Date(fromDate);
 const Fdate = `${fromDate2.getDate()}/${fromDate2.getMonth()+1}/${fromDate2.getFullYear()}`
 //console.log(Ftime + " : "+Fdate)  

 const toDate = busData.toTime
 const Ttime = new Date(toDate).toLocaleTimeString('en',{ timeStyle: 'short', hour12: false, timeZone: 'UTC' });;
 
 const toDate2 = new Date(toDate);
 const Tdate = `${toDate2.getDate()}/${toDate2.getMonth()+1}/${toDate2.getFullYear()}`
 //console.log(Ttime + " : "+Tdate) 
 var total = 0;
 

    function calTotal(){
        let content = ``
        total = temparray.length * 150
        for(let i=0; i < temparray.length; i++){
            content += `<div class='row my-3 ms-3 fs-5'>
            <div class='col-md-6'>${temparray[i]}</div>
            <div class='col-md-6'>${150}</div>
            </div>`
        }
        content += `<hr/><div class='row  ms-3 fs-5'>
        <div class='col-md-5'>Total</div>
        <div class='col-md-6'>RS.${total}/-</div>
        </div><hr/>`
        document.getElementById("wrapper3").innerHTML = content
    }

    function addButtonOnClick(){
        //console.log("I am work!")
        seatcount.push(Svalue)
        temparray.push(Svalue)
        setresetDsplay(!resetDsplay)
        //console.log(seatcount)
    }
 
    function checkAvailable(i){
        const seatL  = seatcount.length
        for(let x=1 ; x<= seatL ; x++){
            if(i == seatcount[x]){
                return false;
            }
        }
        return true;
    }

    function displaySeat(){
        let content = ``;
        for(let i=0; i < 52; i++){
        const item = seatcount[i]

        content += `<div class='row'>`

        for(let x=0; x < 4; x++){
            let temp = i+x
            if(x==1 || x==3){
                if(checkAvailable(temp+1) ){
                    content += `
                    <div class='col-md-1 setmargin'>
                    <div class='seat'>${temp+1}</div>
                    </div>
                    `  
                }else{
                    content += `
                    <div class='col-md-1 setmargin'>
                    <div class='seat bookSeat'>${temp+1}</div>
                    </div>
                    `
                }
            }else{
            if(checkAvailable(temp+1) ){
                content += `
                <div class='col-md-1 setmargin2'>
                <div class='seat'>${temp+1}</div>
                </div>
                `  
            }else{
                content += `
                <div class='col-md-1 setmargin2'>
                <div class='seat bookSeat'>${temp+1}</div>
                </div>
                `
            }
            }

            }
            content += `</div>`
            i = i+3; 

        }
        //return content;
        document.getElementById("wrapper2").innerHTML = content

    }

    function onSubmit(e){
        e.preventDefault();
        console.log("onSubmitWork");
        axios.put(`http://localhost:8989/api/timetable/set_array`,{id:id , arr:temparray})
        .then((res)=>{
            setBooking();
        })
        .catch((err)=>{
            console.log(err)
            window.location.replace(`/services`);
        }) 
    }

    function setBooking(){
        const busId = busData.BusId._id;
        const SeatNo = temparray;
        const travelDate = busData.fromTime;
        const passengerId = "u0001";
        const paymentValidity = false;
        const route = busData._id;
        const obj = {
            busId,
            SeatNo,
            travelDate,
            passengerId,
            paymentValidity
        }
        axios.post(`http://localhost:8989/api/booking/add_booking`,obj)
        .then((res)=>{
            window.location.replace(`/usersingin/${total}`);
        })
        .catch((err)=>{
            console.log(err)
            window.location.replace(`/services`);
        })
    }
 
 
  return (
      
  <>
      <div className='container border my-4'>
        <h1 className='my-2'>Get Your Seat</h1>
      </div>
      <div className='row text-dark '>
          <div className='col-md-3 ms-4  border border-dark bg-light'>
            <div id='wrapper2'></div>
          </div>


            <div className='col-md-6 ms-2 text-dark'>
              <div className='col border bg-light border-dark mb-3 p-3'>
                {/* <h2>NO : {busData.BusId.regNo}</h2> */}
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md fs-3'>
                                <strong >From :</strong> {busData.from} <strong className='strong'>At - {Ftime}</strong>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col fs-3'>
                                <strong >To :</strong> {busData.to} <strong className='strong'>At - {Ttime}</strong>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 fs-4'>Selected Date : <strong >{Fdate}</strong></div>
                    <div className='col-md-5 fs-4'>Price :  <strong >Rs. {busData.price}/-</strong></div>
                </div>
                
                <div className='row mt-4'>
                    <div className='col-md-5'></div>
                
                    <div className='col-md-4'>
                        <label for="floatingInput">Select seat number</label>
                        <div>
                        <div className="form-floating col-md-5 ms-3 ">
                            <input type="number" class="form-control fs-3" placeholder="name@example.com" max={52} min={0} value={Svalue}
                            onChange={(e)=>{
                                setSvalue(e.target.value)
                            }}/>
                            
                            </div>  
                        </div>
                        
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-md-5'></div>
                    <div className='col-md-3'>
                        <button className='btn btn-warning ms-4' disabled={addButton} onClick={()=>{addButtonOnClick()}}>ADD</button>
                    </div>

                    
                </div>
              </div>
              <div className='col border bg-light border-dark'>
                
              </div>
            </div>
          <div className='col-md-2 ms-3  border border-dark bg-light'>
            <div className='row my-3 ms-3 fs-5'>
                <div className='col-md-6'>Seat No</div>
                <div className='col-md-6'>Price</div>
            </div>
            <form onSubmit={onSubmit}>
            <div id='wrapper3'></div>
                <div className='row my-3 ms-3 fs-5'>
                    <div className='col-md-2'></div>
                    <div className='col-md-6'><button type='submit' className='btn btn-warning'>Pay Now</button></div>
                </div>
            </form>
          </div>
      </div>
      

      </>
    
  )
}

export default GetyourSeat