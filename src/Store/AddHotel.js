import { createSlice } from '@reduxjs/toolkit'

export const AddHotelSlice = createSlice({
  name: 'addHotelInfo',
  initialState: {
    newHotelsArray:[],
    hotelName:"",
    location:"",
    liner:"",
    rating:"",
    reviews:0,
    roomsLeft:0,
    price:0,
    wifi:true,
    free_cancellation:true,
    newHotelImage:'',
  },
  reducers: {
    newHotel:  (state,action) => {   
         
      state.location=action.payload.location
      state.hotelName=action.payload.hotelName
      state.liner=action.payload.liner
      state.rating=action.payload.rating
      state.reviews=action.payload.reviews
      state.roomsLeft=action.payload.roomsLeft
      state.price=action.payload.price
      state.wifi=action.payload.wifi
      state.free_cancellation=action.payload.free_cancellation
      state.newHotelImage=action.payload.newHotelImage
      
      }, 
     newHotelsArrayFunction:(state,action)=>{
      console.log(action.payload);
      
      state.newHotelsArray=([...action.payload])
     },
     updateHotelArray:async (state,action)=>{
        
     }
  },
})
export const addHotelActions = AddHotelSlice.actions

export default AddHotelSlice.reducer