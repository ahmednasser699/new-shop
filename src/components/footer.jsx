import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
 
 
  const scrollTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }
    
return (
       
  <div className="footer">
    <div className="scrollbtn" onClick={scrollTop}>
        <FontAwesomeIcon icon={faChevronUp} />
    </div>
  <Container>
    <div className="topsec">
      <Grid container>
        <Grid item sm={3}>
          <div className="image-logo">
          </div>
        </Grid>
        <Grid item sm={3} xs={4}>
            <div>
                <h2>Top Links</h2>
                <Typography variant="h6">About Us</Typography>
                <Typography variant="h6">Bath Towels</Typography>
                <Typography variant="h6">Face Towels</Typography>
                <Typography variant="h6">Contact us</Typography>
            </div>
        </Grid>
        <Grid item sm={3} xs={4}>
            <div>
              <h2>My Account</h2>
              <Typography variant="h6">My Profile</Typography>
              <Typography variant="h6">Shopping Cart</Typography>
              <Typography variant="h6">Wishlist</Typography>
              <Typography variant="h6">Logout</Typography>
            </div>
        </Grid>
        <Grid item sm={3} xs={4}>
            <div>
              <h2>Our Terms</h2>
              <Typography variant="h6">Privacy Policy</Typography>
              <Typography variant="h6">Terms 	&amp; Conditions</Typography>
              <Typography variant="h6">FAQ</Typography>
            
            </div>
          </Grid>
              
      </Grid>
    </div>
    <hr/>
          <div className="botsec">
             <div >
                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                <span><FontAwesomeIcon icon={faTwitter} /></span>
                <span><FontAwesomeIcon icon={faPinterestP} /></span>
                <span><FontAwesomeIcon icon={faInstagram} /></span>
              
          
        </div>
        <div >
         <Typography variant="h5">&copy; 2021 <span style={{color:'#ceae6d'}}>PSdigital</span>.All Rights Reserved.</Typography>
        </div>
      </div>
   
  </Container>
  </div>

    )
}

export default Footer
