import React from 'react'
import { Container} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
const Subscribe = () => {
    return (
        <div className="main">
            <Container>
            <div className="sub">
            <div className='head'>
               
                   <div className="h"> SUBSCRIBE NEWSLETTER.</div>
                 <p>Hi ! Use the link below to verify your email and start enjoying cleanmock.</p>
               
            </div>
            <div className="form">
               
                    <form>
                <input placeholder="enter your keyword..." type="search" />
                        <span><FontAwesomeIcon icon={faEnvelopeOpenText} /></span>
                </form>
                <div className="send">
                    Questions? Email us at <span href="/">ahmednasser.ce@gmail.com</span>
                </div>
               
            </div>
                </div>
                </Container>
            </div>
            

    )
}

export default Subscribe
