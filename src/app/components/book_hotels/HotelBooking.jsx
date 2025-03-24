import React, { useEffect } from 'react'
import Add_hotels from './Add_hotels';
import HotelCard from './HotelCard';
import axios from 'axios';
import HotelsSplitIntoEach from './hotelsSplitIntoEach';
import { useSelector,useDispatch } from 'react-redux';
import { addHotelActions } from '../../../Store/AddHotel';
function submitForm(event){
  event.preventDefault();
  console.log(event);
  
}
export default function HotelBooking() {
  const hotelsArray=useSelector((state)=>state.addHotelInfo.newHotelsArray)
  const dispatch=useDispatch();
  async function fetchHotels() {
    console.log("fetching");
    
      try {
        await axios.get("http://localhost:1216/getHotels").then((response) => {
          dispatch(addHotelActions.newHotelsArrayFunction(response.data));
        });
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    }
    useEffect(() => {
      fetchHotels();
    }, []);
  
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
      <Add_hotels fetchHotels={fetchHotels}/>
      
      <HotelsSplitIntoEach fetchHotels={fetchHotels} hotelsArray={hotelsArray}/>
    </div>
  )
}
