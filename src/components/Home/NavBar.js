import React from "react";
import {  AppBar,Toolbar, Typography} from "@mui/material";


function NavBar(){
  return(
    <>
    <AppBar>
        <Toolbar style={{background:'#b26046'}}>
          <Typography fontFamily="Monospace" letterSpacing={6} variant="h4">Ecommerce</Typography>
        </Toolbar>
      </AppBar>
      {/*<Toolbar id="back-to-top-anchor" />*/ }
      
    </>
  )
}

export default NavBar;