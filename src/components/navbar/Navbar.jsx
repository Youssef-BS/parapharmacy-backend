import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "./logo.jpeg";
import "./navbar.css";

function NavbarSet() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary h4">
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSet;