import React from 'react'
import {Container } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
       
        <Container>
            <div className='contact' id="contact">
            <div className="info">
                <div className="header">contact info</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum.</p>
                <div className="call">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <span>Dambo dika,USA,road123</span>
                </div>
                <div className="call">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <span>ahmednasser.ce@gmail.com</span>
                </div>
                <div className="call">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <span>01021360901</span>
                </div>
                <div className="follow">
                <h4>Follow Us</h4>
                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                <span><FontAwesomeIcon icon={faTwitter} /></span>
                <span><FontAwesomeIcon icon={faPinterestP} /></span>
                <span><FontAwesomeIcon icon={faInstagram} /></span>
                </div>
                </div>
              
                
            <div className="contact-image">
                <img src='/images/info-image.png' alt="towel"/>
            </div>
            
            </div>
           
            </Container>
       
    )
}

export default Contact
