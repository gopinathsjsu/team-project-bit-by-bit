import {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import axios from 'axios';
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector } from 'react-redux'

const Booking = () => {
  const { id } = useParams();
  const [bookingInfo, setBookingInfo] = useState({});
  const userData = useSelector((state) => state.user.user);

  const userName = userData?.username;

  useEffect(async () => {
    let result = await axios.get(`/users/${userData?.userId}/bookings/${id}`);
    console.log("Booking ===>", result);
    setBookingInfo(result.data[0]);
    console.log("BookingResult ===>", bookingInfo);
  }, []);

  return <>
    <section class="h-100 gradient-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style={{borderRadius: "10px"}}>
          <div class="card-header px-4 py-5">
            <h5 class="text-muted mb-0">Here is your booking information <span style={{color: "#a8729a"}}>{userName}</span>!</h5>
          </div>
          <div class="card-body p-9">       
            <div class="card shadow-0 border mb-4">
            <div class="card-body">
            <div class="row">
                  <div class="col-md-4">
                    <img src={bookingInfo?.hotelInfo?.imageUrl} 
                      class="img-fluid"/>
                  </div>
                  <div class="col-xl-3 text-center d-flex justify-content-right align-items-center">
                    <p class="text-muted mp-100"><b>{bookingInfo?.hotelInfo?.name}</b></p>
                  </div>
                  <div class="col-xl-2 text-center d-flex justify-content-right align-items-center">
                    <p class="text-muted mb-0 small"><LocationCityIcon/> {bookingInfo?.hotelInfo?.location}</p>
                  </div>
                  { bookingInfo?.amenities?.length > 0 ?
                      <div class="col-md-3">
                      <p class="text-muted mb-0 small"><b>Amenities </b></p>
                      {bookingInfo?.amenities?.map((amenity, index) => {
                      return <p class="text-muted mb-0 small">{amenity}</p>
                      })} 
                      </div> : null
                  }
                  <div class="col-md-2 text-center d-flex justify-content-right align-items-center">
                    <p class="text-muted mb-0 small"> <b>Room Type &nbsp;</b> {bookingInfo?.type}</p>
                  </div>
                  <div class="col-md-2 text-center d-flex  justify-content-right align-items-center">
                    {/* <p class="text-muted mb-0 small"><b>Check In &nbsp;&nbsp;&nbsp;</b>{moment.unix(bookingInfo?.checkIn).format("MM/DD/YY")}</p> */}
                    {/* <p class="text-muted mb-0 small"><b>Check In &nbsp;&nbsp;&nbsp;</b>{moment(moment(new Date(bookingInfo?.checkIn))).format("MM/DD/YY")}</p> */}
                    <p class="text-muted mb-0 small"><b>Check In &nbsp;</b> {moment(moment(bookingInfo?.checkIn)).format("MM/DD/YYYY")}</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-right align-items-center">
                    {/* <p class="text-muted mb-0 small"><b>Check Out </b>{moment.unix(bookingInfo?.checkOut).format("MM/DD/YY")}</p> */}
                    {/* <p class="text-muted mb-0 small"><b>Check Out </b>{moment(moment(new Date(bookingInfo?.checkOut))).format("MM/DD/YY")}</p> */}
                    <p class="text-muted mb-0 small"><b>Check In &nbsp;</b> {moment(moment(bookingInfo?.checkOut)).format("MM/DD/YYYY")}</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small"><b>Points Earned</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {bookingInfo?.price * 0.02}</p>
                  </div>
                  
                </div>
                {/* <hr class="mb-4" style={{backgroundColor : "#e0e0e0", "opacity": 1}}/> */}
                
              </div>   
            </div>



            <div class="d-flex justify-content-between pt-2">
              <p class="fw-bold mb-0">Invoice Details</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> {"$"}{bookingInfo?.price}</p>
            </div>

            <div class="d-flex justify-content-between pt-2">
              <p class="text-muted mb-0">Booking ID : {bookingInfo?._id}</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p>
            </div>

            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Invoice Date : {moment(moment(bookingInfo?.createdOn)).format("MM/DD/YYYY")}</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">GST 18%</span> {bookingInfo?.price * 0.18}</p>
            </div>

            <div class="d-flex justify-content-between mb-5">
              <p class="text-muted mb-0">Points Earned : {bookingInfo?.price * 0.02}</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
            </div>
          </div>
          <div class="card-footer border-0 px-4 py-5"
            style={{backgroundColor: "#a8729a", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>
            <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
              paid: <span class="h2 mb-0 ms-2">{"$"}{bookingInfo?.price}</span></h5>
          </div>
          <div>
            <hr/>
          </div>
        </div>
      </div>
    </div>
</section>
</>
  
}

export default Booking