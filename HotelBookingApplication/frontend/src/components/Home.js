import React, { useState } from 'react'
import axios from "axios";
import {NavLink} from "react-router-dom";
const Home = () => {
    
    const searchHotels = async () => 
    {
        try 
        {
            //const result = await axios.post('/hotels/search' , {checkInDate, checkOutDate, noOfPersons});


        } 
        catch (error) 
        {
            
        }
    }

  return  <>

   <section class="w3l-main-slider" id="home">
       <div class="companies20-content">
           <div class="owl-one owl-carousel owl-theme">
               <div class="item">
                   <li>
                       <div class="slider-info banner-view bg bg2">
                           <div class="banner-info">
                               <div class="container">
                                   <div class="banner-info-bg">
                                       <h5>Location is heavenly. Best to visit in week days to enjoy the peaceful beauty
                                       </h5>
                                       <a class="btn btn-style transparent-btn mt-sm-5 mt-4" href="services.html"> Our
                                           Services</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
               </div>
               <div class="item">
                   <li>
                       <div class="slider-info  banner-view banner-top1 bg bg2">
                           <div class="banner-info">
                               <div class="container">
                                   <div class="banner-info-bg">
                                       <h5>Our new hotels will play a leading role in prompting the world peace.</h5>
                                       <a class="btn btn-style transparent-btn mt-sm-5 mt-4" href="services.html"> Our
                                           Services</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
               </div>
               <div class="item">
                   <li>
                       <div class="slider-info banner-view banner-top2 bg bg2">
                           <div class="banner-info">
                               <div class="container">
                                   <div class="banner-info-bg">
                                       <h5>Most hotels train their people with the booklets. We take ours to the ballet.
                                       </h5>
                                       <a class="btn btn-style transparent-btn mt-sm-5 mt-4" href="services.html"> Our
                                           Services</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
               </div>
               <div class="item">
                   <li>
                       <div class="slider-info banner-view banner-top3 bg bg2">
                           <div class="banner-info">
                               <div class="container">
                                   <div class="banner-info-bg">
                                       <h5>Good tourism will follow good hotels. Experience our luxury hotel rooms</h5>
                                       <a class="btn btn-style transparent-btn mt-sm-5 mt-4" href="services.html"> Our
                                           Services</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
               </div>
           </div>
       </div>
   </section>
  <section class="w3l-about py-5">
      <div class="container py-sm-4">
          <div class="row">
              <div class="col-lg-6 about-left mb-md-0 mb-5">
                  <h3 class="title-big">Relax in our Resort</h3>
                  <h5>We make the best for all our customers.</h5>
                  {/* <p class="mt-3">Duis nisi sapien, elementum finibus fermentum eget, aliquet leo. Mauris hendrerit vel ex.
                      Quisque vitae luctus massa. Phasellus sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla.
                      Integer ultrices finibus sed nisi. in convallis felis dapibus sit amet. Lorem ipsum dolor, sit 
                      amet consectetur adipisicing elit. Totam, porro! Lorem ipsum dolor sit amet.</p> */}
                      <NavLink to="/about"> <a href="" class="btn btn-style btn-primary mt-sm-5 mt-4">Learn About Us</a></NavLink>
              </div>
              <div class="col-lg-6 about-right position-relative mt-lg-0 mt-5">
                  <img src="assets/images/top.jpg" alt="" class="img-fluid img-border mt-4" />
                  <img src="assets/images/bottom.jpg" alt="" class="img-fluid position-absolute img-position" />
              </div>
          </div>
      </div>
  </section>
  <div class="best-rooms py-5">
      <div class="container py-lg-5 py-sm-4">
          <h3 class="title-big text-center">Best Rooms</h3>
          <div class="ban-content-inf row py-lg-3">
              <div class="maghny-gd-1 col-lg-6">
                  <div class="maghny-grid">
                      <figure class="effect-lily">
                          <img class="img-fluid" src="assets/images/room1.jpg" alt=""/>
                          <figcaption class="w3set-hny">
                              <div>
                                  <h4 class="top-text">Luxury Hotel and Best Resort
                                      <span>Peaceful Place to stay</span></h4>
                                  <p></p>
                              </div>
                          </figcaption>
                      </figure>
                      <div class="room-info">
                          <h3 class="room-title"><a href="room-single.html">Luxury Hotel</a></h3>
                          <ul class="mb-3">
                              <li><span class="fa fa-users"></span> 2 Guests</li>
                              <li><span class="fa fa-bed"></span> Double bed</li>
                              <li><span class="fa fa-bed"></span> 15sqft</li>
                          </ul>
                          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam
                              tempora voluptates?</p> */}
                          <NavLink to="/hotels"> <a href="#book" class="btn btn-style btn-primary mt-sm-4 mt-3">Book Now</a> </NavLink>
                      </div>
                  </div>
              </div>
              <div class="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
                  <div class="row">
                      <div class="maghny-gd-1 col-6">
                          <div class="maghny-grid">
                              <figure class="effect-lily border-radius">
                                  <img class="img-fluid" src="assets/images/room2.jpg" alt="" />
                                  <figcaption>
                                      <div>
                                          <h4>Family Rooms <span> Resort</span></h4>
                                          <p></p>
                                      </div>
  
                                  </figcaption>
                              </figure>
                          </div>
                      </div>
                      <div class="maghny-gd-1 col-6">
                          <div class="maghny-grid">
                              <figure class="effect-lily border-radius">
                                  <img class="img-fluid" src="assets/images/room3.jpg" alt="" />
                                  <figcaption>
                                      <div>
                                          <h4>Double Rooms <span> Resort</span></h4>
                                          <p></p>
                                      </div>
  
                                  </figcaption>
                              </figure>
                          </div>
                      </div>
                      <div class="maghny-gd-1 col-6 mt-4">
                          <div class="maghny-grid">
                              <figure class="effect-lily border-radius">
                                  <img class="img-fluid" src="assets/images/room4.jpg" alt="" />
                                  <figcaption>
                                      <div>
                                          <h4>Luxury Rooms <span> Resort</span></h4>
                                          <p></p>
                                      </div>
  
                                  </figcaption>
                              </figure>
                          </div>
                      </div>
                      <div class="maghny-gd-1 col-6 mt-4">
                          <div class="maghny-grid">
                              <figure class="effect-lily border-radius">
                                  <img class="img-fluid" src="assets/images/room5.jpg" alt="" />
                                  <figcaption>
                                      <div>
                                          <h4>Resort Rooms <span> Resort</span></h4>
                                          <p></p>
                                      </div>
  
                                  </figcaption>
                              </figure>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <section class="w3l-index3">
      <div class="midd-w3 py-5">
          <div class="container py-lg-5 py-md-3">
              <div class="row">
                  <div class="col-lg-6 left-wthree-img text-righ">
                      <div class="position-relative">
                          <img src="assets/images/videobg.jpg" alt="" class="img-fluid" />
                          <a href="#small-dialog" class="popup-with-zoom-anim play-view text-center position-absolute">
                              <span class="video-play-icon">
                                  <span class="fa fa-play"></span>
                              </span>
                          </a>
                          <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                              <iframe src="https://player.vimeo.com/video/246941769" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self">
                      <h6>Discover our Locations</h6>
                      <h3 class="title-big">20 Years of Hotels and Resort Experience</h3>
                      {/* <p class="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                          ultrices in ligula. Semper at tempufddfel.</p> */}
                      <ul class="w3l-right-book mt-4">
                          <li><span class="fa fa-check" aria-hidden="true"></span>We make the best for all our customers</li>
                          <li><span class="fa fa-check" aria-hidden="true"></span>Follow our Resort Luxury Hotels</li>
                          <li><span class="fa fa-check" aria-hidden="true"></span>Luxury hotels and best resorts</li>
                          <li><span class="fa fa-check" aria-hidden="true"></span>Double rooms and family rooms</li>
                          <li><span class="fa fa-check" aria-hidden="true"></span>Enjoy a luxury experience</li>
                      </ul>
                      <NavLink to="/hotels"><a href="" class="btn btn-style btn-primary mt-4">Book Now</a> </NavLink>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <div class="quotation py-5">
      <div class="container py-xl-5 py-lg-3">
          <div class="welcome-left text-center py-md-5 py-3">
              <h3>Enjoy a Luxury experience. Discover our locaions. Relax and enjoy your holiday</h3>
              <NavLink to="/hotels"> <a href="" class="btn btn-style transparent-btn mt-sm-5 mt-4 mr-2">Book Now</a> </NavLink>
              <NavLink to="/contact"><a href="contact.html" class="btn btn-style btn-primary mt-sm-5 mt-4">Contact Us</a> </NavLink>
          </div>
      </div>
  </div>
  
  <section class="w3l-logos py-5">
      <div class="container py-lg-3">
          {/* <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 logo-view">
                  <img src="assets/images/logo1.jpg" alt="company-logo" class="img-fluid" />
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 logo-view">
                  <img src="assets/images/logo2.jpg" alt="company-logo" class="img-fluid" />
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-sm-0 mt-4">
                  <img src="assets/images/logo3.jpg" alt="company-logo" class="img-fluid" />
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-md-0 mt-4">
                  <img src="assets/images/logo4.jpg" alt="company-logo" class="img-fluid" />
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-lg-0 mt-4">
                  <img src="assets/images/logo2.jpg" alt="company-logo" class="img-fluid" />
              </div>
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-lg-0 mt-4">
                  <img src="assets/images/logo1.jpg" alt="company-logo" class="img-fluid" />
              </div>
          </div> */}
      </div>
  </section>


  <section class="w3l-footer-29-main">
    <div class="footer-29 py-5">
      <div class="container py-lg-4">
        <div class="row footer-top-29">
          <div class="col-lg-3 col-md-6 col-sm-8 footer-list-29 footer-1">
            <h6 class="footer-title-29">Contact Us</h6>
            <ul>
              <li>
                <p><span class="fa fa-map-marker"></span>  1354, The Alameda, San Jose
                  </p>
              </li>
              <li><a href=""><span class="fa fa-phone"></span> +(21)-255-999-8888</a></li>
              <li><a href="" class="mail"><span class="fa fa-envelope-open-o"></span>
                  hotels@mail.com</a></li>
            </ul>
          </div>
          {/* <div class="col-lg-2 col-md-6 col-sm-4 footer-list-29 footer-2 mt-sm-0 mt-5">
  
            <ul>
              <h6 class="footer-title-29">Useful Links</h6>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About hotels</a></li>
              <li><a href="#blogposts"> Blog posts</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </div> */}
          {/* <div class="col-lg-3 col-md-6 col-sm-5 footer-list-29 footer-3 mt-lg-0 mt-5">
              <h6 class="footer-title-29">Latest from blog</h6>
              <div class="footer-post mb-4">
                <a href="#url">Work Passionately</a>
                <p class="small"><span class="fa fa-clock-o"></span> March 9, 2020</p>
              </div>
              <div class="footer-post">
                <a href="#url">Work Passionately without any hesitation</a>
                <p class="small"><span class="fa fa-clock-o"></span> March 9, 2020</p>
              </div>
              
          </div> */}
          <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
            <h6 class="footer-title-29">Newsletter </h6>
            <p>Enter your email and receive the latest news from us.
             We'll never share your email address</p>
  
            <form action="" class="subscribe" method="post">
              <input type="email" name="email" placeholder="Your Email Address" required=""/>
              <button><span class="fa fa-envelope-o"></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="w3l-footer-29-main w3l-copyright">
    <div class="container">
      <div class="row bottom-copies">
        <p class="col-lg-8 copy-footer-29">© 2020 Hotels. All rights reserved | Designed by <a
            href="">Team BitByBit</a></p>
  
        <div class="col-lg-4 main-social-footer-29">
          <a href="#facebook" class="facebook"><span class="fa fa-facebook"></span></a>
          <a href="#twitter" class="twitter"><span class="fa fa-twitter"></span></a>
          <a href="#instagram" class="instagram"><span class="fa fa-instagram"></span></a>
          <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></a>
        </div>
  
      </div>
    </div>
  
   <button onclick="topFunction()" id="movetop" title="Go to top">
    &#10548;
  </button>
 
  </section>
  </>
}

export default Home