import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#221f1f' }}>
      <Navbar.Brand href="/">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: '100px', height: '55px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="font-weight-bold nav-link" to="/">
            Home
          </Link>
          <Link className="font-weight-bold nav-link" to="/tv-shows">
            TV Shows
          </Link>
          <Nav.Link className="font-weight-bold" href="/">
            Movies
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            Recently Added
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="/">
            My List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
