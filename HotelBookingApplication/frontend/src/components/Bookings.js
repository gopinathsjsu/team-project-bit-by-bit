import {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from 'axios';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import moment from "moment";
import { useSelector } from 'react-redux';

const Bookings = () => {
    // const userName = "Anna";
    const [bookingsData, setBookingsData] = useState([]);
    const [render, setRender] = useState(false);
    const userData = useSelector((state) => state.user.user);

    
    const cancelBooking = async (bookingId) => {
      try {
           const result = await axios.delete(`/users/${userData?.userId}/bookings/${bookingId}`);
           setRender(!render);
      } catch (error) {
          
      }
  }

    // const cancelBooking = async (bookingId) => {
    //     try {
    //         const result = await axios.delete(`/users//bookings/${bookingId}`);
    //     } catch (error) {
            
    //     }
    // }s

    useEffect(async () => {
      let result = await axios.get(`/users/${userData.userId}/bookings`);
      setBookingsData(result?.data);
      console.log("Booking ===>", bookingsData);
    }, [render]);
    

    const updateBooking = async (bookingId) => {
        try {
            const result = await axios.delete(`/booking/${bookingId}`, {});
        } catch (error) {
            
        }
    }



  return <>
    <section class="h-100 gradient-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style={{borderRadius: "10px"}}>
          <div class="card-header px-4 py-5">
            {bookingsData && bookingsData.length > 0 && <h5 class="text-muted mb-0">Here are your bookings <span style={{color: "#a8729a"}}>{userData.username}</span>!</h5>}
            {bookingsData && bookingsData.length == 0 && <h5 class="text-muted mb-0"><span style={{color: "#a8729a"}}>{userData.username}</span>, I haven't found any bookings! </h5>}
            {/* <p class="text-muted mb-0">Your rewards points <span style={{color: "#f57b51"}}>{userData.rewards}</span></p> */}
          </div>
          {bookingsData.length > 0 &&
          <div class="card-body p-4">
            <div class="card shadow-0 border mb-4">
              {console.log("Info ===>", bookingsData)}
            {bookingsData.map((booking, index) => {
                console.log("Printing booking ===>", booking);
                var editBookingPath = "/editbooking/"+booking._id
                var bookingPath = "/booking/"+booking._id
                return <><NavLink to={bookingPath}>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3">
                          <img src={booking?.hotelInfo?.imageUrl} class="img-fluid" alt="Phone" />
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
                      {/* <hr class="mb-4" style={{backgroundColor : "#e0e0e0", "opacity": 1}}/> */}
                      <div class="d-flex flex-row">
                      <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Booking ID</b> #{booking._id?.split("-")[5]}</p>
                        </div>
                        
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"> <b>Room Type &nbsp;</b> {booking.type}</p>
                        </div>
                        <div class="col-md-2 text-center d-flex  justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Check In &nbsp;</b> {moment(moment(booking?.checkIn)).format("MM/DD/YYYY")}</p>
                          {/* <p class="text-muted mb-0 small"><b>Check In &nbsp;</b> {moment(moment(new Date(booking?.checkIn))).format("MM/DD/YY")}</p> */}
                        </div>
                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small"><b>Check In &nbsp;</b> {moment(moment(booking?.checkOut)).format("MM/DD/YYYY")}</p>
                          {/* <p class="text-muted mb-0 small"><b>Check Out </b>{moment(moment(new Date(booking?.checkOut))).format("MM/DD/YYYY")}</p> */}
                        </div>
                        {/* <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Amount Paid</b> {"$"}{booking.price}</p>
                        </div> */}
                        <NavLink to = {editBookingPath} ><a href="" class="ml-1 book btn btn-secondary btn-style">Edit Booking</a></NavLink>
                        <NavLink to="/mybookings"><a href="" class="ml-1 book btn btn-secondary btn-style" onClick={()=> cancelBooking(booking._id)}>Cancel Booking</a></NavLink>
                      </div>
                    </div>
                  </NavLink>
                  {bookingsData.length !== index+1 ? <hr class="mb-4" style={{ backgroundColor: "#e0e0e0", "opacity": 1 }} /> : null}
                  </>
            })}
              {/* <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <img src="https://cache.marriott.com/marriottassets/marriott/DALMU/dalmu-pool-deck-7898-hor-feat.jpg?resize=750:450&output-quality=1"
                      class="img-fluid" alt="Phone"/>
                  </div>
                  <div class="col-xl-3 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mp-100"><b>Marriott Dallas Uptown</b></p>
                  </div>
                  <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><LocationCityIcon/> Dallas, Texas, 75201, United States</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><b>Booking ID</b> #19191919</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"> <b>Room Type &nbsp;</b> Double Rooms</p>
                  </div>
                </div>
                {/* <hr class="mb-4" style={{backgroundColor : "#e0e0e0", "opacity": 1}}/> */}
                {/*<div class = "d-flex flex-row">
                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><b>Booking Name </b>Anna</p>
                  </div>
                <div class="col-md-2 text-center d-flex  justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><b>Check In Date</b> 05th May, 2022</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><b>Check Out Date</b> 06th May, 2022</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><b>Amount Paid</b> $250</p>
                  </div>
                  <NavLink to="/"><a href="" class="ml-3 book btn btn-secondary btn-style">Edit Booking</a></NavLink>
                  <NavLink to="/"><a href="" class="ml-3 book btn btn-secondary btn-style">Cancel Booking</a></NavLink>
                  </div>
              </div>               */}
            </div>
          </div> }
        </div>
      </div>
    </div>
</section>
</>
}

export default Bookings;