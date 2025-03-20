import React from 'react'
import "./HotelCard.css"
export default function HotelCard() {
  return (
    <div className="card">
    <img src="hotel.jpg"    />
    <div className="card-content">
        <h2 className="card-title">Mountain Chalet</h2>
        <p className="card-location">Central Darjeeling, Darjeeling - <a href="#">View on map</a></p>
        <div className="card-property">
            <span>Free WiFi</span>
            <span>Book without a credit card</span>
        </div>
    </div>
    <div className="card-footer">
        <span className="card-rating">8.6 Excellent - 21 reviews</span>
        <div>
            <span className="only-left">ONLY 1 LEFT</span>
            <div className="card-price">Rs. 2,363 <small>+ FREE CANCELLATION</small></div>
        </div>
    </div>
</div>
  )
}
