import React, { useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { addHotelActions } from "./Store/AddHotel";
export default function App() {
  const dispatch = useDispatch();
  const hotelsArray = useSelector((state) => state.addHotelInfo.newHotelsArray);
  async function fetchHotels() {
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
      <NavBar />
      <Outlet/>
    </div>
  );
}
