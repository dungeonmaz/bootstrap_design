import React from 'react'
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import phone from '../../images/phone.png'
import { useState } from 'react'


const Content1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='vert_mob' style={{ background: '#2ECC71', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>Private Equity Made Easy</h1>
        <p>Equiteez is on a mission to make private <br></br> equity easily accesible to all in vestors</p>
        <Button variant='dark' onClick={handleShow}>Signup For Free</Button>
      </div>
      <img className='mob_img' src={phone} alt='phone' width='600px' />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton >
          <Modal.Title className="ms-auto">Signup For Free</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button style={{ float: 'right', width: '160px', height: '43px', borderRadius: '10px', backgroundColor: '#252525'}}>Send</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Content1