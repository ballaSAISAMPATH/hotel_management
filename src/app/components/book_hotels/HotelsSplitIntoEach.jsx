import React from 'react'
import { useSelector } from 'react-redux'
import HotelCard from './HotelCard'
export default function HotelsSplitIntoEach({hotelsArray,fetchHotels}) {
    const hotelsList = useSelector((state) => state.addHotelInfo.newHotelsArray)
    
    return(
        <div>

        {hotelsArray.map((individual,index)=>{     
            return <HotelCard fetchHotels={fetchHotels} key={index} individual={individual} />
        })}
        </div>
    )
  
}
