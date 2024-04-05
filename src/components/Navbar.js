import Nav from 'react-bootstrap/Nav';
import '../components/Navbar.css'

export function Navbar() {
  return (
    <Nav className='nav fixed-top' justify variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/about' eventKey="link-1">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/register/:price' eventKey="link-3"> Sign in
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Rate us</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;