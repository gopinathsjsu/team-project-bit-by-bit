import {mongoose} from 'mongoose';
const { model, Schema } = mongoose

const roomsSchema = new Schema({
    _id: {type: String, required: true},
    imageUrl: {type: String},
    hotelId: { type: String, ref: 'hotels'},
    type: {type: String, required: true},
    maxNumberOfGuests : {type: Number, required: true},
    basePrice: {type: Number, required: true},
    noOfRooms: {type: Number, default: 0},
});

export default model('rooms', roomsSchema);
