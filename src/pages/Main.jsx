import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { styled } from "@mui/material/styles";

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

function MainComponent() {
  return (
    <Box>
      <Box>
        <CssBaseline />
        <NavBar />
        <Main>
          <Outlet />
        </Main>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}

export default MainComponent;
