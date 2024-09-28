import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
            {/* <Navbar.Brand href='/'><img src='../assets/logo.svg'/></Navbar.Brand> */}
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto'> {/* Changed ml-auto to mx-auto to center */}
                    <Nav.Link href='/enterprise'>Enterprise</Nav.Link>
                    <Nav.Link href='/personal'>Personal</Nav.Link>
                    {/* <Nav.Link href='/legal'>Legal</Nav.Link> */}
                    <Nav.Link href='/company-info'>Company Info</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
