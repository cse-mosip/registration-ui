import Webcam from "react-webcam";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import { useRef, useState, useCallback } from "react"; // import useRef
import { Fab } from "@mui/material";
export default function CustomWebcam() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const videoConstraints = {
        width: 480,
        height: 640,
        facingMode: "user",
    };
    // create a capture function
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);
    const retake = () => {
        setImgSrc(null);
    };
    return (
        <div className="container">
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                <Webcam
                    height={640}
                    width={480}
                    ref={webcamRef}
                    videoConstraints={videoConstraints}
                />
            )}
            <div className="btn-container">
                {imgSrc ? (
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
