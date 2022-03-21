import {mongoose} from 'mongoose';
const { model, Schema } = mongoose


const bookingsSchema = new Schema({
    _id: {type: String, required: true},
    name: { type: String, ref: 'users'},
    createdBy: { type: String, ref: 'users'},
    createdOn: {type:Date, default: Date.now},
    amenities: {type: Array},
    location: {type: String},
    checkIn: {type: String},
    checkOut: {type: String},
    noOfGuests: {type: Number},
    roomId: {type: String, ref: 'rooms'},
    type: {type: String, ref: 'rooms'},
    price: {type: Number},
    hotelId: {type: String, ref: 'hotels'},
    noOfRooms: {type: Number, default: 1}
});

export default model('bookings', bookingsSchema);
