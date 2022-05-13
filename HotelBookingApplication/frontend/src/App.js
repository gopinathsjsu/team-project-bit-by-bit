import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/Header';
import Hotels from './components/Hotels';
import Services from './components/Services';
import Sample from './components/Sample';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/register';
import Rooms from './components/Rooms';
import Bookings from './components/Bookings';
import RoomOverview from './components/RoomOverview';
import RoomOverviewEdit from './components/RoomOverviewEdit';
import Booking from './components/Booking';
import AdminHotel from './components/AdminHotel';
import AdminRoom from './components/AdminRoom';
import AdminBookings from './components/AdminBookings';
import AdminUsers from './components/AdminUsers';
import AdminEditRoom from './components/AdminEditRoom';

import './assets/css/style-starter.css';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route exact path="/mybookings" element={<Bookings/>}/>
          <Route exact path="/admin/hotels" element={<AdminHotel/>}/>
          <Route exact path="/admin/hotels/:hotelId" element={<AdminRoom/>}/>
          <Route exact path="/admin/hotels/:hotelId/rooms/:roomId" element={<AdminEditRoom/>}/>
          <Route exact path="/admin/bookings" element={<AdminBookings/>}/>
          <Route exact path="/admin/users" element={<AdminUsers/>}/>
          <Route exact path="/booking/:id" element={<Booking/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/editBooking/:id" element={<RoomOverviewEdit/>}/>
          <Route exact path="/newbooking/:id" element={<RoomOverview/>}/>
          <Route exact path="/hotels/:id/rooms" element={<Rooms/>}/>
          <Route exact path="/hotels" element={<Hotels/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/" element={<Home/>}/>
          
        </Routes>
    </Router>
  )
}

export default App