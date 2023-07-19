import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { APP, FINGERPRINTLOAD } from "../constants/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { Divider, Grid } from "@mui/material";
import CustomWebcam from "../components/CustomWebcam";
import FileDropZone from "../components/FileDropZone";

export default function FaceScan() {
    const [imgSrc, setImgSrc] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const studentData = location.state;

    const captureImage = (image) => {
        console.log(image);
    };

    const handleNext = () => {
        console.log("studentData: ", studentData);
        //TODO: handle fingerprint raw data
        navigate(`/${APP}/${FINGERPRINTLOAD}`);
        return;
    };

    const setImage = (image) => {
        setImgSrc(image);
    };

    return (
        <>
            <Container component="main">
                <Grid
                    container
                    mt={5}
                    textAlign={"center"}
                    justifyContent={"center"}
                >
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
                <Grid
                    container
                    mt={5}
                    textAlign={"center"}
                    justifyContent={"center"}
                >
                    <CustomWebcam
                        captureImage={captureImage}
                        imgSrc={imgSrc}
                        setImage={setImage}
                    />
                </Grid>
                <Grid
                    container
                    mt={5}
                    textAlign={"center"}
                    justifyContent={"center"}
                >
                    <Divider
                        sx={{ width: 480 }}
                        orientation="horizontal"
                        flexItem
                    >
                        Or
                    </Divider>
                </Grid>

                <Grid
                    container
                    mt={5}
                    textAlign={"center"}
                    justifyContent={"center"}
                >
                    <FileDropZone setImage={setImage} />
                </Grid>
                <Grid
                    container
                    mt={5}
                    textAlign={"center"}
                    justifyContent={"center"}
                >
                    <Button
                        type="button"
                        onClick={handleNext}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Student Photo
                    </Button>
                </Grid>
                <br />
            </Container>
        </>
    );
}
