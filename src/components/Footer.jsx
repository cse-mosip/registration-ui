import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import theme from "../Theme";

const StyledBox = styled(
  Box,
  theme
)({
  position: "static",
  bottom: 0,
  left: 0,
  right: 0,
  // width: "100%",
  background: theme.palette.background.paper,
  padding: "1rem",
  textAlign: "center",
  py: 3,
});

const Footer = () => {
  return (
    <StyledBox sx={{ alignContent: "flex-end" }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} UoM CSE. All rights reserved.
      </Typography>
    </StyledBox>
  );
};

export default Footer;
