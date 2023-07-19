import { Grid, Paper } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageIcon from "@mui/icons-material/Image";
import PropTypes from "prop-types";

function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

export default function FileDropZone(props) {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result;
                const res = arrayBufferToBase64(binaryStr);
                props.setImage("data:image/webp;base64," + res);
                console.log(binaryStr);
                console.log(res);
            };
            reader.readAsArrayBuffer(file);
        });
    }, [props]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpeg", ".jpg"],
        },
        multiple: false,
    });

    return (
        <Grid item width={480}>
            <Paper elevation={1}>
                <div
                    {...getRootProps()}
                    style={{
                        width: 480,
                        height: "20%",
                        border: "1px solid #eeffff",
                    }}
                >
                    <input {...getInputProps()} multiple={false} />
                    {isDragActive ? (
                        <p>
                            <ImageIcon />
                        </p>
                    ) : (
                        <p>Drag and drop the image</p>
                    )}
                </div>
            </Paper>
        </Grid>
    );
}

FileDropZone.propTypes = {
    setImage: PropTypes.func.isRequired,
};
