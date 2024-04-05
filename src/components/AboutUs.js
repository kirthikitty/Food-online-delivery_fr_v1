import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


const AboutUs = () => {
  return (
    <div style={{ 
      backgroundImage: "url('https://img.freepik.com/premium-photo/food-cooking-background-stone-texture-with-sea-salt-pepper-garlic-parsley-light-grey-abstract-food-background-empty-space-text-can-be-used-food-posters-design-menu-top-view_253362-16400.jpg?w=2000')",
      backgroundPosition: 'center',
      backgroundSize: 'cover', // This ensures the image covers the entire background
      backgroundRepeat: 'no-repeat' // This ensures the image is not repeated
    }}>  
    <Container className="mt-5">
    <Navbar />
      <Row>
        <Col md={8} className="mx-auto text-center">
       
          <h1>About Us</h1>
          <p>Welcome to <b>Fresh Eats,</b> your ultimate destination for delicious food delivered right to your doorstep.</p>
          <p>At [Your Food Delivery Platform Name], we are passionate about connecting food lovers with the best local restaurants.</p>
          <p>Our mission is to provide convenient, reliable, and tasty food delivery service that satisfies your cravings.</p>
          <p>Whether you're craving pizza, sushi, burgers, or something exotic, we've got you covered.</p>
          <p>With a diverse range of cuisines and restaurants to choose from, there's something for everyone at <b>Fresh Eats,</b>.</p>
          <p>Join us in our journey to revolutionize the way you experience food delivery!</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <h2>Our Team</h2>
          <p>Meet the passionate individuals behind <b>Fresh Eats,</b>.</p>
          <ul>
            <li>Founder & CEO: John Doe</li>
            <li>Head of Operations: Jane Smith</li>
            <li>Lead Developer: Michael Johnson</li>
            <li>Marketing Manager: Emily Brown</li>
          </ul>
          <p>We are dedicated to providing you with the best food delivery experience possible.</p>
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>At [Fresh Eats], we envision a world where everyone can enjoy delicious food from their favorite restaurants without leaving their homes.</p>
          <p>We strive to make food delivery convenient, affordable, and enjoyable for all.</p>
          <p>Join us in our mission to make every meal a delightful experience!</p>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  );
};

export default AboutUs;
