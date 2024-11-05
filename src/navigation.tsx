import "./navigation.css"
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import imagelogo from './assets/Logo-removebg.png';

const Navigation: React.FC = () => {
  return (
      <Navbar className="bg-body-tertiary">
          <Navbar.Brand>
            <img
              src={imagelogo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/about">About</Nav.Link>
              <Nav.Link href="#/contact">Contact Us</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>      
  );
}

export default Navigation;