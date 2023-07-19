import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Image from "mui-image";
import Webcam from "react-webcam";
import ProgressBar from "../components/ProgressBar";
import { APP, FINGERPRINTLOAD } from "../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import CustomWebcam from "../components/CustomWebcam";

export default function FaceScan() {
    const [progress, setProgress] = React.useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const studentData = location.state;

    const handleNext = () => {
        console.log("studentData: ", studentData);
        //TODO: handle fingerprint raw data
        navigate(`/${APP}/${FINGERPRINTLOAD}`);
        return;
    };

    return (
        <>
            <Container component="main">
                <Grid container justifyContent={"center"}>
                    <Grid>
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            User Photo
                        </Typography>
                    </Grid>
                </Grid>
                <Grid textAlign={"center"}>
                    <CustomWebcam />
                </Grid>
                <Grid textAlign={"center"}>
                    <Button
                        type="button"
                        onClick={handleNext}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Student Photo
                    </Button>
                </Grid>
                {/* <Image
                    src={
                        import.meta.env.VITE_ENVIRONEMT === "dev"
                            ? "../src/assets/face_scanner.png"
                            : `${import.meta.env.VITE_CDN_URL}/face_scanner.png`
                    }
                    height="60vh"
                ></Image> */}
                <br />
                {/* <ProgressBar progress={progress} setProgress={setProgress} /> */}
            </Container>
        </>
    );
}
