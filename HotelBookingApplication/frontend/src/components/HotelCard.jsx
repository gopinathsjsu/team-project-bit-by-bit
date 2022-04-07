import React from 'react'
import { NavLink } from 'react-router-dom';

function HotelCard({room}) 
{

    let pageLink = `/newbooking/${room._id}`;
    console.log(pageLink);

  return (
        <div class="maghny-gd-1 col-lg-4 col-md-6">
            <div class="maghny-grid">
                <figure class="effect-lily">
                    <img class="img-fluid" src={room.imageUrl} alt=""></img>
                    <figcaption>
                        <div>
                        <h4 class="top-text"> {room.name} </h4> 
                            {/* <p>Book for 20$ </p> */}
                        </div>
                    </figcaption>
                </figure>
                <div class="room-info">
                <h3 class="room-title">{room.type}</h3> 
                    <ul class="mb-3">
                        <li><span class="fa fa-users"></span> {room.maxNumberOfGuests}</li>
                        {/* <li><span class="fa fa-bed"></span> 15sqft</li> */}
                    </ul>
                    <p>{room.type} can accomodate {room.maxNumberOfGuests} guests luxuriously</p>
                    <NavLink to={pageLink} > <a href="" class="btn mt-sm-4 mt-3" style={{color: "white", backgroundColor: "#d63447"}}>Book Now</a> </NavLink>
                    <br/>
                    <div class="room-info-bottom">
                    <br/>
                        <ul class="room-amenities">
                            <li><a href=""><span class="fa fa-bed" title="Beds"></span></a></li>
                            <li><a href=""><span class="fa fa-car" title="Car Parking"></span></a></li>
                            <li><a href=""><span class="fa fa-bath" title="Private Bathroom"></span></a></li>
                            <li><a href=""><span class="fa fa-television" title="Television"></span></a></li>
                            <li><a href=""><span class="fa fa-cutlery" title="All meals"></span></a></li>    
                        </ul>
                        {/* <a href="room-single.html" class="btn view">Full Info →</a> */}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HotelCard