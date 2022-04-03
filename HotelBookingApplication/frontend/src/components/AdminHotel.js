import {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from 'axios';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import moment from "moment";

const AdminHotel = () => {
    const [hotelData, setHotelData] = useState([]);
    const [deletedHotelFlag, setDeletedHotelFlag] = useState(false);

    const deleteHotel = async (hotelId) => {
        try {
            const result = await axios.delete(`/users/u-712bb376-9312-4e57-a564-ff8ec6eca3f8/hotels/${hotelId}`);
            setDeletedHotelFlag(!deletedHotelFlag);
        } catch (error) {
            
        }
    }

    useEffect(async () => {
      let result = await axios.get(`/users/u-712bb376-9312-4e57-a564-ff8ec6eca3f8/hotels/`);
      setHotelData(result?.data);
      console.log("Hotel Information ===>", hotelData);
    }, [deletedHotelFlag]);

    

    const updateHotel = async (hotelId) => {
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
            <center><h5 class="text-muted mb-0">Hotels Information </h5></center>
          </div>
          <div class="card-body p-4">
            <div class="card shadow-0 border mb-4">
              {console.log("Info ===>", hotelData)}
            {hotelData.map((hotel, index) => {
                console.log("Printing hotel ===>", hotel);
                var hotelPath = "/admin/hotels/"+hotel._id
                return <>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3">
                          <img src={hotel?.imageUrl} class="img-fluid" alt="Phone" />
                        </div>
                        <div class="col-xl-3 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mp-100"><b>{hotel?.name}</b></p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><LocationCityIcon /> {hotel?.city + ", " + hotel?.state + ", " + hotel?.zipcode + ", " + hotel?.country}</p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">

                        <NavLink to={hotelPath}><a href="" class="ml-1 book btn btn-secondary btn-style">Edit hotel</a></NavLink>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                      <NavLink to="/admin/hotels"><a href="" class="ml-1 book btn btn-secondary btn-style" onClick={()=> deleteHotel(hotel._id)}>Delete hotel</a></NavLink>
                      </div>
                      </div>
                    </div>
                  {hotelData.length !== index+1 ? <hr class="mb-4" style={{ backgroundColor: "#e0e0e0", "opacity": 1 }} /> : null}
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

export default AdminHotel;