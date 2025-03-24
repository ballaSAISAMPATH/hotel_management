import React from 'react'
import { addHotelActions } from '../../../Store/AddHotel';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
export default function Add_hotels({fetchHotels}) {
    const addHotelInfo=useSelector((state)=>state.addHotelInfo.hotelName)
    const newHotelImage=useSelector((state)=>state.addHotelInfo.newHotelImage)
    const dispatch=useDispatch();
     async function addHotelFunction(e){
        e.preventDefault();
            const arrayOfHotels={
            hotelName:e.target[0].value,
            location:e.target[1].value,
            rating: parseFloat(e.target[2].value) || 0,
            reviews: parseInt(e.target[3].value, 10) || 0,
            roomsLeft: parseInt(e.target[4].value, 10) || 0,
            liner:e.target[5].value,
            price: parseFloat(e.target[6].value) || 0.0,
            wifi:e.target[7].value,
            free_cancellation:e.target[8].value,  
            newHotelImage:e.target.querySelector("input[type='file']").files[0].name,  
            
        }
        dispatch(addHotelActions.newHotel(arrayOfHotels))
        try{
            await axios.post("http://localhost:1216/newHotel",arrayOfHotels).then(()=>{
                fetchHotels();
            })
        }
        catch{
            console.log("axios failed");
            
        }
    }
  return (
    <div>
        <br />
        Add new hotels here
        <form onSubmit={addHotelFunction} action="" className='col-6 '>
            <div className='d-flex'>              
                <div className='form-floating col-5'>
                    <input className='form-control' id="hotelName" placeholder='enter' type="text" />
                    <label htmlFor="hotelName">Hotel Name</label>
                </div>
                <div className='form-floating col-7'>
                    <input className='form-control' id="hotelLocation" placeholder='enter' type="text" />
                    <label htmlFor="hotelLocation">location</label>
                </div>
            </div>
            <div className='d-flex'>              
                <div className='form-floating col-4'>
                    <input className='form-control' id="rating" placeholder='enter' type="number" />
                    <label htmlFor="rating">rating</label>
                </div>
                <div className='form-floating col-4'>
                    <input className='form-control' id="reviews" placeholder='enter' type="number" />
                    <label htmlFor="reviews">number of reviews</label>
                </div>
                <div className='form-floating col-4'>
                    <input className='form-control' id="rooms_left" placeholder='enter' type="number" />
                    <label htmlFor="rooms_left">rooms left</label>
                </div>
            </div>
            <div >              
                <div className='form-floating'>
                    <input className='form-control' id="description" placeholder='enter' type="text" />
                    <label htmlFor="description">One Liner</label>
                </div>
            </div>
            <div className='d-flex '>              
                <div className='form-floating col-4'>
                    <input className='form-control' id="price" placeholder='enter' type="number" />
                    <label htmlFor="price">price</label>
                </div>
                <select className='col-4' id="room-options">
                    <option value="wifi">wifi</option>
                    <option value="no-wifi">no wifi</option>
                </select>
                <select className='col-4' id="room-options">
                    <option value="free cancellation">free Cancellation</option>
                    <option value="charges applied for cancellation">charges applied</option>
                </select>
            </div>
            <div className="d-flex col-12">
            <div className='form-floating col-8'>
                    <input className='form-control' id="price" placeholder='enter' type="file" />
                    <label htmlFor="price">hotel image</label>
                </div>
                <input type="submit" className='btn-primary col-4' />
            </div>
        </form>
    </div>
  )
}

