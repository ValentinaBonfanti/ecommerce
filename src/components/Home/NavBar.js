import React from "react";
import { Link } from "react-router-dom";
import {  AppBar,Toolbar, Typography} from "@mui/material";


function NavBar(){
  return(
    <>
    <AppBar>
        <Toolbar style={{background:'#b26046'}}>
        <Link to="/">
          <Typography color="white" fontFamily="Monospace" letterSpacing={6} variant="h4">Ecommerce</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {/*<Toolbar id="back-to-top-anchor" />*/ }
      
    </>
  )
}

export default NavBar;