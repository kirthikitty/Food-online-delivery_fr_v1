import React from 'react'
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export const Checkout = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      fetch('http://localhost:8080/menuitems/getcart')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then(data => {
          setCartItems(data);
          calculateTotalPrice(data);
        })
        .catch(error => {
          console.error('Error during fetch', error);
        });
    }, []);
  
    const handleDelete = (cartId) => {
      fetch(`http://localhost:8080/menuitems/deletemenuitem/${cartId}`, { method: 'DELETE' })
        .then(res => {
          if (res.ok) {
            const updatedCartItems = cartItems.filter(item => item.cartid !== cartId);
            setCartItems(updatedCartItems);
            calculateTotalPrice(updatedCartItems);
          } else {
            console.error('Failed to delete item.');
          }
        })
        .catch(error => {
          console.error('Error deleting item:', error);
        });
    };
  
    const handleQuantityChange = (cartId, newQuantity) => {
      const updatedCartItems = cartItems.map(item => {
        if (item.cartid === cartId) {
          return { ...item, quantity: parseInt(newQuantity) };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      calculateTotalPrice(updatedCartItems);
    };
  
    const calculateTotalPrice = (items) => {
      const total = items.reduce((acc, item) => acc + (item.menuprice * item.quantity), 0);
      setTotalPrice(total);
    };
  
    return (

<div className='col-5 position-fixed end-0 text-center'>

            <div className="border border-primary p-3">
              <h3>Order Summary</h3>
              <p>Total Items : {cartItems.length}</p>
              <p>Total Price: ${totalPrice}</p>
              {/* <Link to={`/login/${totalPrice}`}><button className='p-1' style={{ backgroundColor: "green", fontSize: '18px', color: 'white' }}>CheckOut</button></Link> */}
              <Link to={`/login/${totalPrice}`}><button className='p-1' style={{ backgroundColor: "green", fontSize: '18px', color: 'white' }}>CheckOut</button></Link>

            </div>
          </div>
    )};
    export default Checkout;