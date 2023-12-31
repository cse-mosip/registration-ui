import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { APP } from '../constants/constants';
import Image from 'mui-image';
import axios from "axios";
import {useState} from "react";

export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    setErrors({});
    const newErrors = {};
    if (username.length === 0) {
      newErrors.username = 'Username must not be empty';
    }

    if (password.length === 0) {
      newErrors.password = 'Passowrd must not be empty';
    }
    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }
    else {
      axios.post(import.meta.env.VITE_APP_API_URL +'/api/authorization/signIn', {
        email: username,
        password: password
      }).then((data)=>{
        console.log("Login successfull", data);
        sessionStorage.setItem("token", data.data);
        navigate(`/${APP}`);
        window.location.reload();
        return;
      }).catch((err)=>{
        console.log("Login failed", err);
        newErrors.username = 'Incorrect email or password';
        newErrors.password = 'Incorrect email or password';
        setErrors(newErrors);
        return;
      });
    }
  };
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
            mb={2}
            sx={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={
                import.meta.env.VITE_ENVIRONEMT === 'dev'
                  ? '../src/assets/uom_logo.png'
                  : `${import.meta.env.VITE_CDN_URL}/uom_logo.png`
              }
              width="200px"
            ></Image>
          </Grid>
          <Grid
            item
            minWidth={{ xs: '0px', md: '400px' }}
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
                value={username}
                id="username"
                label="Email"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
                error={errors.username !== undefined}
              />
              {errors.username && (
                <FormHelperText error>{errors.username}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} mb={2}>
              <TextField
                fullWidth
                type="password"
                value={password}
                id="passowrd"
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password !== undefined}
              />
              {errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </Grid>
            <Grid item mb={1}>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                onClick={handleSubmit}
                sx={{ minWidth: '200px' }}
                variant="contained"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
