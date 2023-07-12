import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image'
import ProgressBar from '../components/ProgressBar';

export default function FingerPrint() {

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
        <Image src="../src/assets/image/fingerprint.jpg" height="60vh"></Image>
        <br/>
        <ProgressBar/>
        
      </Container>
    </>
  );
}
