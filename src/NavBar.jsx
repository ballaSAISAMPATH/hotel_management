import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
export default function NavBar() {
  return (
    <div className="nav-bar d-flex m-2">
      <h1>hotel  booking</h1>
      <div className="text-center p-3">
          <Link to="/" className='mx-5'>book hotels </Link>
          <Link to="/wishlist"className='mx-5' >wishlist </Link>
          <Link to="/bookings"className='mx-5'>previous orders </Link>
      </div>
    </div>
  )
}
