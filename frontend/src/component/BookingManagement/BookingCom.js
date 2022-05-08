import React from 'react'
import './BookingCom.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingCom(params) {
  console.log(params.data);
  function onDelete(id){
    axios.delete(`http://localhost:8989/api/booking/delete_booking/${id}`)
    .then(res => {
        console.log(res)
        notify2("Delete Done!")
    })
  }
  const notify2 = (messege) => {
    toast.info(`${messege}`,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    
    })
};
  return (
      <>
    <div className='container border my-4 p-3'>
        <div className='row'>
            <div className='col'>Booking Date : {params.data.bookingDate}</div>
            <div className='col'>seate NO : {params.data.SeatNo}</div>
            <div className='col'></div>
            <div className='col'><button type="button" className="btn btn-danger" onClick={()=>{onDelete(params.data._id)}}>Delete</button></div>
        </div>
    </div>
    <ToastContainer />
    </>
  )
}
export default BookingCom;