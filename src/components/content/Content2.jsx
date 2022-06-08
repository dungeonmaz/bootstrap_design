import React from 'react'
import { Card, Container, Row, Form, Button } from 'react-bootstrap'
import WADS1 from '../../images/WADS1.png'
import WADS2 from '../../images/WADS2.png'
import WADS3 from '../../images/WADS3.png'
import 'bootstrap/dist/css/bootstrap.min.css'

const Content2 = () => {
    return (
        <div style={{marginTop:'30px'}}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h2> What Are Digital Securities?</h2>
                <div>
                    Digital securities represent traditional assets like equity or bonds.
                </div>
                <div>
                    They carry all of the same legal rights of their paper issued counter-parts.
                </div>
            </div>

            <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Row>
                    <Card style={{ width: '19rem', margin: '16px', border: 'none' }}>
                        <Card.Img variat='top' src={WADS1} />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Invest Any Amount </Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                Start with a little as $1,<br></br>
                                buy parts of a whole share
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '19rem', margin: '16px', border: 'none' }}>
                        <Card.Img variat='top' src={WADS2} />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Access Private Equity </Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                Get access to investments typically<br></br>
                                reserved for institutions
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '19rem', margin: '16px', border: 'none' }}>
                        <Card.Img variat='top' src={WADS3} />
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>Trade 24/7 </Card.Title>
                            <Card.Text style={{textAlign:'center'}}>
                                Digital assets don't sleep,<br></br>
                                so why should you stop trading?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>

            <div fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', }}>
                <Form style={{ width: '300px', height: '0' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>
                </Form>
                <Button style={{ marginLeft: '16px', width: '300px' }} variant='success'>Get Early Access</Button>
            </div>

            <div style={{ margin: '32px 0', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#252525', color: '#2FCC71' }}>
                <div style={{ fontSize: '32px' }}>Digital Assets are the future of private equity</div>
                <div style={{ fontSize: '28px' }}>- Deloitte</div>
            </div>
        </div>
    )
}

export default Content2