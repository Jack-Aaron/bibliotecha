import React from 'react';
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
                        <Nav.Link href='#search'>Search</Nav.Link>
                        <Nav.Link href='#saved'>Saved</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;
