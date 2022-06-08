import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import DYB1 from '../../images/DYB1.png'
import DYB2 from '../../images/DYB2.png'
import DYB3 from '../../images/DYB3.png'
import DYB4 from '../../images/DYB4.png'
import DYB5 from '../../images/DYB5.png'
import DYB6 from '../../images/DYB6.png'

const Content4 = () => {
    return (
        <div className='trapezoid' style={{ padding: '4rem', backgroundColor: '#E5E5E5'}}>
            <h2 style={{ textAlign: 'center' }}>Digitize Your Business</h2>
            <Container fluid style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Row>
                    <Col><Card className='card2' style={{ width: '20rem', height: '16rem', borderColor: '#2ECC71', display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variat='top' src={DYB1} style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Raise Capital </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontSize: '18px' }}>
                                    Expand your investor base globally through the Equitees launchpad
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card></Col>
                    <Col><Card className='card2' style={{ width: '20rem', height: '16rem', borderColor: '#2ECC71', display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variat='top' src={DYB2} style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Automated Compliance </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontSize: '18px' }}>
                                    Regulation aware shares means less time on the phone with your lawyers
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card></Col>
                    <Col><Card className='card2' style={{ width: '20rem', height: '16rem', borderColor: '#2ECC71', display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variat='top' src={DYB3} style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Digital Transfer Agent</Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontSize: '18px' }}>
                                    Everything from shareholder , managment, voting, even dividend distribution
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card></Col>
                </Row>

                <Row>
                    <Col><Card className='card2' style={{ width: '20rem', height: '16rem', borderColor: '#2ECC71', display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variat='top' src={DYB4} style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Lowerr Fees</Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontSize: '18px' }}>
                                    Removing unnecesary middlemen helps keep more money in your business
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card></Col>
                    <Col><Card className='card2' style={{ width: '20rem', height: '16rem', borderColor: '#2ECC71', display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variat='top' src={DYB5} style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>Brand Engagement </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontSize: '18px' }}>
                                    Increase your customer engagement by rewardind your most loyal patrons
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card></Col>
                    <Col><Card className='card2' style={{ width: '20rem', height: '16rem', borderColor: '#2ECC71', display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Img variat='top' src={DYB6} style={{ width: '4rem', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>24/7 Liquidity </Card.Title>
                                <Card.Text style={{ textAlign: 'center', fontSize: '18px' }}>
                                    Sacondary trading is hard, we make it easy though the Equiteez Marketplace
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card></Col>

                </Row>


            </Container>
        </div>
    )
}

export default Content4