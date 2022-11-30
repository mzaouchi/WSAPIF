import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavUser=({auth,setAuth})=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Workshop API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>

            {
              auth == true ?
              <>
              <Nav.Link as={Link} to='/list'>Users</Nav.Link> 
              <Nav.Link onClick={()=> setAuth(false)} >Logout</Nav.Link> 
              </>
              :
              <Nav.Link onClick={()=> setAuth(true)} >Login</Nav.Link> 
            }
                       
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser