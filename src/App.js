
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <>
      <Register />
      <Login />
      <BrowserRouter>
        {<Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>

        </Routes>}
      </BrowserRouter>
    </>
  );
}

export default App;
