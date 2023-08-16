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
	const [fingerData, setfingerData] = useState([]);
	const [page, setPage] = useState(LEFTFOURFINGERS);

	useEffect(() => {
		socket.removeAllListeners("fingerprintData");
		socket.on("fingerprintData", async (fingerprintData) => {
			try {
				if (page == LEFTFOURFINGERS) {
					console.log("left fourfingers recieved");
					setfingerData(fingerprintData);
					console.log("currentData = ", fingerData);
					setPage(RIGHTFOURFINGERS);
				} else if (page == RIGHTFOURFINGERS) {
					console.log("right fourfingers recieved");
					setfingerData([...fingerData, ...fingerprintData]);
					setPage(THUMBS);
				} else {
					console.log("thumbs recieved");
					const finalData = [...fingerData, ...fingerprintData];
					console.log("combinedFingers=", finalData);

					//send these leftfourfingers,rightfourfingers and thumbs to gamunu's API
					console.log("studentData=", studentData);
					const dataToSend = {
						index: studentData.user.index,
						data: processData(finalData)
					};
					console.log(dataToSend);
					axios.post(
						import.meta.env.VITE_GAMUNU_API_URL + "/upload",
						dataToSend
					).then((data)=>{
						handleSubmit();
						console.log(data);
					}).catch((err)=>{
						console.error(err);
						const proceed = confirm("Failed to register finger print data. Need to continue?");
						if (proceed){
							handleSubmit();
						} else {
							window.location.reload();
						}
					});
				}

			} catch (error) {
				console.log(error);
			}
		});
	}, [page]);

	const processData = (fingerPrintArray) => {
		let data = []
		fingerPrintArray.forEach(entry => {
			console.log(entry);
			data.push({
				bioSubType: entry.bioSubType,
				buffer: {
					type: "Buffer",
					data: [... new Uint8Array(entry['buffer'])]
				}
			});
		});
		return data;
	}

	const handleSubmit = async () => {
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

	const handleRequest = async () => {
		try {
			if (page == LEFTFOURFINGERS) {
				socket.emit("fingerprint", 1);
				console.log("left fourfingers requested");
			} else if (page == RIGHTFOURFINGERS) {
				socket.emit("fingerprint", 2);
				console.log("right fourfingers requested");
			} else {
				socket.emit("fingerprint", 3);
				console.log("thumbs requested");
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
				<Button
					type="button"
					onClick={edit ? handleSave : handleRequest}
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					{edit ? "Save" : "Request"}
				</Button>
			</Container>
		</>
	);
}
