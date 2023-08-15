import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "mui-image";
import { socket } from "../helpers/socket";
// import ProgressBar from '../components/ProgressBar';
import {
	APP,
	EDIT,
	REG_COMPLETE,
	FINGERPRINTLOAD,
} from "../constants/constants";
// import { APP, EDIT, FACESCAN, FINGERPRINTLOAD } from '../constants/constants';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const LEFTFOURFINGERS = "leftfourfingers";
const RIGHTFOURFINGERS = "rightfourfingers";
const THUMBS = "thumbs";
export default function FingerPrint() {
	// const [progress, setProgress] = React.useState(0);
	const navigate = useNavigate();
	const location = useLocation();
	const studentData = location.state.student;
	const edit = location.state.edit;
	1;

	// const studentData = location?.state?.student;
	// const edit = location?.state?.edit;
	// const next = location?.state?.next;
	// console.log(next)
	const [page, setPage] = useState(LEFTFOURFINGERS);

	// const handleNext = () => {
	//   //TODO: handle fingerprint raw data
	//   navigate(`/${APP}/${FACESCAN}`, { state: studentData });1

	useEffect(() => {
		socket.removeAllListeners("fingerprintData");
		// if (resource === null) return;
		socket.on("fingerprintData", async (fingerprintData) => {
			try {
				// const authenticationData =
				// await FingerprintAuthServices.fpAuthenticate(
				//   parseInt(resource.id),

				// const result = await Axios.post(
				//   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
				// );
				// if(result){
				// console.log("LeftFourFingers: ", result.data);
				// localStorage.setItem(LEFTFOURFINGERS,result.data)
				// navigate(`/${APP}/${FINGERPRINTLOAD}`,{ state: {next: RIGHTFOURFINGERS} });
				// }

				if (page == LEFTFOURFINGERS) {
					console.log("left fourfingers recieved");
					localStorage.setItem(
						LEFTFOURFINGERS,
						JSON.stringify(fingerprintData)
					);
					// navigate(`/${APP}/${FINGERPRINTLOAD}`, {
					// 	state: { next: RIGHTFOURFINGERS },
					// });
					setPage(RIGHTFOURFINGERS);
				} else if (page == RIGHTFOURFINGERS) {
					console.log("right fourfingers recieved");
					localStorage.setItem(
						RIGHTFOURFINGERS,
						JSON.stringify(fingerprintData)
					);
					setPage(THUMBS);
					// navigate(`/${APP}/${FINGERPRINTLOAD}`, { state: { next: THUMBS } });
				} else {
					console.log("thumbs recieved");
					const leftfourfingers = JSON.parse(
						localStorage.getItem(LEFTFOURFINGERS)
					);
					const rightfourfingers = JSON.parse(
						localStorage.getItem(RIGHTFOURFINGERS)
					);
					console.log(
						"leftfourfing=",
						leftfourfingers,
						"right",
						rightfourfingers,
						"thumbs",
						fingerprintData
					);
					const combinedFingers = [
						...leftfourfingers,
						...rightfourfingers,
						...fingerprintData,
					];
					console.log("combinedFingers=", combinedFingers);

					//send these leftfourfingers,rightfourfingers and thumbs to gamunu's API
					const result = await axios.post(
						import.meta.env.VITE_GAMUNU_API_URL + "/upload",
						{
							data: combinedFingers,
						}
					);

					console.log(result);
					// if (true) {
					//   navigate(`/${APP}/${FACESCAN}`, { state: studentData });
					// }
				}

				//   user.token
				// );

				// const {username, startTime, endTime, count} = authenticationData.data;

				// dayjs.extend(localizedFormat);
				// const booking = {
				//   username,
				//   count,
				//   timeslot: dayjs(startTime).format('L LT') + '-' + dayjs(endTime).format('LT')
				// }
				// setBooking(booking);

				// setAccess(true);
				// setScannerActive(false);
				// setDialogOpen(true);
			} catch (error) {
				// setAccess(false);
				// if(error.message==='400'){
				//   setDialogOpen(true);
				// }else{
				//   setDialogOpen(false);
				// }
			}
		});
	}, [page]);

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
						Authorization: "Bearer " + sessionStorage.getItem("token") || "",
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

	const handleRequest = async (event) => {
		try {
			if (page == LEFTFOURFINGERS) {
				socket.emit("fingerprint", 1);
				console.log("left fourfingers requested");
				// // const result = await Axios.post(
				// //   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
				// // );
				// // if(result){
				// // console.log("LeftFourFingers: ", result.data);
				// // localStorage.setItem(LEFTFOURFINGERS,result.data)
				// // navigate(`/${APP}/${FINGERPRINTLOAD}`,{ state: {next: RIGHTFOURFINGERS} });
				// // }
				// if (true) {
				//   console.log("LeftFourFingers: ", "leftbytes");
				//   localStorage.setItem(LEFTFOURFINGERS, "leftbytes")
				//   navigate(`/${APP}/${FINGERPRINTLOAD}`, { state: { next: RIGHTFOURFINGERS } });
				// }
			} else if (page == RIGHTFOURFINGERS) {
				socket.emit("fingerprint", 2);
				console.log("right fourfingers requested");
				// const result = await Axios.post(
				//   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
				// );
				// if(result){
				// console.log("RightFourFingers: ", result.data);
				// localStorage.setItem(RIGHTFOURFINGERS,result.data)
				// navigate(`/${APP}/${FINGERPRINTLOAD}`,{ state: {next: THUMBS} });
				// }
				// if (true) {
				//   console.log("RightFourFingers: ", "rightbytes");
				//   localStorage.setItem(RIGHTFOURFINGERS, "rightbytes")
				//   navigate(`/${APP}/${FINGERPRINTLOAD}`, { state: { next: THUMBS } });
				// }
			} else {
				socket.emit("fingerprint", 3);
				console.log("thumbs requested");
				// const thumbs = await Axios.post(
				//   import.meta.env.VITE_DEVICE_API_URL + "reg/rcapture"
				// );
				// if (thumbs) {
				//   console.log("Thumbs: ", thumbs.data);

				//   const leftfourfingers = localStorage.getItem(LEFTFOURFINGERS)
				//   const rightfourfingers = localStorage.getItem(RIGHTFOURFINGERS)
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
				// if (true) {
				//   // console.log("Thumbs: ", thumbs.data);

				//   const leftfourfingers = localStorage.getItem(LEFTFOURFINGERS)
				//   const rightfourfingers = localStorage.getItem(RIGHTFOURFINGERS)
				//   console.log(leftfourfingers,rightfourfingers)
				//   //send these leftfourfingers,rightfourfingers and thumbs to gamunu's API
				//   // const resultGamunu = await Axios.post(
				//   //   import.meta.env.VITE_GAMUNU_API_URL + "reg/rcapture",
				//   //   {
				//   //     leftfourfingers,
				//   //     rightfourfingers,
				//   //     thumbs: thumbs.data
				//   //   }
				//   // );
				//   // if (true) {
				//   //   navigate(`/${APP}/${FACESCAN}`, { state: studentData });
				//   // }
				// }
			}
		} catch (error) {
			console.log("Error sending request to the device", error);
		}
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
					{(page == LEFTFOURFINGERS && "Please insert left hand 4 fingers") ||
						(page == RIGHTFOURFINGERS &&
							"Please insert right hand 4 fingers") ||
						(page == THUMBS && "Please insert two thumbs")}
				</Typography>
				<Image
					src={
						page == LEFTFOURFINGERS
							? import.meta.env.VITE_ENVIRONEMT === "dev"
								? "../src/assets/left.jpg"
								: `${import.meta.env.VITE_CDN_URL}/left.jpg`
							: page == RIGHTFOURFINGERS
							? import.meta.env.VITE_ENVIRONEMT === "dev"
								? "../src/assets/right.jpg"
								: `${import.meta.env.VITE_CDN_URL}/right.jpg`
							: import.meta.env.VITE_ENVIRONEMT === "dev"
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
            onClick={edit ? handleSave : handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {edit ? "Save" : "Register User"}
          </Button>
        )} */}

				<Button
					type="button"
					onClick={edit ? handleSave : handleRequest}
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					{edit ? "Save" : page == THUMBS ? "Scan Face" : "Request"}
				</Button>
			</Container>
		</>
	);
}
