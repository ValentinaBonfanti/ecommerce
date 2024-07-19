import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/ItemCard.module.css";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, ImageListItem, Typography } from "@mui/material";




export default function ItemsCard({id, name, img, description, price}) {
  
    return(
        <Card className={styles.container}>
          <Link to={`/items/${id}`}>
            <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="black">
               {name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Price:{price}
             </Typography>
            </CardContent>
            
             <div className={styles.imgContainer}>
              <img src={img} className={styles.img} title={name} alt="img not found" width="200px" height="250px"/>
             </div>
             
             <CardActions >
             <Button variant="contained" color="warning"className={styles.button}>
              Details
             </Button>
             </CardActions>
             </CardActionArea>
       </Link>
      </Card>
    )
}