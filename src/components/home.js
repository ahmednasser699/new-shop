import React,{useEffect} from 'react'
import { Carousel, Navbar, Nav,Dropdown } from 'react-bootstrap'
import { TextField,Badge } from '@material-ui/core'
import { Search, FavoriteBorder, Person, ShoppingCart } from '@material-ui/icons'
import ToggleModal from '../modals/toggel-modal'
import CartModal from '../modals/cart-modal'


const Home = ({cart, del, total}) => {

    useEffect(() => {
       
        const nav = document.querySelector('.navbar');
        const scrollbtn = document.querySelector('.scrollbtn');
        window.onscroll = function (e) {
            if (window.pageYOffset < 120) {
                nav.classList.remove('scrollednav')
            } else if (window.pageYOffset < 800) {
                 nav.classList.add('scrollednav')
                scrollbtn.style.zIndex = '-1';
                 scrollbtn.style.opacity = '0';
            } else {
                nav.classList.add('scrollednav')
                scrollbtn.style.zIndex = '99';
                scrollbtn.style.opacity = '1';
      }
    }

    }, [])
    const toggle = () => {
        let dimmer = document.querySelector('.hamborgerbig');
        let activedimmer = document.querySelector('.hamborgersmall');
        dimmer.classList.toggle('dimmerfull');
        activedimmer.classList.toggle('activedimmer')
         if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = 'auto';
         } else {
             document.body.style.overflow = 'hidden';
        }
    }
    const cartToggle = () => {
         
        let cartdimmer = document.querySelector('.cartsmall');
        // dimmer.classList.toggle('dimmerfull');
        cartdimmer.classList.toggle('activedimmer')
        
    }
    const product = () => {
        let pros= document.getElementById('products')
        pros.scrollIntoView({ behavior: "smooth" })
    }
    const contact = () => {
        let cont = document.getElementById('contact')
        cont.scrollIntoView({behavior:'smooth'})
    }
    const about = () => {
        let detail = document.getElementById('about')
        detail.scrollIntoView({behavior:'smooth'})
    }
    return (
        <div className="home">
            <div className="navbar">
               <Navbar  expand="lg" >
                    <Navbar.Brand href="#home">
                     <img src="/images/logo.png" alt="brand"/>   
                    </Navbar.Brand>
                    
                    <div className="toggeled">
                        <ToggleModal toggle={toggle} cart={cart} cartToggle={cartToggle} />
                    </div>
                    <div className="carttoggle">
                        <CartModal cartToggle={cartToggle} cart={cart} del={del} total={total} />
                    </div>
                    <div aria-controls="basic-navbar-nav" data-target="#basic-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed" onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link  onClick={about}>About Us</Nav.Link>
                        <Nav.Link  onClick={product}>Products</Nav.Link>
                        <Nav.Link  onClick={contact}>Contact Us</Nav.Link>
                        </Nav>
                        <span id='srch'><Search /></span>
                        
                        <TextField id="standard-basic" placeholder="enter your keywords" style={{marginRight:'5%', width:"25%"}}/>
                        <div className="icons">
                            <Dropdown>
                                <Dropdown.Toggle split id="dropdown-split-basic">
                                   <FavoriteBorder />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">towel1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">towel2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">towel3</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            
                            <Person />
                            <Badge badgeContent={cart.length} >
                                <span onClick={cartToggle}><ShoppingCart /></span>
                            </Badge>
                            
                        </div>
                </Navbar.Collapse>
            </Navbar>
            </div>
                
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/back-1.jpg"
                alt="Second slide"
                />

            <Carousel.Caption>
                <h3 className="animate__animated animate__fadeInUp">The Best Bath Towels</h3>
                <p>According to Textile Experts</p>
                <button className="slider-btn hvr-bounce-to-bottom">Feedback</button>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/back-2.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="animate__animated animate__fadeInUp">100% Egyptian Cotton Towels</h3>
                <button className="slider-btn hvr-bounce-to-bottom">Shop Now</button>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/back-3.jpg"
                    alt="Third slide"
                    />

                <Carousel.Caption>
                    <h3 className="animate__animated animate__fadeInUp">Eligant Europian Design</h3>
                    <button className="slider-btn hvr-bounce-to-bottom">Shop Now</button>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/back-4.jpg"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h3 className="animate__animated animate__fadeInUp">A Treat Of Luxury</h3>
                    <button className="slider-btn hvr-bounce-to-bottom">Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  
        </div>
    )
}

export default Home
