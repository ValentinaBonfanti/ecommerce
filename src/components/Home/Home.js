
import { Link, Outlet } from "react-router-dom";
import products from "../../listProducts";
import ItemsCard from "../Items/ItemsCard";
import styles from "../../css/Home.module.css";
import {  AppBar,Toolbar, Typography,Image, Box } from "@mui/material";
import background from "../../img/background.webp";
import Carrusel from "./Carrusel";
import NavBar from "./NavBar";

const Home = () => {
 
  return (
    <>
      <NavBar/>
      <Carrusel/>
      {/*<Box className={styles.box}>
      <img src={background} alt= "not found" width="100%" height="auto"/>
      </Box>*/}

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