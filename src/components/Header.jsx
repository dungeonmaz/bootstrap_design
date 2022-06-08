import React from 'react'
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import f_icon from '../images/facebook.png'
import l_icon from '../images/linkedin.png'
import m_icon from '../images/m.png'
import t_icon from '../images/twitter.png'


const header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Equiteez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">What Are Digital Securities?</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <Nav.Link href="#link">Digitize Your Business</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header