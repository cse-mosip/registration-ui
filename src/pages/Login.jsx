import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import React from 'react';
import UoMLogo from '../assets/image/uom_logo.png';

export default function LogIn() {
  const theme = createTheme({
    palette: {
      text: {
        primary: '#ofofof',
        secondary: '#b0bec5',
        disabled: '#757575',
        hint: '#9e9e9e',
      },
    },

    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#0f0f0f',
            borderRadius: '4px',
            '& $notchedOutline': {
              borderColor: '#424242',
            },
            '&:hover $notchedOutline': {
              borderColor: '#ffffff',
            },
            '&$focused $notchedOutline': {
              borderColor: '#ffffff',
            },
          },
          notchedOutline: {},
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#3244A6',
            '&.Mui-focused': {
              color: '#3244A6',
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: 0,
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            <img src={UoMLogo} />
          </Grid>
          <Grid
            item
            minWidth="400px"
            sx={{
              borderRadius: '5px',
              padding: '50px',
              border: '2px solid #3244A6',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Grid item xs={12} mb={4}>
              <TextField
                fullWidth
                id="username"
                label="Username"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} mb={2}>
              <TextField
                fullWidth
                id="passowrd"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item mb={1}>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button sx={{ minWidth: '200px' }} variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
