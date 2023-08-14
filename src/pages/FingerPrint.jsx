import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image';
import ProgressBar from '../components/ProgressBar';
import { APP, EDIT, REG_COMPLETE } from '../constants/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function FingerPrint() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = location.state.student;
  const edit = location.state.edit;
 
  const handleSubmit = async () => {
    //TODO: handle faceprint raw data

    const bodyFormData = new FormData();
    for (var key in studentData) {
        bodyFormData.append(key, studentData[key]);
    }

    const endPoint = import.meta.env.VITE_APP_API_URL + "/api/student/";

    try {
        await axios
            .post(endPoint, studentData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization" : "Bearer " + sessionStorage.getItem("token") || "",
                },
            })
            .then((res) => {
                console.log("Registration Result: ", res.data);
                navigate(`/${APP}/${REG_COMPLETE}`);
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log("Error registering student", error);
    }

    return;
};

  const handleSave = () => {
    //TODO: handle fingerprint raw data
    navigate(`/${APP}/${EDIT}`, { state: studentData });
    return;
  };
  
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          FingerPrint Scan
        </Typography>
        <Image
          src={
            import.meta.env.VITE_ENVIRONEMT === "dev"
              ? "../src/assets/fingerprint.jpg"
              : `${import.meta.env.VITE_CDN_URL}/fingerprint.jpg`
          }
          height="60vh"
        ></Image>
        <br />
        <ProgressBar progress={progress} setProgress={setProgress} />
        {progress === 100 && (
          <Button
            type="button"
            onClick={edit ? handleSave : handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {edit ? "Save" : "Register User"}
          </Button>
        )}
      </Container>
    </>
  );
}
