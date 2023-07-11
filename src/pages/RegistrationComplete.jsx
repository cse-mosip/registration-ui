import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import regCompleteImg from "../assets/regComplete.png";
import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const defaultTheme = createTheme();

function RegistrationComplete() {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "90vh" }}
          >
            <Grid item xs={3}>
              <Box
                sx={{
                  width: 450,
                  height: 450,
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "#2E36F1",
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  p: 2,
                }}
              >
                <img src={regCompleteImg} />
                <Typography component="h1" variant="h4">
                  Registration Completed
                </Typography>
                <Button color="primary" variant="contained">
                  Back To Home
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default RegistrationComplete;
