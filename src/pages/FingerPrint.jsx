import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'mui-image';
import ProgressBar from '../components/ProgressBar';
import { APP, EDIT, FACESCAN, FINGERPRINTLOAD } from '../constants/constants';
import { useNavigate, useLocation } from 'react-router-dom';

export default function FingerPrint() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = location?.state?.student;
  const edit = location?.state?.edit;
  const next = location?.state?.next;
  console.log(next)


  const handleNext = () => {
    //TODO: handle fingerprint raw data
    navigate(`/${APP}/${FACESCAN}`, { state: studentData });
    return;
  };

  const handleSave = () => {
    //TODO: handle fingerprint raw data
    navigate(`/${APP}/${EDIT}`, { state: studentData });
    return;
  };

  const handleRequest = async (event) => {

    try {
      if (next == "leftfourfingers") {
        // const result = await Axios.post(
        //   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
        // );
        // if(result){
        // console.log("LeftFourFingers: ", result.data);
        // localStorage.setItem("leftfourfingers",result.data)
        // navigate(`/${APP}/${FINGERPRINTLOAD}`,{ state: {next: "rightfourfingers"} });
        // }
        if (true) {
          console.log("LeftFourFingers: ", "leftbytes");
          localStorage.setItem("leftfourfingers", "leftbytes")
          navigate(`/${APP}/${FINGERPRINTLOAD}`, { state: { next: "rightfourfingers" } });
        }
      } else if (next == "rightfourfingers") {
        // const result = await Axios.post(
        //   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
        // );
        // if(result){
        // console.log("RightFourFingers: ", result.data);
        // localStorage.setItem("rightfourfingers",result.data)
        // navigate(`/${APP}/${FINGERPRINTLOAD}`,{ state: {next: "thumbs"} });
        // }
        if (true) {
          console.log("RightFourFingers: ", "rightbytes");
          localStorage.setItem("rightfourfingers", "rightbytes")
          navigate(`/${APP}/${FINGERPRINTLOAD}`, { state: { next: "thumbs" } });
        }

      } else {
        // const thumbs = await Axios.post(
        //   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
        // );
        // if (thumbs) {
        //   console.log("Thumbs: ", thumbs.data);

        //   const leftfourfingers = localStorage.getItem("leftfourfingers")
        //   const rightfourfingers = localStorage.getItem("rightfourfingers")
        //   //send these leftfourfingers,rightfourfingers and thumbs to gamunu's API
        //   const resultGamunu = await Axios.post(
        //     import.meta.env.VITE_GAMUNU_API_URL + "reg/rcapture",
        //     {
        //       leftfourfingers,
        //       rightfourfingers,
        //       thumbs: thumbs.data
        //     }
        //   );
        //   if (resultGamunu) {
        //     navigate(`/${APP}/${FACESCAN}`, { state: studentData });
        //   }
        // }
        if (true) {
          // console.log("Thumbs: ", thumbs.data);

          const leftfourfingers = localStorage.getItem("leftfourfingers")
          const rightfourfingers = localStorage.getItem("rightfourfingers")
          console.log(leftfourfingers,rightfourfingers)
          //send these leftfourfingers,rightfourfingers and thumbs to gamunu's API
          // const resultGamunu = await Axios.post(
          //   import.meta.env.VITE_GAMUNU_API_URL + "reg/rcapture",
          //   {
          //     leftfourfingers,
          //     rightfourfingers,
          //     thumbs: thumbs.data
          //   }
          // );
          if (true) {
            navigate(`/${APP}/${FACESCAN}`, { state: studentData });
          }
        }

      }

    } catch (error) {
      console.log("Error sending request to the device", error);
    }


  }


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
          
        {next=="leftfourfingers" && "Please insert left hand 4 fingers" ||
        next=="rightfourfingers" && "Please insert right hand 4 fingers" ||
        next=="thumbs" && "Please insert two thumbs"} 
        
  
        </Typography>
        <Image
          src={
          
           next=="leftfourfingers"? import.meta.env.VITE_ENVIRONEMT === "dev"
              ? "../src/assets/left.jpg"
              : `${import.meta.env.VITE_CDN_URL}/left.jpg` : 
           
          next=="rightfourfingers" ? import.meta.env.VITE_ENVIRONEMT === "dev"
              ? "../src/assets/right.jpg"
              : `${import.meta.env.VITE_CDN_URL}/right.jpg` :

         import.meta.env.VITE_ENVIRONEMT === "dev"
              ? "../src/assets/thumbs.jpg"
              : `${import.meta.env.VITE_CDN_URL}/thumbs.jpg`
              
          }
          height="60vh"
        ></Image>
        <br />
        {/* <ProgressBar progress={progress} setProgress={setProgress} /> */}
        {/* {progress === 100 && (
          <Button
            type="button"
            onClick={edit ? handleSave : handleNext}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {edit ? "Save" : "Next"}
          </Button>
        )} */}

        <Button
          type="button"
          onClick={edit ? handleSave : handleRequest}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {edit ? "Save" : next==
          "thumbs"? "Scan Face":
          "Request"}
        </Button>
      </Container>
    </>
  );
}
