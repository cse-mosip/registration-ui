import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { APP, HOME } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import Image from "mui-image";

const defaultTheme = createTheme();

function EditComplete() {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
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
                <Image
                  src={
                    import.meta.env.VITE_ENVIRONEMT === "dev"
                      ? "../src/assets/regComplete.png"
                      : `${import.meta.env.VITE_CDN_URL}/regComplete.png`
                  }
                  width="200px"
                  height="200px"
                ></Image>
                <Typography component="h1" variant="h4">
                  Updated Successfully
                </Typography>
                <Button
                  onClick={() => {
                    navigate(`/${APP}/${HOME}`);
                  }}
                  color="primary"
                  variant="contained"
                >
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

export default EditComplete;
