import React from "react";
import products from "../../listProducts";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, ImageListItem, Typography, Toolbar } from "@mui/material";



export default function ItemsDetail(){
    
    const { id } = useParams();
    return(
        <Card>
            <Toolbar id="back-to-top-anchor" />
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {products[id-1].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {products[id-1].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
}