const mongoose=require('mongoose')
const hotelSchema = new mongoose.Schema({
    hotelName: { type: String, required: true,unique:true },
    location: { type: String, required: true },
    liner: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviews: { type: Number, required: true, default: 0 },
    roomsLeft: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true,default:0 },
    wifi: { type: String, required: true },
    free_cancellation: { type: String, required: true },
    newHotelImage: { type: String, required: true }
})
const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;