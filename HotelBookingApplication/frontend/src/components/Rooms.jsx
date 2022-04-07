import React, {useEffect,useContext,useState} from "react";
import {useNavigate, useParams, NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux'
import axiosInstance from "../utils/axios"
import HotelCard from './HotelCard';
function Rooms() 
{

    const searchData = useSelector((state) => state.search.searchData);
    
    
    const {id} = useParams();
    const str = id.split("+");
    
    const [roomList, setRoomList] = useState([]);
    useEffect(() => {
         getRoomsList();
    },[]);
    let form = {
        type:"rooms",
        hotelId:str[0],
        noOfGuests:searchData.noOfGuests,
        checkInDate:searchData.checkInDate,
        checkOutDate:searchData.checkOutDate
    }
    const getRoomsList = async ()=>
    {
        try
        {
            const response = await axiosInstance().post(`/hotels/search`,form, {headers:{'Authorization':localStorage.getItem("token")}});
            //console.log("API"+JSON.stringify(response));
            if(response){
              console.log(response);
              setRoomList(response.data);
            }else{
              console.log("Error Getting Response from Favorite API")
            }
        }catch(e){
            console.log(e);
        }
    }

    const roomsDiv = roomList.map((item, index) => 
    {
        
        return (
                <HotelCard room = {item}/>
                
        );
    });


  return (
    <div>
        <section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5">
                <div className="container">
                    <h2>Rooms</h2>
                    <p><a href="index.html">Home</a> &nbsp; / Hotels &nbsp;/ Rooms</p>
                </div>
            </div>
        </section>
        <div className="best-rooms w3l-blog py-1" style={{marginTop:"-130px"}}>
        <div className="container py-sm-4">
            <div className="ban-content-inf row">
                 {roomsDiv}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Rooms