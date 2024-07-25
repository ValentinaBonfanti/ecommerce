import React from "react";
import { Link } from "react-router-dom";
import {  AppBar,Toolbar, Typography} from "@mui/material";
import intiLogo from "../../img/LOGO INTI 2.jpeg"

function NavBar(){
  return(
    <>
    <AppBar>
        <Toolbar style={{background:'#221711'}}>
        <Link to="/">
            <img src={intiLogo} alt="img" style={{width:'120px',height:'80px'}}/>
          </Link>
        </Toolbar>
      </AppBar>
      {/*<Toolbar id="back-to-top-anchor" />
      <Typography color="white" fontFamily="Monospace" letterSpacing={6} variant="h4">Ecommerce</Typography>
      */ }
      
    </>
  )
}

export default NavBar;