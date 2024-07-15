import React from 'react'
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  InputAdornment,
} from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Looks1Icon from '@mui/icons-material/LooksOne'
import Looks2Icon from '@mui/icons-material/LooksTwo'
import Looks3Icon from '@mui/icons-material/Looks3'
import './rag_picker.css'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

export default function RagPicker() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    address: '',
    type_of_rag: '',
    expected_price: 0,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <Box
      className="rag-pick"
      sx={{
        display: 'flex',
        width: '98.94vw',
        flexDirection: 'column',
        height: 'auto',
      }}
    >
      <Box className="rag-top">
        <Box className="rag-top-content">
          <p className="rag-top-p">
            More than just rag pickers,
            <br />
            We&apos;re Eco-Connectors.
          </p>
        </Box>
        <Box className="rag-join-form">
          <Box
            sx={{
              width: '50%',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '7px',
            }}
            component={'form'}
            onSubmit={handleSubmit}
          >
            <h2 style={{ textAlign: 'center' }}>Join as eco-connecter</h2>
            <TextField
              id="name"
              name="name"
              fullWidth
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              id="phone"
              name="phone"
              fullWidth
              label="Phone"
              type="tel"
              variant="outlined"
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              id="address"
              name="address"
              fullWidth
              type="text"
              label="Address"
              variant="outlined"
              margin="normal"
              value={formData.address}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Type of Rag</InputLabel>
              <Select
                value={formData.type_of_rag}
                onChange={(e) =>
                  setFormData({ ...formData, type_of_rag: e.target.value })
                }
                label="Type of Rag"
              >
                <MenuItem value="metal">Metal</MenuItem>
                <MenuItem value="paper">Paper</MenuItem>
                <MenuItem value="plastic">Plastic</MenuItem>
                <MenuItem value="glass">Glass</MenuItem>
                <MenuItem value="mixed">Mixed</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              id="expected_price"
              name="expected_price"
              label="Expected Price"
              type="number"
              variant="outlined"
              margin="normal"
              value={formData.expected_price}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">per kg</InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '10rem', fontSize: 18 }}
            >
              Join
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '4rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          Why join us?
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ textAlign: 'center', paddingLeft: '15rem' }}
        >
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/earn-money.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Earn money</Typography>
              <Typography>
                Turn your rags into cash! Our app connects you with customers
                looking to recycle, letting you earn a steady income on your own
                schedule.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/eco-friendly.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Eco-friendly</Typography>
              <Typography>
                Our platform promotes a circular economy by giving valuable
                materials a second life. Join us and make a difference for the
                planet!
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/flexible-hrs.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Flexible hours</Typography>
              <Typography>
                No fixed schedule, no boss breathing down your neck. Our app
                gives you the freedom to work at your own pace and set your own
                hours.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ width: '50%' }}>
              <img
                src="/images/easy-to-use.png"
                style={{ width: '8rem', height: '8rem' }}
              />
              <Typography variant="h5">Easy to use</Typography>
              <Typography>
                Simple to use and easy to navigate, our work makes it a breeze
                to connect with customers and manage your jobs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '4rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          How it works?
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item lg={4}>
            <Looks1Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Sign up</Typography>
            <Typography>Fill the form above to join us.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks2Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Collect Rag</Typography>
            <Typography>Collect rag from your area.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks3Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Get paid</Typography>
            <Typography>Get paid for the waste you collect.</Typography>
          </Grid>
        </Grid>
        
      </Box>
      <Footer />
    </Box>
  )
}
