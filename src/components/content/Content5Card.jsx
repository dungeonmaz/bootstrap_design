import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Content5Card = ({ data, image, description }) => {
    return (
        <Card className='card3' style={{ border:'none', width:'20rem'}}>
            <Card.Img variant='top' src={image} />
            <Card.Body>
                <Card.Title>{data}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Content5Card