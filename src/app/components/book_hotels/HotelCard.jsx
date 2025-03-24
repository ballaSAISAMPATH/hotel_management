import React from 'react'
import "./HotelCard.css"
import axios from 'axios'
export default function HotelCard({individual,fetchHotels}) {
    
    async function deleteHotel(){
         console.log(individual._id);
        try{
            await axios.post("http://localhost:1216/deleteHotel",{_id:individual._id}).then(()=>{
                
                fetchHotels();
            })
        }
        catch{
            console.log("axios failed");
            
        }
    }
  return (
    <div className="card ">
    <img src={individual.newHotelImage}/>
    <div className="card-content">
        <h2 className="card-title">{individual.hotelName}</h2>
        <p className="card-location">{individual.location} - <a href="#">View on map</a></p>
        <div className="card-property">
            <span >{individual.wifi}</span>
            <span >{individual.liner}</span>
        </div>
    </div>
    <div className="card-footer">
        <span className="card-rating">{individual.rating} Excellent - {individual.reviews} reviews</span>
        <div>
            <span className="only-left">ONLY {individual.roomsLeft} LEFT</span>
            <div className="card-price">Rs. {individual.price} <small>+{individual.free_cancellation}</small></div>
        </div>
    </div>
    <div className='d-flex'>

    <button className="btn-warning">edit</button>
    <button onClick={()=>{deleteHotel()}} className="btn-danger">delete</button>
    <button className="btn-secondary">wishlist</button>
    </div>
</div>
  )
}
