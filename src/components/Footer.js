import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
       

        

        <section className='mb-4'>
          <p>
            Order delicious food online and get it delivered to your doorstep. Choose from a wide range of cuisines and dishes.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/' className='text-white text-decoration-none'>
                    Menu
                  </a>
                </li>
                <li>
                  <a href='/about' className='text-white text-decoration-none'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/contact' className='text-white text-decoration-none'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Cuisines</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/cuisine/italian' className='text-white text-decoration-none'>
                    Italian
                  </a>
                </li>
                <li>
                  <a href='/cuisine/chinese' className='text-white text-decoration-none'>
                    Chinese
                  </a>
                </li>
                <li>
                  <a href='/cuisine/mexican' className='text-white text-decoration-none'>
                    Mexican
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Legal</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/terms' className='text-white text-decoration-none'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='/privacy' className='text-white text-decoration-none'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Support</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/faq' className='text-white text-decoration-none'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='/support' className='text-white text-decoration-none'>
                    Support Center
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} All rights reserved.
        <a className='text-white text-decoration-none' href='https://yourfooddeliverywebsite.com/'>
          Fresh Eats
        </a>
      </div>
    </MDBFooter>
  );
}
