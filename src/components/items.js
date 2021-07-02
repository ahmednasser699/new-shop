import React, { useState} from 'react'
import{Link} from 'react-router-dom'
import { Grid, Container, Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button,Badge } from '@material-ui/core'
import {FavoriteBorder, Remove, Add} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles({
  root: {
        maxWidth: 345,
      position:'relative'
  },
  media: {
    height: 260,
  },
});

const Items = ({ items, addToCart, decrease, increase, cart}) => {
    const [imageColor, setImageColor] = useState('black');
    const [itemId, setitemId] = useState('');
    const [filter, setFilter] = useState('bath')
   
    const classes = useStyles()
    
    const mouseOver = (item, color) => {
        
        setitemId(item.id)
        setImageColor(color)
        
    }
    const count = (item) => {
        
        let num = 0;
        let index = cart.indexOf(item)
        
            
            cart.forEach(element => {
               
                if (item.id === element.id) {
                    num=cart[index].quantity
                }
            });
            if (num !== 0) {
                return num
            }
        
        
    }
   
    
    return (
        <div className="items">
            <Container>
                <div className="headings">
                   <h2>FEATURED PRODUCTS</h2>
                    <div className="filters">
                        <span className={filter === 'bath' ? "active" : ""} onClick={()=>setFilter('bath')}>
                            bath towels
                        </span>
                        <span onClick={()=>setFilter('bed')} className={filter === 'bed' ? "active" : ""}>
                            Bed sheets
                        </span>
                        <span onClick={()=>setFilter('ball')} className={filter === 'ball' ? "active" : ""}>
                            Foot ball
                        </span>
                    </div>
                </div>
                <Grid container spacing={3} className="animate__animated animate__fadeIn" >
                    {items.filter(filtered => filtered.category === filter).map(item => (
                        <Grid key={item.id} item md={3} sm={6} xs={12} className="animate__animated animate__fadeIn">
                            <Badge badgeContent={item.discount} >
                            <Card className={classes.root}>
                                {/* <div className="discount">{ item.discount}</div> */}
                                 
                                
                           
                            <Link to={`products/${item.id}`} >
                            <CardActionArea >
                                <CardMedia 
                                className={classes.media}
                                image={item.id=== itemId? item.images[imageColor]:item.images['black']}
                                title={item.title}
                                        />
                                </CardActionArea>        
                                </Link>
                                
                                <div className='addbtns'>
                                    <Button className='chbtn' type="button" size="small" onClick={()=>decrease(item)} ><Remove /></Button>
                                    <Typography variant='h4'>{count(item)}</Typography>
                                    <Button className='chbtn' type="button" size="small" onClick={()=>increase(item)} ><Add /></Button>
                                </div>
                                <CardContent>
                                <div className="first-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h3">
                                    {item.price} $
                                </Typography>
                                </div>
                                </CardContent>
                                
                                
                                <div className="colors">        
                                        {item.colors.map(color => (
                                            <div key={color} className="color" style={{backgroundColor:`${color}`}} onMouseOver={()=>mouseOver(item, color)}></div>
                                        ))}
                                </div>            
                                <Typography variant="body2" color="textSecondary" component="p">
                                   {item.description}
                                </Typography>
                                
                            
                            <CardActions>
                                <span className="addcart hvr-bounce-to-bottom" onClick={()=>addToCart(item)}>
                                        + Add To Cart     
                                </span>
                                <span ><FavoriteBorder /></span>
                            </CardActions>
                            </Card>
                             </Badge>
                        </Grid>  
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Items
