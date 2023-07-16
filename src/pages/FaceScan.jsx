import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image';
import ProgressBar from '../components/ProgressBar';
import { APP, REG_COMPLETE } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function FaceScan() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/${APP}/${REG_COMPLETE}`);
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
          Face Scan
        </Typography>
        <Image
          src={
            import.meta.env.VITE_ENVIRONEMT === 'dev'
              ? '../src/assets/face_scanner.png'
              : `${import.meta.env.VITE_CDN_URL}/face_scanner.png`
          }
          height="60vh"
        ></Image>
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
