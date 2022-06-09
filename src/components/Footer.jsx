import React from 'react'
import { Nav } from 'react-bootstrap'
import f_icon from '../images/facebook.png'
import l_icon from '../images/linkedin.png'
import m_icon from '../images/m.png'
import t_icon from '../images/twitter.png'

const Footer = () => {
  return (
    <div className='vert_mob_2'style={{ backgroundColor: '#252525', color: 'white', display: 'flex' }}>
      <div>
        <h2 style={{ color: '#2ECC71' }}>Equiteez</h2>
        <p>Contact Us</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={t_icon} width='30px' alt='t' style={{ margin: '0 8px' }} />
                        <img src={f_icon} width='30px' alt='f' style={{ margin: '0 8px' }} />
                        <img src={l_icon} width='30px' alt='l' style={{ margin: '0 8px' }} />
                        <img src={m_icon} width='30px' alt='m' style={{ margin: '0 8px' }} />
                    </div>
      </div>
      <Nav className="center_mob_2" style={{ display: 'flex', flexDirection:'column', color:'white' }}>
        <Nav.Link style={{color:'white'}} href="#s1">What Are Digital Securities?</Nav.Link>
        <Nav.Link style={{color:'white'}} href="#s2">Products</Nav.Link>
        <Nav.Link style={{color:'white'}} href="#s3">Digitize Your Business</Nav.Link>
        <Nav.Link style={{color:'white'}} href="#s4">Blog</Nav.Link>
        <Nav.Link style={{color:'white'}} href="#s5">Contact Us</Nav.Link>
      </Nav>
    </div>
  )
}

export default Footer