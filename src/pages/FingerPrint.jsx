import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image';
import ProgressBar from '../components/ProgressBar';
import { APP, EDIT, FACESCAN } from '../constants/constants';
import { useNavigate, useLocation } from 'react-router-dom';

export default function FingerPrint() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = location.state.student;
  const edit = location.state.edit;
 
  const handleNext = () => {
    //TODO: handle fingerprint raw data
    navigate(`/${APP}/${FACESCAN}`, {state: studentData});
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
            onClick={edit ? handleSave : handleNext}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {edit ? "Save" : "Next"}
          </Button>
        )}
      </Container>
    </>
  );
}
