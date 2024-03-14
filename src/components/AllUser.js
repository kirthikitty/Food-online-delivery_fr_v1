import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import NavBar from './NavBar';

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

  return (
    <div>
      {/* <NavBar /> */}
      
          
    <div className="container mt-4">
      
      <h1 className="mb-4">Menu Items</h1>
      <div className="row">
        {menuItems.map(menuItem => (
          <div key={menuItem.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={`http://localhost:8080/uploads/${menuItem.image}`} className="card-img-top" alt={menuItem.menuname} />
              <div className="card-body">
                <h5 className="card-title">{menuItem.menuname}</h5>
                <p className="card-text">{menuItem.menudesc}</p>
                <p className="card-text">Price: ${menuItem.menuprice}</p>
                <a href="#" class="btn btn-success">Add to cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllUser;