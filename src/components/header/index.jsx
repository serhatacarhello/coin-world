import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from 'react-bootstrap'

export default function Header() {
  const { logout, user } = useAuth()
  return (
    <Container className="header  min-vw-100 position-fixed top-0 start-0 end-0 px-0 mx-0  shadow-sm">
      <Navbar expand="md" bg="primary" variant="dark" sticky="top">
        <Container fluid>
          <Link to={'/'}>
            <Navbar.Brand>
              <img
                alt="coin logo image"
                src="./coin-logo.png"
                width="40"
                height="40"
                className="d-inline-block align-center"
              />
              Coin World
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Coin World
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {user ? (
                  <>
                    <NavLink to={'/main-page'}>
                      <Button>Coins</Button>
                    </NavLink>
                    <NavLink to={'/profile'}>
                      <Button>Profile</Button>
                    </NavLink>
                    <NavLink to={'/'}>
                      <Button className="text-white" onClick={() => logout()}>
                        Logout
                      </Button>
                    </NavLink>
                  </>
                ) : (
                  <NavLink to={'/'}>
                    <Nav.Link>Home</Nav.Link>
                  </NavLink>
                )}
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  )
}
