import React, {useEffect,useContext,useState} from "react";
import HotelCard from './HotelCard';
import HotelCard2 from "./HotelCard2";
import axiosInstance from "../utils/axios"
import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { ThemeProvider } from "@mui/material";
import moment from "moment";
function Hotels() {


    useEffect(() => {
        dispatch({
            type:"ClearSearchData"
          })
      });

      
    const [hotelList, setHotelList ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const [invalidsearch, setInvalidsearch ] = useState(true);
    const [form, setForm] = useState({
        destination: "",
        checkInDate:"",
        checkOutDate:"",
        noOfGuests: 1,
        noOfRooms: 1,
        checkIn: "",
        checkOut: "",
      })

    const handleChange = (e) => 
    {
        
    const value = e.target.value;
    console.log("name ",e.target.name, " value ", value);
    
    if(e.target.name === "checkInDate"){
        console.log("checkInDate ", moment(moment(value).format('MM-DD-YYYY')).valueOf());
        setCheckIn(moment(moment(value).format('MM-DD-YYYY')).valueOf());
        form.checkIn = moment(moment(value).format('MM-DD-YYYY')).valueOf();
    }else if(e.target.name === "checkOutDate"){
        console.log("checkOutDate ", moment(moment(value).format('MM-DD-YYYY')).valueOf());
        setCheckOut(moment(moment(value).format('MM-DD-YYYY')).valueOf());
        form.checkOut = moment(moment(value).format('MM-DD-YYYY')).valueOf();
    }
    setForm({
        ...form,
        // [e.target.name]: (e.target.name === "checkInDate" || e.target.name === "checkOutDate") ? moment(moment(e.target.value).format('MM-DD-YYYY')).valueOf() : value,
        // value,
        [e.target.name]:  value,
    })
    //console.log(form);
    }
    const dispatch = useDispatch()
    const handleSearch = async () => 
    {
        
            try
            {
                const response = await axiosInstance().post(`/hotels/search`,form, {headers:{'Authorization':localStorage.getItem("token")}});
                //console.log("API"+JSON.stringify(response));
                if(response && response.data){
                console.log(response.data);
                setHotelList(response.data);
                setLoading(true);
                dispatch({
                    type:"SearchUpdate",
                    payload: form
                })
                    console.log("items in auth"+JSON.stringify(hotelList));
                }else{
                console.log("Error Getting Response from Favorite API")
                }
            }catch(e){
                console.log(e);
            }
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };


    const hotelDiv = hotelList.map((item, index) => 
    {
        return (
            //  <HotelCard hotel = {item}/>
            <div class="col-md-4">
                <HotelCard2 hotel = {item} noOfGuests = {form.noOfGuests} />
            </div>
            
        );
    });
   
  return (
    <div>
        {/* <!-- //w3l-header --> */}
        <section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">
                    <h2>Hotels</h2>
                    <p><a href="index.html">Home</a> &nbsp; / &nbsp; Hotels</p>
                </div>
            </div>
        </section>

        <section class="w3l-availability-form" id="booking">
      <div class="w3l-availability-form-main">
          <div class="container pb-lg-5">
              <div class="forms-top">
                  <div class="form-right">
                      <div class="form-inner-cont">
                          <h3 class="title-small">Check Availability</h3>
                          {/* <form action="search-results.html" method="post" class="signin-form"> */}
                          {/* <form method="post" class="signin-form"> */}
                              <div class="row book-form">
                              <div class="form-input col-md-4 col-sm-6 mt-3">
                                <label>Destination</label>
                                <input type="text" name="" placeholder="Destination" name='destination' required=""value={form.destination} onChange={handleChange}></input> 
                              </div>
                                  <div class="form-input col-md-4 col-sm-6 mt-3">
                                      <label>Check-in Date</label>
                                      <input type="date" name="" placeholder="Date" required="" min={disablePastDate()}  name='checkInDate' value={form.checkInDate} onChange={handleChange}></input>
                                  </div>
                                  <div class="form-input col-md-4 col-sm-6 mt-3">
                                      <label>Check-out Date</label>
                                      <input type="date" name="" placeholder="Date"  required="" min={form.checkInDate ? form.checkInDate : disablePastDate()} name='checkOutDate' value={form.checkOutDate} onChange={handleChange}></input>
                                  </div>
                                  <div class="form-input col-md-4 col-sm-6 mt-3">
                                      <label>Rooms</label>
                                      {/* <select class="selectpicker">
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                          <option>04</option>
                                      </select> */}
                                        <input type="text" name="" placeholder="Rooms" name='noOfRooms' required="" value={form.noOfRooms} onChange={handleChange}></input> 
                                  </div>
                                  <div class="form-input col-md-4 col-sm-6 mt-3">
                                      <label>Guests</label>
                                      {/* <select class="selectpicker">
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                          <option>04</option>
                                      </select> */}
                                        <input type="text" name="" placeholder="Guests" name='noOfGuests' required="" value={form.noOfGuests} onChange={handleChange}></input> 
                                  </div>
                                  {/* <div class="form-input col-md-4 col-sm-6 mt-3">
                                      <label>Children</label>
                                      <select class="selectpicker">
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                          <option>04</option>
                                      </select>
  
                                  </div> */}
                                  {/* <div class="form-input col-md-4 col-sm-6 mt-3">
                                      <label>Price </label>
                                      <input type="text" name="" placeholder="Max Price ($)" required />
                                  </div> */}
                                  <div class="bottom-btn col align-self-center">
                                      {/* <label>Search </label> */}<br/>
                                      <NavLink to="/hotels"><button class="btn btn-style btn-primary w-50 px-2 " onClick={handleSearch} disabled={!form.checkInDate|| !form.checkOutDate}>Search</button></NavLink>
                                      {!invalidsearch && <div>Please fill all the details</div> }
                                  </div>
                              </div>
                          {/* </form> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  {hotelList && hotelList.length === 0 && loading && <center><div class='alert alert-danger w-50' role='alert' >No hotels found</div> </center>}


        <div className="best-rooms w3l-blog py-5">
        <div className="container py-lg-5 py-sm-4">
            {/* <div className="ban-content-inf row">
                {hotelDiv}
            </div> */}
            <div class="container d-flex justify-content-center">
                <div class="row">
                    {hotelDiv}
                </div>
            </div>
            {/*<nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-5 mb-0">
                    <li className="page-item disabled">
                        <a className="page-link page-prev" href="#previous" tabindex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link page-number" href="#1">1</a></li>
                    <li className="page-item active"><a className="page-link page-number" href="#2">2</a></li>
                    <li className="page-item"><a className="page-link page-number" href="#3">3</a></li>
                    <li className="page-item"><a className="page-link page-next" href="#next">→</a></li>
                </ul>
        </nav>*/}
        </div>
    </div>
    </div>
  )
}

export default Hotels