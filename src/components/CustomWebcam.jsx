import PropTypes from "prop-types";
import Webcam from "react-webcam";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import { useRef, useCallback } from "react";
import { Fab } from "@mui/material";

export default function CustomWebcam(props) {
    const webcamRef = useRef(null);

    const videoConstraints = {
        width: 480,
        height: 640,
        facingMode: "user",
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        props.setImage(imageSrc);
    }, [props]);
    const retake = () => {
        props.setImage(null);
    };
    return (
        <div className="container">
            {props.imgSrc ? (
                <img
                    src={props.imgSrc}
                    alt="webcam"
                    height={640}
                    width={480}
                    style={{ objectFit: "cover" }}
                />
            ) : (
                <Webcam
                    style={{
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "#3b42f2",
                        background: "#3b42f2",
                        backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/2522/2522138.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center center",
                    }}
                    height={640}
                    width={480}
                    ref={webcamRef}
                    videoConstraints={videoConstraints}
                />
            )}
            <div className="btn-container">
                {props.imgSrc ? (
                    <Fab color="primary" aria-label="add" onClick={retake}>
                        <ReplayIcon />
                    </Fab>
                ) : (
                    <Fab color="primary" aria-label="add" onClick={capture}>
                        <CameraAltIcon />
                    </Fab>
                )}
            </div>
        </div>
    );
}

CustomWebcam.propTypes = {
    setImage: PropTypes.func.isRequired,
    imgSrc: PropTypes.any,
};
