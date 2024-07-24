import React from "react";
import products from "../../listProducts";
import { Link, useParams } from "react-router-dom";
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, ImageListItem, Typography, Toolbar } from "@mui/material";
import { red } from "@mui/material/colors";



export default function ItemsDetail(){
    
    const { id } = useParams();
    return(
        <Box
            display="flex"
            justifyContent="center"
            margin="20vh"
            flexWrap="wrap"
            boxShadow="0px 6px 10px grey"
        >
            <Box flexDirection="colum" >
                <h2>{products[id-1].name}</h2>
                <img src={products[id-1].img} alt="img" width="350" />
            </Box>
            <Box margin={5} paddingTop={5} width="250px">
                <div style={{ fontWeight: 'bold' }}>{products[id-1].description}</div>
                <p>price: {products[id-1].price}</p>
                <p style={{borderBottom:"solid 3px black",paddingBottom:"7px"}}>Available stock: {products[id-1].stock}</p>
                <Button
                        variant="contained"
                        style={{ backgroundColor: '#000', color: '#fff',marginTop:"120px"}}
                        fullWidth
                        disabled={products[id-1].stock === 0}
                    >
                        Add to cart
                    </Button>
           </Box>
</Box>

    )
}