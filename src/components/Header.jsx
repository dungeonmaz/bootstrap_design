import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import f_icon from '../images/facebook.png'
import l_icon from '../images/linkedin.png'
import m_icon from '../images/m2.png'
import t_icon from '../images/twitter.png'


const header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={{ color: '#2ECC71' }} href="#home">Equiteez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ display: 'flex', alignItems: 'center' }}>
                        <Nav.Link href="#s1">What Are Digital Securities?</Nav.Link>
                        <Nav.Link href="#s2">Products</Nav.Link>
                        <Nav.Link href="#s3">Digitize Your Business</Nav.Link>
                        <Nav.Link href="#s4">Blog</Nav.Link>
                        <Nav.Link href="#s5">Contact Us</Nav.Link>
                    </Nav>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={t_icon} width='30px' alt='t' style={{ margin: '0 8px' }} />
                        <img src={f_icon} width='30px' alt='f' style={{ margin: '0 8px' }} />
                        <img src={l_icon} width='30px' alt='l' style={{ margin: '0 8px' }} />
                        <img src={m_icon} width='30px' alt='m' style={{ margin: '0 8px' }} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header