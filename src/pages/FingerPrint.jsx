import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image';
import ProgressBar from '../components/ProgressBar';
import { APP, FACESCAN } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function FingerPrint() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/${APP}/${FACESCAN}`);
    return;
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Image src="../src/assets/image/fingerprint.jpg" height="60vh"></Image>
        <br />
        <ProgressBar progress={progress} setProgress={setProgress} />
        {progress === 100 && (
          <Button
            type="button"
            onClick={handleNext}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Next
          </Button>
        )}
      </Container>
    </>
  );
}
