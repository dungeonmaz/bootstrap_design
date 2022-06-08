import React from 'react'
import { Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import phone from '../../images/phone.png'


const Content1 = () => {
  return (
    <div className='aboba' style={{ background: '#2ECC71', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>Private Equity Made Easy</h1>
        <p>Equiteez is on a mission to make private <br></br> equity easily accesible to all in vestors</p>
        <Button variant='dark'>Signup For Free</Button>
      </div>
      <img src={phone} alt='phone' width='600px'/>
    </div>
  )
}

export default Content1