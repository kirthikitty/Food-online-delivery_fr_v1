import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar.js';

export const Admin = () => {
  const [menuitems, setmenuitems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/menuitems/findAll');
      setmenuitems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  
  const deleteItem = async (id) => {
    console.log(id)
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (!confirmed) return;
    try {
      await axios.delete(`http://localhost:8080/menuitems/delete/${id}`);
      fetchItems(); 
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <br></br><br></br>
      <h1 className='text-center'>Admin Page</h1>

      <table className="table table-hover table-bordered border-success container" >
        <thead>
          <tr className=''>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            {/* <th scope="col">Menu-Item</th> */}
            <th scope="col">Image</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {menuitems.map(menuitem => (
            <tr key={menuitem.id} >
              <td >{menuitem.menuitemid}</td>
              <td>{menuitem.menuname}</td>
              <td>{menuitem.menudesc}</td>
              <td>{menuitem.menuprice}</td>
              {/* <td>{menuItem.menuItem}</td> */}
              <td>{menuitem.image}</td>
              <td>
                <Link className='btn btn-outline-success' to={`/update/${menuitem.menuitemid}`}>Edit</Link>
              </td>
              <td>
                <button className='btn btn-outline-danger' onClick={() => deleteItem(menuitem.menuitemid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
        <Link className="btn btn-primary btn-center" to="/addproduct">Add Product</Link>
      </div>
    </div>
  );
};

export default Admin;
