// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import {Login} from './Sign.js/Login.js';
import { Register } from './Sign.js/Register.js';
import { AddProduct } from './components/AddProduct.js';
import {AllUser} from './components/AllUser.js';
import {DeleteItem} from './components/DeleteItem.js';
import {Navbar} from './Navbar.js'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="/alluser" element={<AllUser />}></Route>
      <Route path="/deleteitem" element={<DeleteItem />}></Route>
     <Route path="/navbar" element={<Navbar />}></Route>
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;
