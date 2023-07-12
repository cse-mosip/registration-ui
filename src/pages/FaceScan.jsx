import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image';
import ProgressBar from '../components/ProgressBar';
import { APP, HOME } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function FaceScan() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/${APP}/${HOME}`);
    return;
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
          }}
        >
          Face Scan
        </Typography>
        <Image src="../src/assets/image/face_scanner.svg" height="60vh"></Image>
        <br />
        <ProgressBar progress={progress} setProgress={setProgress} />
        {progress === 100 && (
          <Button
            type="button"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Student
          </Button>
        )}
      </Container>
    </>
  );
}
