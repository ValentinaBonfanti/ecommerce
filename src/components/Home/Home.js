
import { Link, Outlet } from "react-router-dom";
import products from "../../listProducts";
import ItemsCard from "../Items/ItemsCard";
import styles from "../../css/Home.module.css";
import {  AppBar,Toolbar, Typography,Image, Box } from "@mui/material";
import background from "../../img/background.webp"


const Home = () => {
  return (
    <>
     <AppBar>
        <Toolbar>
          <Typography variant="h6">Ecommerce</Typography>
        </Toolbar>
      </AppBar>
      
      <Toolbar id="back-to-top-anchor" />
      <Box className={styles.box}>
      <img src={background} alt= "not found" width="100%" height="auto"/>
      </Box>
    <div className={styles.itemContainer}>
  {
             products && products
            .map((item) => 
             {
                 return (
                 <div key={item.id}>
                 <ItemsCard
                 name={item.name}
                 img={item.img}
                 id={item.id}
                 description={item.description}
                 price={item.price}
                 
                 />
                 </div>
                 )
             })
            
             }
      </div>
    </>
  );
};
export default Home;