import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Button } from 'react-bootstrap'
import Content5Card from './Content5Card'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'

const Content5 = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h2 style={{ textAlign: 'center' }}>Blog</h2>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                    <Content5Card data={'02.06.20'}
                        description={'In expression an solicitude principles in do. Small for ask shade water manor think men begin. At principle perfectly by sweetness do.'}
                        image={blog1} />
                    <Content5Card data={'02.06.20'}
                        description={'In expression an solicitude principles in do. Small for ask shade water manor think men begin. At principle perfectly by sweetness do.'}
                        image={blog2} />
                    <Content5Card data={'02.06.20'}
                        description={'In expression an solicitude principles in do. Small for ask shade water manor think men begin. At principle perfectly by sweetness do.'}
                        image={blog3} />
                </Row>
            </Container>
            <Button variant='outline-success' size='lg' style={{ width: '15rem', borderWidth: '5px', borderRadius: '10px', borderColor: '#2DC66E', color: '#2DC66E' }}>View all news</Button>
        </div>
    )
}

export default Content5