
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRegister from './User/UserRegister'
import UserLogin from './User/UserLogin'
import Navbar from './User/Admin/Navbar';
import CreateParking from './User/Admin/CreateParking';
import ShowParking from './User/Admin/ShowParking';
import UserNavbar from './User/UserNavbar';


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
          

        </Routes>}
      </BrowserRouter>


    </>
  );
}

export default App;
