import React from 'react'
import Add_hotels from './Add_hotels';
import HotelCard from './HotelCard';
function submitForm(event){
  event.preventDefault();
  console.log(event);
  
}
export default function HotelBooking() {
  return (
    <div>
      <form onSubmit={()=>submitForm(event)} action="submit" method="POST">
        <div className='d-flex'>
        <div className='form-floating'>
        <input id="name" className='form-control' type="text" placeholder='enter hotel name' />
        <label htmlFor="name">enter hotel name</label>
        </div>
        <div className='form-floating'>
        <input id="in-date" className='form-control' type="date" placeholder='' />
        <label htmlFor="name">in-date</label>
        </div>
        <div className='form-floating'>
        <input id="out-date" className='form-control' type="date" placeholder='' />
        <label htmlFor="name">out-date</label>
        </div>
        </div>
        <div className='d-flex'>

        <div className='form-floating'>
        <input id="city" className='form-control' type="text" placeholder='' />
        <label htmlFor="city">city</label>
        </div>
        <div className='form-floating'>
        <input id="number" className='form-control' type="number" placeholder='' />
        <label htmlFor="number">number of people</label>
        </div>
        </div>
    <input type="submit" className='btn-primary' />
      </form>
      <Add_hotels/>
      <HotelCard/>
    </div>
  )
}
