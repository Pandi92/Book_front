
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import UserRegister from './User/UserRegister'

function App() {
  return (
    <>
      {/* <Register />
      <Login /> */}
      {/* <BrowserRouter>
        {<Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>

        </Routes>} */}
      {/* </BrowserRouter> */}
      <UserRegister/>
    </>
  );
}

export default App;
