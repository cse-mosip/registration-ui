import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import ViewRoutes from "./routes/ViewRoutes";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ViewRoutes />
		</ThemeProvider>
	);
}

export default App;
