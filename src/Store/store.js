import { configureStore } from '@reduxjs/toolkit'
import addHotelReducer  from './AddHotel'

export default configureStore({
  reducer: {
    addHotelInfo: addHotelReducer,
  },
})