import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from '../../../src/navbarbrand.png';

function Navigation(props) {
    return (
        <>
            <Navbar bg='light'>
                <Navbar.Brand href='#search'>
                    <Image src={NavbarBrand} style={{ maxHeight: 40 }} fluid></Image>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link
                            as={Link}
                            to={'/'}
                            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                        >Search</Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={'/saved'}
                            className={window.location.pathname === '/saved' ? 'nav-link active' : 'nav-link'}
                        >Saved</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;
