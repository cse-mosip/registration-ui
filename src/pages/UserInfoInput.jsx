import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { FormHelperText } from '@mui/material';
import { APP, FINGERPRINTLOAD } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

export default function InfoAsker() {

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [student, setStudent] = useState({index:'', firstName:'', lastName:'', faculty:'', fingerPrint:'', facePrint:''}); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", student)
    const data = new FormData(event.currentTarget);
    setErrors({});
    const newErrors = {};
    let isError = false;
    if (!data.get('index')) {
      newErrors.index = 'index no is required';
      isError = true;
    }
    if (!data.get('firstName')) {
      newErrors.firstName = 'first name is required';
      isError = true;
    }
    if (!data.get('lastName')) {
      newErrors.lastName = 'last name is required';
      isError = true;
    }
    if (!student.faculty) {
      newErrors.faculty = 'faculty is required';
      isError = true;
    }

    if (isError) {
      setErrors(newErrors);
      return;
    }

    navigate(`/${APP}/${FINGERPRINTLOAD}`, {state: student});
  };

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;

    switch (name){
      case "index":
        setStudent((cur)=> {return {...cur, index:value}});
        break;
      case "firstName":
        setStudent((cur)=> {return {...cur, firstName:value}});
        break;   
      case "lastName":
        setStudent((cur)=> {return {...cur, lastName:value}});
        break;   
    }

  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Student
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              border: '1px solid blue',
              borderRadius: '4px',
              padding: '16px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="index"
              label="Index Number"
              name="index"
              autoComplete="index"
              autoFocus
              value = {student.index}
              onChange={handleChange}
            />
            {errors.index && (
              <FormHelperText error>{errors.index}</FormHelperText>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              id="firstName"
              autoComplete="first name"
              value = {student.firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <FormHelperText error>{errors.firstName}</FormHelperText>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              autoComplete="last name"
              value={student.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <FormHelperText error>{errors.lastName}</FormHelperText>
            )}
            <FormControl fullWidth margin="normal">
              <InputLabel id="faculty-select-label">Faculty *</InputLabel>
              <Select
                labelId="faculty-select-label"
                id="faculty-select"
                value={student.faculty}
                onChange={(e) => setStudent((cur)=> {return {...cur, faculty: e.target.value}})}
                label="Faculty"
              >
                <MenuItem value="Engineering Faculty">
                  Engineering Faculty
                </MenuItem>
                <MenuItem value="Architecture Faculty">
                  Architecture Faculty
                </MenuItem>
                <MenuItem value="Business Faculty">Business Faculty</MenuItem>
                <MenuItem value="Medical Faculty">Medical Faculty</MenuItem>
              </Select>
              {errors.faculty && (
                <FormHelperText error>{errors.faculty}</FormHelperText>
              )}
            </FormControl>
            {/* <Button
              sx={{ mt: 2 }}
              fullWidth
              variant="outlined"
              color="secondary"
              startIcon={<FingerprintIcon />}
              component={Link}
              to={`/${APP}/${FINGERPRINTLOAD}`}
            >
              Scan Fingerprint
            </Button>
            <Button
              sx={{ mt: 2 }}
              fullWidth
              variant="outlined"
              color="secondary"
              startIcon={<SensorOccupiedIcon />}
              component={Link}
              to={`/${APP}/${FACESCAN}`}
            >
              Scan Face
            </Button> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
