// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import {Login} from './Sign.js/Login.js';
import { Register } from './Sign.js/Register.js';
import { AddProduct } from './components/AddProduct.js';
import {AllUser} from './components/AllUser.js';

import {Admin} from './components/Admin.js';
import {Update} from './components/Update.js';
import {AddCategory} from './components/AddCategory.js';
import {Delete} from './components/Delete.js';
import AddtoCart from './components/AddtoCart.js';
import {Payment} from './components/Payment.js';
import {Navbar} from './components/Navbar.js';
import AboutUs from './components/AboutUs.js';
import Footer from './components/Footer.js';
import Checkout from './components/Checkout.js';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/nav' element={<Navbar />}></Route>
      <Route path="/login/:price" element={<Login />}></Route>
      <Route path="/register/:price" element={<Register />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="/" element={<AllUser />}></Route>
     <Route path='/admin' element={<Admin />}></Route>
     <Route path='/update/:menuitemid' element={<Update />}></Route>
     <Route path='/addcategory' element={<AddCategory />}></Route>
     <Route path='/delete/:menuitemid' element={<Delete />}></Route>
     <Route path ='/addtocart' element={<AddtoCart />}></Route>
     <Route path = '/payment/:price' element={<Payment />}></Route>
     <Route path = '/about' element={<AboutUs />}></Route>
    <Route path='/footer' element={<Footer />}></Route>
    <Route path='/checkout' element={<Checkout />}></Route>

    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
