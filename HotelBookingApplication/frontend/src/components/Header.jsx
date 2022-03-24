import React from 'react'
import {NavLink} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux'

function Header() {


    const userData = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        console.log("Asas");
        console.log("Asas");
        localStorage.removeItem("token");
        dispatch({
            type: "LogoutUser",
        })
        navigate("/", {replace:true});
    }



  return (
    <div>
        <header class="w3l-header-nav">
            <nav class="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                <div class="container">
                    <NavLink to="/" ><a class="navbar-brand" href="index.html">
                        <img src="assets/images/hotels.png" alt="Your logo" style={{height:"35px"}} /> Marriott</a> </NavLink>
                    {/* <!-- if logo is image enable this   
                                <a class="navbar-brand" href="#index.html">
                                    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                                </a> --> */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <NavLink to="/"><a class="nav-link" href="">Home</a></NavLink>
                            </li>
                            <li class="nav-item @@about__active">
                            <NavLink to="/about"><a class="nav-link" href="">About</a></NavLink>
                            </li>
                            <li class="nav-item @@services__active">
                            <NavLink to="/services"><a class="nav-link" href="">Services</a></NavLink>
                            </li>
                            <li class="nav-item @@contact__active">
                            <NavLink to="/contact"><a class="nav-link" href="">Contact</a></NavLink>
                            </li>
                            {userData && !userData?.isAdmin && localStorage.getItem("token") && <li class="nav-item @@contact__active">
                            <NavLink to="/profile"><a class="nav-link" href="">Profile</a></NavLink>
                            </li>}
                            {userData && !userData?.isAdmin && localStorage.getItem("token") && <li class="nav-item @@contact__active">
                            <NavLink to="/mybookings"><a class="nav-link" href="">My Bookings</a></NavLink>
                            </li>}
                            {userData && userData.isAdmin && <><li class="nav-item @@contact__active">
                            <NavLink to="/admin/hotels"><a class="nav-link" href="">Hotels</a></NavLink>
                            </li>
                            <li class="nav-item @@contact__active">
                            <NavLink to="/admin/bookings"><a class="nav-link" href="">Bookings</a></NavLink>
                            </li>
                            <li class="nav-item @@contact__active">
                            <NavLink to="/admin/users"><a class="nav-link" href="">Users</a></NavLink>
                            </li></>}
                        </ul>
                        <NavLink to="/hotels"><a href="" class="ml-3 book btn btn-secondary btn-style">Book Now</a></NavLink>
                        

                        { !localStorage.getItem("token") &&
                          <NavLink to="/login" ><a href="" class="ml-3 book btn btn-secondary btn-style">Login</a> </NavLink>
						}
                        { localStorage.getItem("token") &&
                            <a href="" onClick={
                                handleLogout
                                } class="ml-3 book btn btn-secondary btn-style">Logout</a> 
                        }


                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header