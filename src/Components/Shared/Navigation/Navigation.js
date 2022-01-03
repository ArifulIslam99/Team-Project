import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {

  const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'> Jewellery Shop </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>
      
    </Nav>
    <Nav>
    {
              (!user.displayName) &&
            <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav> 
            }
      {
              (user.displayName) &&

              <div>
                
                 {(user.photoURL) && <img style={{width:'35px', height:'35px'}} src={user.photoURL} alt="" />}
                 
                  <span style={{color:'white'}}> Welcome, {user.displayName} </span> <Button style={{padding:'5px', marginLeft:'2px', backgroundColor:'red'}} onClick={logOut}>LogOut</Button></div>
            }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;