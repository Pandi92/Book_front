
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Register from './Register';
// import Login from './Login';
import UserRegister from './User/UserRegister'
import UserLogin from './User/UserLogin'
import Navbar from './User/Admin/Navbar';
import CreateParking from './User/Admin/CreateParking';
import ShowParking from './User/Admin/ShowParking';


function App() {
  return (
    <>
      {/* <Register />
      <Login /> */}
      <BrowserRouter>
        {<Routes>
          <Route path="/register" element={<UserRegister/>}></Route>
          <Route path="/Login" element={<UserLogin/>}></Route>
          <Route path='/Navbar' element={<Navbar/>}></Route>
          <Route path='/Createlot' element={<CreateParking/>}></Route>
          <Route path='/showlot' element={<ShowParking/>}></Route>

        </Routes>} 
       </BrowserRouter> 
      {/* <UserRegister/> */}
      
    </>
  );
}

export default App;
