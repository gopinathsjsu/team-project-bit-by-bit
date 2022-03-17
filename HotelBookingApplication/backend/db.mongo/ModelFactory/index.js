import userInstance from '../ModelConfig/users.js'
import hotelInstance from '../ModelConfig/hotels.js'
import roomInstance from '../ModelConfig/rooms.js'
import bookingInstance from '../ModelConfig/bookings.js'

let models = {
    getUserInstance : () => userInstance,
    getHotelInstance : () => hotelInstance,
    getRoomInstance : () => roomInstance,
    getBookingInstance : () => bookingInstance,
}
export default models