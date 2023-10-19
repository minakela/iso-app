import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function IsoHeader(): JSX.Element {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Tiac ISO issue service</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark">
              <NavDropdown.Item href="#Home">Home</NavDropdown.Item>
              <NavDropdown.Item href="#Login">Login</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item> */}
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IsoHeader;
