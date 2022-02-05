import { Container, Nav, Navbar } from "react-bootstrap"

const Header = ({ setType }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setType("top")}>Top</Nav.Link>
            {/* <Nav.Link onClick={() => handleTypeChange('news')}>News</Nav.Link> */}
            <Nav.Link onClick={() => setType("best")}>Best</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">Login</Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
