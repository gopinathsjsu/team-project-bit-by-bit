import {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import axios from 'axios';
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector } from 'react-redux'

const Profile = () => {
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
           <center> <h5 class="text-muted mb-0">Profile Information </h5></center>
          </div>
          <div class="card-body p-9">       
            {/* <div class="card shadow-0 border mb-4">
            <div class="card-body">
            <div class="row">
                  <div class="col-md-4">
                    <img src={bookingInfo?.hotelInfo?.imageUrl} 
                      class="img-fluid"/>
                  </div>
                  
                  
                  
                  
                </div>
                {/* <hr class="mb-4" style={{backgroundColor : "#e0e0e0", "opacity": 1}}/> */}
                
              {/*</div>   
            </div> */}



            <div class="d-flex justify-content-between pt-2">
              <p class="fw-bold mb-0">User Name</p>
              <p class="text-muted mb-0"><span class="fw-bold me-4"></span> {userData?.username}</p>
            </div>

            

            <div class="d-flex justify-content-between">
              <p class="text-muted mb-0">Loyalty Points Earned : </p>
              <p class="text-muted mb-0"><span class="fw-bold me-4"></span> {userData?.rewards }</p>
            </div>

           
          </div>
     
          <div>
            {/* <hr/> */}
          </div>
        </div>
      </div>
    </div>
</section>
</>
  
}

export default Profile;