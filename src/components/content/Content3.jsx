import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import phone from '../../images/phone2.png'

const Content3 = () => {
    return (
        <div>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>Products</h2>
            <div className='aboba' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 style={{margin:'25px'}}>Launchpad</h4>
                        <div style={{ textAlign: 'center' }} >Help launch startups <br></br>& fund private bussinesses</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 style={{color:'#2ECC71', margin:'60px 0 25px 0'}}>Marketplace</h4>
                        <div style={{ textAlign: 'center' }}>Browse through stocks on sale <br></br> from private investors</div>
                    </div>
                </div>

                <img src={phone} width="350px" alt='phone'/>
            </div>
        </div>

    )
}

export default Content3