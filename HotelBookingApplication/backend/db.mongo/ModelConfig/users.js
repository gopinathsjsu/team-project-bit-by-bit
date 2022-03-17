import {mongoose} from 'mongoose';
const { model, Schema } = mongoose

const usersSchema = new Schema({
    _id: {type: String, required: true},
    username: {type: String, required: true},
    imageUrl: {type: String},
    dob: {type: Date},
    gender: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    email: {type: String, required: true},
    phoneNo: {type: String},
    password: {type: String, required: true},
    rewards: {type: Number, default: 0},
    isAdmin: {type: Boolean, default: false},
});

export default model('users', usersSchema);

