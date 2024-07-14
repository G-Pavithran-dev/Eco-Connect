import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          backgroundColor: 'white',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-around',
          lineHeight: '0.5rem',
        }}
      >
        <Link to="/" className="logo">
          <img
            src="/images/logo-no-background.png"
            style={{ width: '12rem' }}
          />
        </Link>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '20%',
            marginLeft: '8%',
            marginRight: '8%',
          }}
        >
          <Link to="/findRagPickers">
            <Typography sx={{ fontWeight: '550' }}>For Consumers</Typography>
          </Link>
          <Link to="/findRags">
            <Typography sx={{ fontWeight: '550' }}>For Rag Pickers</Typography>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '15%'
          }}
        >
        <Link to="/support">
          <Typography sx={{ fontWeight: '550' }}>Support</Typography>
        </Link>
        <Link to="/login">
          <Typography sx={{ fontWeight: '550' }}>SignIn</Typography>
        </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
