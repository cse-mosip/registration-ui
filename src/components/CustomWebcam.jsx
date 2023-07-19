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
        props.captureImage(imageSrc);
    }, [props]);
    const retake = () => {
        props.setImage(null);
        props.captureImage(null);
    };
    return (
        <div className="container">
            {props.imgSrc ? (
                <img src={props.imgSrc} alt="webcam" height={640} width={480} />
            ) : (
                <Webcam
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
    captureImage: PropTypes.func.isRequired,
    setImage: PropTypes.func.isRequired,
    imgSrc: PropTypes.any,
};
