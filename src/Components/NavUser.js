import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavUser=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Workshop API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/list'>Users</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser