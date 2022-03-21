import {mongoose} from 'mongoose';
const { model, Schema } = mongoose

const hotelsSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    imageUrl: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipcode: {type: String, required: true},
    country: {type: String, required: true},
    rating:{type: Number },
    starRating:{type: Number}
});

export default model('hotels', hotelsSchema);
