import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { increment,decrement } from './app/counterSlice'

import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
  const count = useSelector((state)=>state.counter.value)
  const counter = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <NavBar/>
      <Outlet/>
      
    </div>
  )
}