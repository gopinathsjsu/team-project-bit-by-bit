import {
    uuid
} from "uuidv4";
import _ from 'lodash';


const getBookings = async (req, res) => {
    try {
        const userId = req.params.userId;
        let bookingInstance = ModelFactory.getBookingInstance();
        let hotelInstance = ModelFactory.getHotelInstance();
        // let bookingsList = await bookingInstance.find();
        let bookingsList;
        if(userId === "u-admin"){
            bookingsList = await bookingInstance.find().lean();
        }else{
            bookingsList = await bookingInstance.find({createdBy : userId}).lean();
        }
        let hotelList = await hotelInstance.find().lean();
        let hotelHashMap = _.keyBy(hotelList, '_id'); 
        _.map(bookingsList, (booking) => {
            hotelHashMap[booking.hotelId].location = hotelHashMap[booking.hotelId].city + ", " + hotelHashMap[booking.hotelId].state + ", " + hotelHashMap[booking.hotelId].zipcode + ", " +  hotelHashMap[booking.hotelId].country;
            booking.hotelInfo = hotelHashMap[booking.hotelId];
            
            return booking;
        });
        console.log("bookingsList ===>", bookingsList);
        res.status(200).json(bookingsList);
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in fetching bookings data" });
        return;
    }
};

const getBookingsByBookingId = async (req, res) => {
    try {
        const userId = req.params.userId;
        let bookingInstance = ModelFactory.getBookingInstance();
        let hotelInstance = ModelFactory.getHotelInstance();
        // let bookingsList = await bookingInstance.find();
        let bookingsList = await bookingInstance.find({createdBy : userId, _id: req.params.bookingId}).lean();
        let hotelList = await hotelInstance.find().lean();
        let hotelHashMap = _.keyBy(hotelList, '_id'); 
        _.map(bookingsList, (booking) => {
            hotelHashMap[booking.hotelId].location = hotelHashMap[booking.hotelId].city + ", " + hotelHashMap[booking.hotelId].state + ", " + hotelHashMap[booking.hotelId].zipcode + ", " +  hotelHashMap[booking.hotelId].country;
            booking.hotelInfo = hotelHashMap[booking.hotelId];
            
            return booking;
        });
        console.log("Booking by id bookingsList ===>", bookingsList);
        res.status(200).json(bookingsList);
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in fetching bookings data" });
        return;
    }
};

const createBooking = async (req, res) => {
    try {
        const body = req.body;
        console.log("before req body of booking",body);

        body.noOfRooms = parseInt(body.noOfRooms);
        body.maxNumberOfGuests = parseInt(body.noOfGuests);
        delete body.noOfGuests;
        console.log("req body of booking",body);
        body._id = "b-" + uuid();  
        let bookingInstance = ModelFactory.getBookingInstance();
        let bookingResult = await bookingInstance.create(body);
        let roomInstance = ModelFactory.getRoomInstance();
        let roomResults = await roomInstance.update(
            { _id: body.roomId },
            { $inc: { noOfRooms: -body.noOfRooms } }
        );
        let userInstance = ModelFactory.getUserInstance();
        let results = await userInstance.update(
            { _id: body.createdBy },
            { $inc: { rewards: req.body?.price * 0.2 } }
        );
        res.status(200).json({"msg": "Booking created successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in creating booking" });
        return;
    }
};

const updateBookings = async (req, res) => {
    try {
        const body = req.body;
        const bookingId = req.params.bookingId;
        let bookingInstance = ModelFactory.getBookingInstance();  
        let results = await bookingInstance.update(
            { _id: bookingId },
            {
                 $set: body    
            }
        );
        res.status(200).json({"msg": "Booking updated successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in updating bookings data" });
        return;
    }
};

const deleteBookings = async(req, res) => {
    try {
        const bookingId = req.params.bookingId;
        let bookingInstance = ModelFactory.getBookingInstance();  
        let result = await bookingInstance.deleteOne({_id : bookingId});
        res.status(200).json({"msg": "Booking deleted successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in deleting booking record" });
        return;
    }
};


let endpoints = {
    "/users/:userId/bookings": [{
            method: "GET",
            callbacks: [getBookings],
        },
        {
            method: "POST",
            callbacks: [createBooking],
        },
    ],
    "/users/:userId/bookings/:bookingId": [{
            method: "GET",
            callbacks: [getBookingsByBookingId],
        },  
        {
            method: "PUT",
            callbacks: [updateBookings],
        },
        {
            method: "DELETE",
            callbacks: [deleteBookings],
        },
    ]
};

export { endpoints };