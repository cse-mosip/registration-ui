import React from 'react';
import Button from '@mui/material/Button';
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
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
          }}
        >
          FingerPrint Scan
        </Typography>
        <Image
          src={
            import.meta.env.VITE_ENVIRONEMT === 'dev'
              ? '../src/assets/image/fingerprint.jpg'
              : `${import.meta.env.VITE_CDN_URL}/image/fingerprint.jpg`
          }
          height="60vh"
        ></Image>
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
