import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { APP, ASKINFO, VIEW } from "../constants/constants";

const items = [
  {
    image:
      "https://icons.veryicon.com/png/o/miscellaneous/management-console-icon-update-0318/add-user-25.png",
    title: "Add User",
    path: ASKINFO,
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/33/33308.png",
    title: "View Registered Students",
    path: VIEW,
  },
];

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#3b42f2",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        Identity Management Platform
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "25px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            to={`/${APP}/${item.path}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                border: "3px solid black",
                borderRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 5,
                width: "200px",
                height: "200px",
                gap: "15px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography align="center" variant="h6">
                {item.title}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
