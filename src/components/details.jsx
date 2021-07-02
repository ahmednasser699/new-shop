import React from 'react'
import { useParams } from 'react-router-dom'
import {  Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    }
    
 
});

const Details = ({ data }) => {
   
    const { id } = useParams();
    
    const classes = useStyles()
   
    if (!data[id]) return <div>loading...</div>
   
    return (
        <div >
            <Card className={classes.root}>
                           
                <CardActionArea >
                    
                    <CardContent>
                        <div className="first-content">
                            <Typography gutterBottom variant="h5" component="h2">
                                {data[id].title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h3">
                                {data[id].price} $
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                    
                            
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data[id].description}
                    </Typography>
            </Card>
            
                        
        </div>
    )
}

export default Details
