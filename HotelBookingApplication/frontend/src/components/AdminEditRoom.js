import React, {useEffect,useContext,useState} from "react";
import {useNavigate, useParams, NavLink} from 'react-router-dom';
import axios from "axios"



function AdminEditRoom() {

    const navigate = useNavigate();
    const [roomData, setRoomData] = useState([]);
    const { hotelId, roomId } = useParams();
    const [updatedRoomFlag, setUpdatedRoomFlag] = useState(false);
    const [type, setType] = useState(1);
    const [basePrice, setBasePrice] = useState(1);
    const [noOfRooms, setNoOfRooms] = useState(1);
    const [maxNumberOfGuests, setMaxNumberOfGuests] = useState(1);
   

    useEffect(async () => {
        console.log("hotelId ===>", hotelId);
        console.log("roomId ===>", roomId);
      let result = await axios.get(`/users/u-712bb376-9312-4e57-a564-ff8ec6eca3f8/hotels/${hotelId}/rooms/${roomId}`);
      setRoomData(result?.data);
      console.log("Room Information ===>", roomData);
    }, [updatedRoomFlag]);

    

    const updateRoom = async () => {
        try {
            console.log("In update room");
            const result = await axios.put(`/users/u-712bb376-9312-4e57-a564-ff8ec6eca3f8/hotels/${hotelId}/rooms/${roomId}`, {basePrice, noOfRooms, maxNumberOfGuests, type});
            console.log("updated room ===>", result);
        } catch (error) {
            
        }
    }
    let roomPath = "/admin/hotels/"+hotelId;

    return (
        
        <section class="w3l-availability-form" id="booking">
        <div class="w3l-availability-form-main py-5">
            <div class="container pt-lg-3 pb-lg-5">
                <div class="forms-top">
                    <div class="form-right">
                        <div class="form-inner-cont">
                            <center><h3 class="title-small">Room Information</h3></center>
                            {/* <form action="search-results.html" method="post" class="signin-form"> */}
                            {/* <form method="post" class="signin-form"> */}
                                <div class="row book-form">
                                <div class="form-input col-md-4 col-sm-6 mt-3">
                                  <label>Room Type</label>
                                  <input type="text" name="" placeholder="Room Type" required=""  onChange={(e)=> setType(e.target.value)}></input> 
                                </div>
                                <div class="form-input col-md-4 col-sm-6 mt-3">
                                          <label>Price Per Day</label>
                                          <input type="number" name="" placeholder="Price Per Day" required="" defaultValue={1} onChange={(e)=> setBasePrice(e.target.value)}/>  
                                    </div>
                                    <div class="form-input col-md-4 col-sm-6 mt-3">
                                          <label>No of Rooms Available</label>
                                          <input type="number" name="" placeholder="Rooms Available" required="" defaultValue={1} onChange={(e)=> setNoOfRooms(e.target.value)}/>  
                                    </div>
                                    <div class="form-input col-md-4 col-sm-6 mt-3">
                                          <label>Maximum No of Guests</label>
                                          <input type="number" name="" placeholder="Maximum No of Guests" required="" defaultValue={1} onChange={(e)=> setMaxNumberOfGuests(e.target.value)}/>  
                                    </div>
                                    <div class="bottom-btn col align-self-center">
                                        {/* <label>Search </label> */}<br/>
                                        {/* <NavLink to="/hotels"><button class="btn btn-style btn-primary w-100 px-2 " >Update Room</button></NavLink> */}
                                        <NavLink to={roomPath}><a href="" class="ml-1 book btn btn-secondary btn-style w-100 px-2 " onClick={()=> updateRoom()}>Update Room</a></NavLink>

                                    </div>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



        // <div className="container my-5">
        //     <div className="row">
        //         <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
        //             <div>
        //                 <h1 className="display-4">Room Information</h1>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-6 col-12 my-auto">
        //                     <img src="" className="img-fluid" alt="selected room" />
        //                 </div>
        //                 <div className="col-md-6 col-12 my-auto">
        //                     {/* <h1>Rooms Details</h1> */}
        //                     <table className="table">
        //                         <thead className="thead-light">
        //                             <tr>
        //                                 <th>Room Type</th>
        //                                 <td>ABC</td>
        //                             </tr>
        //                         </thead>
        //                     </table>
        //                 </div>
        //             </div>  
        //         </div>
        //     </div>
        // </div> 
        )
}

export default AdminEditRoom;