import CartWidget from "../CartWidget/CardWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>TSL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/t-shirts'>T-shirts</Nav.Link>
            <Nav.Link as={Link} to='/category/garrafas'>Garrafas</Nav.Link>
            <Nav.Link as={Link} to='/category/proteinas'>Proteinas</Nav.Link>  

          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar