import React,{useEffect} from 'react'
import { Container, Grid } from '@material-ui/core'


const Products = () => {
   
    useEffect(() => {
        let moves = document.querySelectorAll(".product .image");
        window.addEventListener('scroll', function () {
            let val = window.scrollY;
            moves.forEach(move => {
                move.style.top = -val * .06 + 'px';
            })
        })
    }, [])
    return (
        <div className='products'>
            <Container>
                <div className="header">My new products</div>
                <Grid item xs={12}>
                    <div className="section" id="sec1">
                        <div className="product" data-aos="fade-up">
                        <div className="image" >
                                <div className="paper" id='aa'></div>
                                <img src="/images/cloth.jpg" alt="cloth"  />
                         <div className="paper2" id='aaa'></div>        
                        </div>
                        <div className="info">
                            <h4>Textile Experts</h4>
                            <p>LOREM IPSUM DOLOR SIT AMET IPSUM</p>
                            <div className="hbtn">
                                <button id='btn'>Shop Now</button>
                                <div id='bb'></div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="product" data-aos="fade-up">
                        <div className="image">
                            <div className="paper" id='aa'>
                            </div><img src="/images/suit.jpg" alt="cloth" />
                            <div className="paper2" id='aaa'></div>
                        </div>
                        <div className="info">
                            <h4>best suits for men</h4>
                            <p>OUR PANEL LOVED THE FEEL AND GAVE THESE TOWELS.</p>
                            <div className="hbtn">
                                <button id='btn'>Shop Now</button>
                                <div id='bb'></div>
                            </div>
                        </div>
                    </div>
                       
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                   <div className="section" id="sec2">
                    
                    <div className="product" data-aos="fade-up">
                            <div className="image">
                                <div className="paper" id='aa'></div>
                                <img src="/images/ties.jpg" alt="cloth" />
                                <div className="paper2" id='aaa'></div>
                            </div>
                        <div className="info">
                            <h4>Soft Colors</h4>
                                <p>LOREM IPSUM DOLOR SIT AMET IPSUM LOREM IPSUM DOLOR SIT AMET IPSUM LOREM IPSUM DOLOR SIT AMET IPSUM</p>
                                
                                   <div className="hbtn">
                                    <button id='btn'>Shop Now</button>
                                    <div id='bb'></div>
                                </div>
                               
                        </div>
                    </div>
                   
                    
                    <div className="product" data-aos="fade-up">
                            <div className="image">
                                <div className="paper" id='aa'></div>
                                <img src="/images/towel.jpg" alt="cloth" />
                                <div className="paper2" id='aaa'></div>
                            </div>
                        <div className="info">
                            <h4>Face Cloths</h4>
                            <p>LOREM IPSUM DOLOR SIT AMET IPSUM LOREM IPSUM DOLOR SIT AMET IPSUM</p>
                              <div className="hbtn">
                                    <button id='btn'>Shop Now</button>
                                    <div id='bb'></div>
                                </div>
                        </div>
                    </div>
                       
                        </div>
                    </Grid>
               
            </Container>
        </div>
    )
    
}


export default Products

 