import {useEffect, useState} from 'react'
import {NavLink, useParams} from "react-router-dom";
import axios from 'axios';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import moment from "moment";

const AdminRoom = () => {
    const [roomData, setRoomData] = useState([]);
    const { hotelId } = useParams();
    const [deletedRoomFlag, setDeletedRoomFlag] = useState(false);

    const deleteRoom = async (roomId) => {
        try {
            const result = await axios.delete(`/users/u-712bb376-9312-4e57-a564-ff8ec6eca3f8/hotels/${hotelId}/rooms/${roomId}`);
            setDeletedRoomFlag(!deletedRoomFlag);
        } catch (error) {
            
        }
    }

    useEffect(async () => {
      let result = await axios.post('/hotels/search' , {type: "rooms", hotelId: hotelId});
      setRoomData(result?.data);
      console.log("Room Information ===>", roomData);
    }, [deletedRoomFlag]);

    

    const updateRoom = async (hotelId) => {
        try {
            const result = await axios.update(`/hotel/${hotelId}`, {});
        } catch (error) {
            
        }
    }


  return <>
    <section class="h-100 gradient-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style={{borderRadius: "10px"}}>
          <div class="card-header px-4 py-5">
            <center><h5 class="text-muted mb-0">Rooms Information </h5></center>
          </div>
          <div class="card-body p-4">
            <div class="card shadow-0 border mb-4">
              {console.log("Info ===>", roomData)}
            {roomData.map((room, index) => {
                console.log("Printing room ===>", room);
                let hotelPath = "/admin/hotels"+hotelId, roomPath = "/admin/hotels/"+hotelId+"/rooms/"+room._id;
                return <>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3">
                          <img src="https://cache.marriott.com/content/dam/marriott-renditions/MCOGV/mcogv-guestroom-0059-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=480px:*" class="img-fluid" alt="Phone" />
                        </div>
                        <div class="col-xl-3 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mp-100"><b>Room Type </b> {room?.type}</p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mp-100"><b>Price Per Day </b>{room?.basePrice}</p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mp-100"><b>No of Rooms Available</b> {room?.noOfRooms}</p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mp-100"><b>Max No of Guests</b> {room?.maxNumberOfGuests}</p>
                        </div>
                        </div>
                        <div class="d-flex flex-row" style={{float: "right"}}>
                      
                        <NavLink to={roomPath}><a href="" class="ml-1 book btn btn-secondary btn-style">Edit Room</a></NavLink>
                      <NavLink to={hotelPath}><a href="" class="ml-1 book btn btn-secondary btn-style" onClick={()=> deleteRoom(room._id)}>Delete room</a></NavLink>
                     </div>
                       
                    </div>
                  {roomData.length !== index+1 ? <hr class="mb-4" style={{ backgroundColor: "#e0e0e0", "opacity": 1 }} /> : null}
                  </>
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</>
}

export default AdminRoom;