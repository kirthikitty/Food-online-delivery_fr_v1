import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import '../components/alluser.css';

export const AllUser = () => {
  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/menuitems/findAll');
      setmenuItems(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    
  };
  const CartSend = ({ menuItem }) => {
    console.log(menuItem)
    fetch("http://localhost:8080/menuitems/addcart", {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'post',
      body: JSON.stringify(menuItem)
    })
      .then((response) => {
        console.log("Data received " + response);
      })
    alert("Product Added to Cart..!");
  }


  return (
    <div> 
     <Navbar></Navbar>
      <br></br><br></br>
      <br></br>
      <div className="container mt-4">
  <div className="row">
    {menuItems.map(menuItem => (
      <div key={menuItem.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <div className="card card-body-hover ">
          <img src={`http://localhost:8080/uploads/${menuItem.image}`} className="card-img-top card-body-hover " alt={menuItem.menuname} style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body card-body-hover ">
            <h6 className="card-title" style={{ fontSize: '1rem' }}>{menuItem.menuname}</h6>
            <p className="card-text" style={{ fontSize: '0.8rem' }}>{menuItem.menudesc}</p>
            <p className="card-text" style={{ fontSize: '0.8rem' }}>Price: ${menuItem.menuprice}</p>
            <Link to="/addtocart">
              <button className="btn btn-success btn-sm" onClick={() => CartSend({ menuItem })}>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    <Footer></Footer>
    </div>
  );
};

export default AllUser;