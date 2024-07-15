import React, { useEffect } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from "axios";

export default function FindUsers() {
    const [users, setUsers] = React.useState([])
    const [openDialog, setOpenDialog] = React.useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/ecoconnect/getRags')
            .then((Response) => {
                setUsers(Response.data)
            })
            .catch((error) => {
                console.error('Error fetching rag data : ', error);
            })
    }, [])

    const handleClick = (id) => {
        setUsers((currentUsers) =>
          currentUsers.filter((user) => user.id !== id)
        ) 
        setOpenDialog(true)
        
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: 'max-content',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            paddingY: '1.5rem',
          }}
        >
          <h1 style={{ paddingBottom: '1rem' }}>Find Users</h1>
          <p>Find users who has Rags for you !!</p>
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', padding: '0 1rem' }}
        >
          <h1 style={{ padding: '1.5rem 0' }}>Current Requests :</h1>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            {users.map((user) => {
              return (
                <Box
                  key={user.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: '1rem',
                    border: '1px solid black',
                    borderRadius: '10px',
                    width: '60%',
                    alignContent: 'center',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item lg={12}>
                      <Typography variant="h6">
                        <b>{user.name}</b>
                      </Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography variant="body1">
                        <b>Address :</b> {user.address}
                      </Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography variant="body1">
                        <b>Phone</b> : {user.phone}
                      </Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography variant="body1">
                        <b>Rag Type</b> : {user.ragType}
                      </Typography>
                    </Grid>
                    <Grid item lg={6}>
                      <Typography variant="body1">
                        <b>Quantity</b> : {user.quantity} per kg
                      </Typography>
                    </Grid>
                    <Grid item lg={12}>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          handleClick(user.id)
                        }}
                      >
                        Accept
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle sx={{ backgroundColor: green[500], color: '#fff' }}>
            Order Accepted 🎉
          </DialogTitle>
          <DialogContent dividers sx={{ backgroundColor: green[50] }}>
            <Typography gutterBottom>
              Your order has been successfully accepted. Thank you for your
              contribution!
            </Typography>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: green[100] }}>
            <Button onClick={handleClose} sx={{ color: green[900] }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
}