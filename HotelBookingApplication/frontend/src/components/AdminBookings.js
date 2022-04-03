import {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from 'axios';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import moment from "moment";

const AdminBookings = () => {
    const userName = "Anna";
    const [bookingsData, setBookingsData] = useState([]);

    const cancelBooking = async (bookingId) => {
        try {
            const result = await axios.delete(`/users/u-712bb376-9312-4e57-a564-ff8ec6eca3f8/bookings/${bookingId}`);
        } catch (error) {
            
        }
    }

    useEffect(async () => {
      let result = await axios.get(`/users/u-admin/bookings`);
      setBookingsData(result?.data);
      console.log("Booking ===>", bookingsData);
    }, []);
    

  return <>
    <section class="h-100 gradient-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style={{borderRadius: "10px"}}>
          <div class="card-header px-4 py-5">
           <center><h5 class="text-muted mb-0">Bookings Information</h5></center> 
          </div>
          <div class="card-body p-4">
            <div class="card shadow-0 border mb-4">
              {console.log("Info ===>", bookingsData)}
            {bookingsData.map((booking, index) => {
                console.log("Printing booking ===>", booking);
                var bookingPath = "/booking/"+booking._id
                return <>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3">
                          <img src={booking?.hotelInfo?.imageUrl} class="img-fluid" alt="Image" />
                        </div>
                        <div class="col-xl-3 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mp-100"><b>{booking?.hotelInfo?.name}</b></p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><LocationCityIcon /> {booking?.hotelInfo?.location}</p>
                        </div>
                        {booking?.amenities?.length > 0 ?
                        <div class="col-md-3">
                          <p class="text-muted mb-0 small"><b>Amenities </b></p>
                          {booking?.amenities?.map((amenity, index) => {
                          return <p class="text-muted mb-0 small">{amenity}</p>
                          })}
                          
                        </div>
                        : null}
                        
                      </div>
                      <div class="d-flex flex-row">
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Booking ID</b> #{booking._id?.split("-")[5]}</p>
                        </div>
                        
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"> <b>Room Type &nbsp;</b> {booking.type}</p>
                        </div>
                        <div class="col-md-2 text-center d-flex  justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Check In &nbsp;</b> {moment(new Date(booking.checkIn)).format("MM/DD/YY")}</p>
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Check Out </b>{moment(new Date(booking.checkOut)).format("MM/DD/YY")}</p>
                        </div>
                        <NavLink to="/bookings"><a href="" class="ml-1 book btn btn-secondary btn-style" onClick={()=> cancelBooking(booking._id)}>Cancel Booking</a></NavLink>
                      </div>
                    </div>
                 
                  {bookingsData.length !== index+1 ? <hr class="mb-4" style={{ backgroundColor: "#e0e0e0", "opacity": 1 }} /> : null}
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

export default AdminBookings;