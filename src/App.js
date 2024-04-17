
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRegister from './User/UserRegister'
import UserLogin from './User/UserLogin'
import Navbar from './User/Admin/Navbar';
import CreateParking from './User/Admin/CreateParking';
import ShowParking from './User/Admin/ShowParking';
import UserNavbar from './User/UserNavbar';
import Booking from './Bookings/Booking';
import HomeNav from './Bookings/HomeNav';
import Bookingdetails from './Bookings/Bookingdetails';
import UserBooking from './User/Admin/UserBooking';
// import Bill from './Bookings/Bill';


function App() {
  return (
    <>
      <BrowserRouter>
        {<Routes>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/" element={<UserLogin />}></Route>
          <Route path='/Navbar' element={<Navbar />}></Route>
          <Route path='/Createlot' element={<CreateParking />}></Route>
          <Route path='/showlot' element={<ShowParking />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/HomeNav' element={<HomeNav />}></Route>
          <Route path='/userbooking' element={<UserBooking />}></Route>
          {/* <Route path='/bill/:username' element={<Bill />}></Route> */}
          <Route path='/Bookdetails/:slots/:place' element={<Bookingdetails />}></Route>



        </Routes>}
      </BrowserRouter>


    </>
  );
}

export default App;
