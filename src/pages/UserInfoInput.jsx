import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import { Link } from "react-router-dom";
import { APP, FACEIDLOAD } from "../constants/constants";
import { FINGERPRINTLOAD } from "../constants/constants";

// TODO remove, this demo shouldn't need to reset the theme.

export default function InfoAsker() {
  const [faculty, setFaculty] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              border: "1px solid blue",
              borderRadius: "4px",
              padding: "16px",
              backgroundColor: "#FFFFFF",
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              id="firstName"
              autoComplete="first name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              autoComplete="last name"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="faculty-select-label">Faculty</InputLabel>
              <Select
                labelId="faculty-select-label"
                id="faculty-select"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
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
            </FormControl>
            <Button
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
              to={`/${APP}/${FACEIDLOAD}`}
            >
              Scan Face
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Student
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
