import React from 'react'

export default function Add_hotels() {
  return (
    <div>
        <form action="">
            <div className='d-flex'>              
                <div className='form-floating col-6'>
                    <input className='form-control' id="hotelName" placeholder='enter' type="text" />
                    <label htmlFor="hotelName">Hotel Name</label>
                </div>
                <div className='form-floating col-6'>
                    <input className='form-control' id="hotelLocation" placeholder='enter' type="text" />
                    <label htmlFor="hotelLocation">location</label>
                </div>
            </div>
            <div >              
                <div className='form-floating'>
                    <input className='form-control' id="description" placeholder='enter' type="text" />
                    <label htmlFor="description">One Liner</label>
                </div>
            </div>
            <div className='d-flex'>              
                <div className='form-floating col-4'>
                    <input className='form-control' id="rating" placeholder='enter' type="text" />
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
            <div className='d-flex '>              
                <div className='form-floating col-2'>
                    <input className='form-control' id="price" placeholder='enter' type="number" />
                    <label htmlFor="price">price</label>
                </div>
                <select className='col-3' id="room-options">
                    <option value="wifi">wifi</option>
                    <option value="no-wifi">no wifi</option>
                </select>
                <select className='col-3' id="room-options">
                    <option value="free">free Cancelation</option>
                    <option value="charge">charges applied</option>
                </select>
                <input type="submit" className='btn-primary col-4' />
            </div>
        </form>
    </div>
  )
}

