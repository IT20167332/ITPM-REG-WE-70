import React from 'react'
import {Link} from 'react-router-dom'

function BusListContainer(probes) {

//const fromDate = probes.FromTime
//const Ftime = new Date(fromDate).toLocaleTimeString('en',{ timeStyle: 'short', hour12: false, timeZone: 'UTC' });;

const fromDate2 = new Date(probes.FromTime);
const Fdate = `${fromDate2.getDate()}/${fromDate2.getMonth()+1}/${fromDate2.getFullYear()}`
//console.log(Ftime + " : "+Fdate)  

// const toDate = probes.ToTime
// const Ttime = new Date(toDate).toLocaleTimeString('en',{ timeStyle: 'short', hour12: false, timeZone: 'UTC' });;

// const toDate2 = new Date(toDate);
// const Tdate = `${toDate2.getDate()}/${toDate2.getMonth()+1}/${toDate2.getFullYear()}`
  return (
    <div className='row border border-4 rounded m-2 details'>
            <div className='col-md-2 my-2'>
            {/* <img src={require('../../mainBackground.jpg').default} className='imgTag' alt='myName is'/> */}
            </div>
            <div className='col-md-3'>
                <div className='row my-1'>
                    No : {probes.busNO}
                </div>
                <div className='row my-1'>
                    Route : {probes.RouteNo}
                </div>    
            </div>
            <div className='col-md-3'>
                <div className='row my-1'>
                    From : {probes.From}
                </div>
                <div className='row my-1'>
                    To : {probes.To}
                </div>
            </div>
            <div className='col-md-2'>
                <div className='row my-1'>
                    From : {Fdate}
                </div>
                <div className='row my-1'>
                    To : {probes.ToTime}
                </div>
            </div>
            <div className='col-sm-2 mt-4'>
                <Link to={`/booking/${probes.id}`}>
                    <button type="button" className="btn btn-warning">View seat</button>
                </Link>
                
            </div>
        </div>
  )
}

export default BusListContainer