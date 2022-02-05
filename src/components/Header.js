import { Container, Nav, Navbar } from "react-bootstrap"
import styles from "../styles/Header.module.scss"

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
        <Navbar.Collapse className="justify-content-end">
          <a
            href="https://news.ycombinator.com/login?goto=news"
            className={styles.login}
          >
            Login
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
