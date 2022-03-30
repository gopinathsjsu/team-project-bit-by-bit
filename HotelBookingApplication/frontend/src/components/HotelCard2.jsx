import React from 'react'
import {NavLink} from "react-router-dom";
import "../styles/HotelCrad2.css";
function HotelCard2({hotel,noOfGuests}) {

  let pageLink = `/hotels/${hotel._id}+${noOfGuests}/rooms`;
  console.log();

  return (
    <div>
        <div class="card">
            <div> <img src={hotel.imageUrl} class="img-responsive image"></img> </div>
            <p class="rating">{hotel.rating}</p>
            <div class="card-body">
            <NavLink to={pageLink} > <h5 class="card-title">{hotel.name}</h5> </NavLink>
                <p class="card-text"><i class="fa fa-map-marker marker"></i> {hotel.city}, {hotel.state}, {hotel.country} - {hotel.zipcode} </p>
                <p class="card-text">
                <i class="fa fa-star star-rating"></i>
                <i class="fa fa-star star-rating"></i>
                <i class="fa fa-star star-rating"></i>
                <i class="fa fa-star star-rating"></i></p>
                {/* <p class="card-text">$ 1,399</p> */}
            </div>
        </div>
    </div>
  )
}

export default HotelCard2