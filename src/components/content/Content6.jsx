import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Content6 = () => {
    return (
        <div className='aboba' style={{ backgroundColor: '#E5E5E5', padding: '60px 0', marginTop: '40px', display: 'flex', justifyContent: 'space-around' }}>
            <div style={{padding:'40px 0'}}>
                <h2 style={{ margin: '10px 0' }}>Contact Us</h2>
                <p>For inquiries regarding events, projects,<br></br> collaborations, or general information.</p>
                <a href=""> info@equiteez.com</a>
            </div>
            <Form>

                <Form.Group as={Row} className="mb-3" controlId="formBasicName">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicCompany">
                    <Form.Label column sm="2">
                        Company
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="company" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm="2">
                        Email*
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicText">
                    <Form.Label column sm="2">
                        Message*
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={4} />
                    </Col>
                </Form.Group>

                <Button variant='dark' style={{ float: 'right', width: '160px', height: '43px', borderRadius: '10px', backgroundColor: '#252525' }}>Send</Button>
            </Form>
        </div>
    )
}

export default Content6