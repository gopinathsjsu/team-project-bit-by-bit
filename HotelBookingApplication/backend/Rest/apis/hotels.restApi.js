import {
    uuid
} from "uuidv4";


const getHotels = async (req, res) => {
    try {
        let hotelInstance = ModelFactory.getHotelInstance();
        let hotelsList = await hotelInstance.find();
        res.status(200).json(hotelsList);
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in fetching hotels data" });
        return;
    }
};

const hotelSearch = async (req, res) => {
    try {
        const body = req.body;
        console.log("Body is hotel search", body);
        let hotelInstance = ModelFactory.getHotelInstance();
        let roomInstance = ModelFactory.getRoomInstance();
        let bookingInstance = ModelFactory.getBookingInstance();
        body.destination = body.destination ? body.destination : "";
        let hotelPayload = {
            $or: [{
                    city: {
                        "$regex": body.destination,
                        "$options": "i"
                    }
                },
                {
                    state: {
                        "$regex": body.destination,
                        "$options": "i"
                    }
                },
                {
                    zipcode: {
                        "$regex": body.destination,
                        "$options": "i"
                    }
                },
                {
                    country: {
                        "$regex": body.destination,
                        "$options": "i"
                    }
                }
            ]
        }
        if(body.hotelId){
            hotelPayload["_id"] = body.hotelId; 
        }

        let hotelsList = await hotelInstance.find(hotelPayload);
        console.log("first hotels list", hotelsList.length);

        // should do location filter as well & then take hotel ids in the room filter as well.
        if (!Object.keys(body).length && !body.type) {
            res.status(200).send(hotelsList);
        }
        const {
            checkInDate,
            checkOutDate,
            noOfGuests = 1,
            type, 
            noOfRooms = 1
        } = body;
        let roomsList = await roomInstance.find({
            $and: [{
                hotelId: {
                    $in: [...hotelsList.map(hotel => hotel._id)]
                }
            }, {
                maxNumberOfGuests: {
                    $gte: noOfGuests
                },
            }, {
                noOfRooms: {
                    $gte: noOfRooms
                },
            }]
        }).lean();
        console.log("Rooms list", roomsList.length);
        let bookingsList = await bookingInstance.find({
            roomId: {
                $in: [...roomsList.map(room => room._id)]
            }
        }).lean();
        
        if (checkInDate & checkOutDate) {
            bookingsList.map((booking) => {
                if ((checkInDate < parseInt(booking.checkIn) && checkOutDate <= parseInt(booking.checkIn)) || (checkInDate >= parseInt(booking.checkOut))) {} else {
                    roomsList = roomsList.filter(room => room._id != booking.roomId);
                }
            });
            console.log("Rooms list after", roomsList.length);
        }

        if (type === "rooms") {
            res.status(200).send(roomsList);
        } else {
            let hotelsListAfterFilter = hotelsList.filter(hotel => roomsList.find(room => room.hotelId == hotel._id));
            console.log("Hotels list after filter", hotelsListAfterFilter.length);
            res.status(200).send(hotelsListAfterFilter);
        }
    } catch (err) {
        console.log("Error in hotel search", err);
        res.status(400).json({
            msg: "Error in searching hotel/room data"
        });
        return;
    }
}

/*
rooms model - filter with above 3 & then take the unique hotel ids & send those objects
*/

const createHotel = async (req, res) => {
    try {
        const body = req.body;
        body._id = "h-" + uuid();
        let hotelInstance = ModelFactory.getHotelInstance();
        let hotelResult = await hotelInstance.create(body);
        res.status(200).json({"msg": "Hotel created successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in creating hotel" });
        return;
    }
}

const updateHotel = async (req, res) => {
    try {
        const body = req.body;
        let hotelInstance = ModelFactory.getHotelInstance();
        let hotelResult = await hotelInstance.findOneAndUpdate({
            _id: body._id
        }, body, {
            new: true
        });
        res.status(200).json({"msg": "Hotel updated successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in updating hotel" });
        return;
    }
}


const getRoomByRoomId = async (req, res) => {
    try {
        const roomId = req.params.roomId;
        let roomInstance = ModelFactory.getRoomInstance();
        let roomResult = await roomInstance.findOne({
            _id: roomId
        });
        console.log("roomResult", roomResult);
        res.status(200).json(roomResult);
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in fetching room" });
        return;
    }
}

const updateRoom = async (req, res) => {
    try {
        let roomInstance = ModelFactory.getRoomInstance();
        let roomResult = await roomInstance.findOneAndUpdate({
            _id: req.params.roomId
        }, req.body, {
            new: true
        });
        res.status(200).json({"msg": "Room updated successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in updating room" });
    }
}

const deleteRoom = async (req, res) => {
    try {
        let roomInstance = ModelFactory.getRoomInstance();
        let roomResult = await roomInstance.findOneAndDelete({
            _id: req.params.roomId
        });
        res.status(200).json({"msg": "Room deleted successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in deleting room" });
    }
}

const deleteHotel = async (req, res) => {
    try {
        const hotelId = req.params.hotelId;
        let hotelInstance = ModelFactory.getHotelInstance();
        let hotelResult = await hotelInstance.findOneAndDelete({
            _id: hotelId
        });
        let roomInstance = ModelFactory.getRoomInstance();
        let roomResults = await roomInstance.find({
            hotelId: hotelId
        });
        let roomsDeletedResult = await roomInstance.deleteMany({_id: {$in: [...roomResults.map(room => room._id)]}});
        let bookingInstance = ModelFactory.getBookingInstance();
        let bookingResults = await bookingInstance.find({
            hotelId: hotelId
        });
        let bookingsDeletedResult = await bookingInstance.deleteMany({_id: {$in: [...bookingResults.map(booking => booking._id)]}});
        res.status(200).json({"msg": "Hotel deleted successfully"});
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in deleting hotel" });
        return;
    }
}

const getRoomDetails = async (req, res) => {
    try {
        const roomId = req.params.roomId;
        let roomInstance = ModelFactory.getRoomInstance();
        let roomDetails = await roomInstance.findById(roomId);
        res.status(200).json(roomDetails);
    } catch (err) {
        console.log("err ===>", err);
        res.status(400).json({ msg: "Error in fetching room data" });
        return;
    }
};


const hotelRoomSearch = async (req, res) => 
{
    
}


let endpoints = {
    "/hotels/search": [{
        method: "POST",
        callbacks: [hotelSearch], 
    }, ],
    "/hotels/:hotelId/search": [{
        method: "POST",
        callbacks: [hotelRoomSearch], 
    } ],
    "/users/:userId/hotels": [{
        method: "GET",
        callbacks: [getHotels],
    }, {
        method: "POST",
        callbacks: [createHotel], 
    } ],
    "/users/:userId/hotels/:hotelId": [{
        method: "PUT",
        callbacks: [updateHotel], 
    }, {
        method: "DELETE",
        callbacks: [deleteHotel], 
    }],
    "/users/:userId/hotels/:hotelId/rooms/:roomId": [{
        method: "PUT",
        callbacks: [updateRoom], 
    }, {
        method: "GET",
        callbacks: [getRoomByRoomId], 
    },{
        method: "DELETE",
        callbacks: [deleteRoom], 
    }],
    "/room/:roomId": [{
        method: "GET",
        callbacks: [getRoomDetails], 
    }]
};

export {
    endpoints
};