import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./logo.jpeg";
import "./navbar.css";

function NavbarSet() {
  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand >
            <img src={logo} alt='logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Adultes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Visage</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Corps
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Compléments alimentaires
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Cheuveux
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Enfants" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hygiène</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              compléments alimentaires
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">maquillage</Nav.Link>
            <Nav.Link href="#action1">accessoires hypoallergique</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSet;