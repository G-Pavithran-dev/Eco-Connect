import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
        
            <AppBar position="sticky">
        <Toolbar
          sx={{
            backgroundColor: "white",
            color: "black",
            display: "flex",
            justifyContent: "space-around",
            lineHeight: "0.5rem",
          }}
        >
          <img src='/images/logo-no-background.png' style={{width:'12rem'}} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "20%",
              marginLeft: "8%",
              marginRight: "8%",
            }}
          >
            <Typography sx={{ fontWeight: "550" }}>For Ragger</Typography>
            <Typography sx={{ fontWeight: "550" }}>For Consumer</Typography>
          </div>
          <Typography sx={{ fontWeight: "550" }}>Support</Typography>
        </Toolbar>
      </AppBar>
       
    );
}

export default Navbar;
