import {Container,Nav,Navbar} from 'react-bootstrap';

export default function Menu() {
  return (
  <Container>
    <Navbar expand="sm" className="bg-info-subtle">
        <Navbar.Brand href="/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Container>
  );
}

