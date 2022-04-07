import React, {useEffect,useContext,useState} from "react";
import {useNavigate, useParams, NavLink} from 'react-router-dom';
import axiosInstance from "../utils/axios"
import { useSelector } from 'react-redux'



function RoomOverview() {

    const navigate = useNavigate();
    const [dyprice, setDyprice] = useState("normal");
    const [success, setSuccess] = useState(false);
    const [amen, setAmen] = useState([]);
    const [totalprice, setTotalprice]=useState();
    const {id} = useParams();
    const [roomData, setRoomData] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false);
    useEffect(() => {
        getRoomDetails();
   },[]);


   
 var holList = ['01-01', '01-17', '09-05', '11-11', '11-24']; 
 var hol = false;
 function countWeekendDays( start, end )
 {
    let count = 0;
    for(; start < end; start.setDate(start.getDate() + 1))
    {
        let month=start.getMonth() + 1;
        month = month.toString();
        if(month.length !=2)
        {
            month = '0'+month;
        } 
        const str = month+"-"+start.getDate();
       
        if(holList.includes(str))
        {
            hol = true;
        }
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        var dayName = days[start.getDay()];
        console.log(dayName);
        if(dayName == "Sunday" || dayName == "Saturday")
        {
            count++;
        }

    }

    return count;
 }

    const userData = useSelector((state) => state.user.user);
    const searchData = useSelector((state) => state.search.searchData);
    const checkInD = new Date(searchData.checkInDate);
    const checkOutD = new Date(searchData.checkOutDate);
    var checkInMonth = checkInD.getMonth() + 1;
    var checkOutMonth = checkOutD.getMonth() + 1;
    var Difference_In_Time = checkOutD.getTime() - checkInD.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    var weekEndDays = countWeekendDays(checkInD, checkOutD);
    //console.log("asaas"+weekEndDays);

    const getTotalPrice = (basePrice)=>
    {
        if(checkInMonth == 12 || checkOutMonth == 12 
        || checkInMonth == 5  || checkOutMonth == 5
        || checkInMonth == 6  || checkOutMonth == 6
        || checkInMonth == 7  || checkOutMonth == 7)
        {
            setDyprice("seasonal");
            setTotalprice(basePrice * 1.75 * Difference_In_Days);
        }
        else if(hol == true)
        {
            setDyprice("holiday");
            setTotalprice(basePrice * 1.5 * Difference_In_Days);
        }
        else if(weekEndDays > 0)
        {
            
            setDyprice("weekend");
            var weekendBasePrice = basePrice * 1.25;
            setTotalprice((weekendBasePrice * weekEndDays) + (basePrice * (Difference_In_Days - weekEndDays)));
        }else{
            setDyprice("normal");
            setTotalprice(basePrice * Difference_In_Days);
        }

    }
    const removeArrayElement = (val)=>
    {
        let a = amen;
        var myIndex = a.indexOf(val);
        if (myIndex !== -1) {
            a.splice(myIndex, 1);
        }

        setAmen(a);
        
    }

    const addArrayElement = (val)=>
    {
        let a = amen;
        a.push(val);
        setAmen(a);
        
    }

    const handleCheck = (e)=>
    {
        if(e.target.name=="DCB")
        {
            if (e.target.checked) 
            {
                setTotalprice(totalprice + 50);
                addArrayElement('Daily Continental Breakfast');
            } 
            else 
            {
                setTotalprice(totalprice - 50);
                removeArrayElement('Daily Continental Breakfast');
            }
        }
        else if(e.target.name=="AFR")
        {
            if (e.target.checked) 
            {
                
                setTotalprice(totalprice + 20);
                addArrayElement('Access to fitness room');
            } 
            else 
            {
                setTotalprice(totalprice - 20);
                removeArrayElement('Access to fitness room');
            }
        }else if(e.target.name=="ASJ")
        {
            if (e.target.checked) 
            {
                
                setTotalprice(totalprice + 25);
                addArrayElement('Access to Pool/Jacuzzi');
                
            } 
            else 
            {
                setTotalprice(totalprice - 25);
                removeArrayElement('Access to Pool/Jacuzzi');
            }
        }else if(e.target.name=="DP")
        {
            if (e.target.checked) 
            {
                setTotalprice(totalprice + 20);
                addArrayElement('Daily Parking');
            } 
            else 
            {
                setTotalprice(totalprice - 20);
                removeArrayElement('Daily Parking');
            }
        } else if(e.target.name=="BLD")
        {
            if (e.target.checked) 
            {
                setTotalprice(totalprice + 100);
                addArrayElement('All meals included');
            } 
            else 
            {
                setTotalprice(totalprice - 100);
                removeArrayElement('All meals included');
            }
        }
    }

    const handleSubmit = async ()=>
    {

        const token = localStorage.getItem("token");
        console.log("token check",token);
        if(!token){
            console.log("asasasasas");
            navigate("/login");
        }else
        {
        let body = 
        {
            name:userData.username,
            createdBy:userData.userId,
            amenities:amen,
            checkIn:searchData.checkInDate,
            checkOut:searchData.checkOutDate,
            noOfGuests:searchData.noOfPersons,
            roomId:roomData._id,
            type:roomData.type,
            price:totalprice,
            hotelId:roomData.hotelId,
            noOfRooms:searchData.noOfRooms

        }

        try
        {
            console.log(amen);
            const response = await axiosInstance().post(`/users/${userData.userId}/bookings`, body, {headers:{'Authorization':localStorage.getItem("token")}});
            //console.log("API"+JSON.stringify(response));
            if(response && response.status ==200)
            {
                console.log("Aass");
                setSuccess(true);  
                setBookingSuccess(true);
                navigate("/mybookings")
            }else{
              console.log("Error Getting Response from bookings API")
            }
        }catch(e)
        {
            
        }
    }


    }
   const getRoomDetails = async ()=>
    {
        try
        {
            const response = await axiosInstance().get(`/room/${id}`, {headers:{'Authorization':localStorage.getItem("token")}});
            //console.log("API"+JSON.stringify(response));
            if(response){
              console.log(response);
              getTotalPrice(response.data.basePrice);
              setRoomData(response.data);
            }else{
              console.log("Error Getting Response from Favorite API")
            }
        }catch(e){
            console.log(e);
        }
    }

    return (
        
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4">Booking</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={roomData.imageUrl} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Rooms Details</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{roomData.type}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{roomData.maxNumberOfGuests}</td>
                                    </tr>
                                    
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                                {/* <DatePicker  className="form-control" /> */}
                                <p>{searchData.checkInDate}</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                                {/* <DatePicker  className="form-control" /> */}
                                <p>{searchData.checkOutDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Number of days : {Difference_In_Days}</h6>
                            <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
                        </div>
                        
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bold">Price per day : $ {roomData.basePrice}</h6>
                            <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">$ {totalprice}</span></h6>
                            {dyprice == "seasonal" && <h6>(Includes peak season price surcharge)</h6>}
                            {dyprice == "weekend" && <h6>(Includes weekend price surcharge)</h6>}
                            {dyprice == "holiday" && <h6>(Includes holiday price surcharge)</h6>}
                            
                        </div>
                        <div className="col-md-6 col-12">
                        <br/>
                        <h6 className="font-weight-bold">Additional Amentities to be included</h6>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" style={{appearance: "auto"}} id="flexCheckDefault" name="DCB" onChange={handleCheck}/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Daily Continental Breakfast
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" style={{appearance: "auto"}} id="flexCheckDefault" name="AFR" onChange={handleCheck}/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Access to fitness room
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" style={{appearance: "auto"}} id="flexCheckDefault" name="ASJ" onChange={handleCheck}/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Access to Swimming Pool/Jacuzzi
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" style={{appearance: "auto"}} id="flexCheckDefault" name="DP" onChange={handleCheck}/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Daily Parking
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" style={{appearance: "auto"}} id="flexCheckDefault" name="BLD" onChange={handleCheck}/>
                            <label class="form-check-label" for="flexCheckDefault">
                            All meals included (Breakfast, Lunch, Dinner)
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
                                <select className="form-control">
                                    <option disabled>Select payment option</option>
                                    <option value="Credit">Credit Card</option>
                                    <option value="Debit">Debit Card</option>
                                    <option value="checkin">Pay during Checkin</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-6 col-12 float-right">
                               <button className="btn btn-block"  data-toggle="modal" data-target="#thanks" onClick={handleSubmit} style={{color: "white", backgroundColor: "#d63447"}}>Confirm Booking</button> 
                            </div>
                        </div>
                        {bookingSuccess ? (
                        <div class='alert alert-success' role='alert'>
                         Booking Successfull!
                        </div>
                    ) : null}
                    </div>
                    
                </div>
            </div>
            {/* {success && <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h3>Thank you </h3>
                            <p className="lead">Your was successfully!</p>
                        </div>
                        <div className="modal-footer">
                            <NavLink to="/mybookings" className="btn btn-dark">Goto MyBookings</NavLink>
                        </div>
                    </div>
                </div>
            </div> } */}
        </div> 
        )
}

export default RoomOverview