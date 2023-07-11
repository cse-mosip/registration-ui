import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#263238",
      light: "#4f5b62",
      dark: "#000a12",
    },
    secondary: {
      main: "#ff9800",
      light: "#ffc947",
      dark: "#c66900",
    },
    background: {
      default: "#0d0f12",
      paper: "#1b1e24",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
      disabled: "#757575",
      hint: "#9e9e9e",
    },
    divider: "#424242",
    action: {
      active: "#ffffff",
      hover: "#ffa726",
      selected: "#ff9800",
      disabled: "#757575",
      disabledBackground: "#b0bec5",
    },
    success: {
      main: "#00c853",
      light: "#69f0ae",
      dark: "#00b248",
    },
    warning: {
      main: "#ff9800",
      light: "#ffc947",
      dark: "#c66900",
    },
    error: {
      main: "#ff3d00",
      light: "#ff7539",
      dark: "#c30000",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#9e9e9e",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff",
            },
          },
        },
        input: {
          "&::placeholder": {
            color: "#b0bec5",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderRadius: "4px",
          "& $notchedOutline": {
            borderColor: "#424242",
          },
          "&:hover $notchedOutline": {
            borderColor: "#ffffff",
          },
          "&$focused $notchedOutline": {
            borderColor: "#ffffff",
          },
        },
        notchedOutline: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
        containedPrimary: {
          backgroundColor: "#ff9800",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ffa726",
          },
        },
        outlinedPrimary: {
          borderColor: "#ff9800",
          color: "#ff9800",
          "&:hover": {
            backgroundColor: "#ff9800",
            color: "#ffffff",
          },
        },
        textPrimary: {
          color: "#ff9800",
          "&:hover": {
            backgroundColor: "#424242",
            color: "#ffffff",
          },
        },
        containedSecondary: {
          backgroundColor: "#263238",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4f5b62",
          },
        },
        outlinedSecondary: {
          borderColor: "#263238",
          color: "#263238",
          "&:hover": {
            backgroundColor: "#263238",
            color: "#ffffff",
          },
        },
        textSecondary: {
          color: "#263238",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#263238",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&.Mui-focused": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "0.75rem",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#4f5b62",
          border: "1px solid #424242",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#424242",
          
        },
        head: {
          color: "#ffffff",
          backgroundColor: "#ff9800",
        },
        body: {
          color: "#b0bec5",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#424242",
          },
        },
        head: {
          
          "&:hover": {
            backgroundColor: "#4f5b62",
          },
        },
        hover: {
          "&:hover": {
            backgroundColor: "#424242",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ff9800",
          "&:hover": {
            textDecoration: "underline",
            color: "#ffa726",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "#ff9800",
        },
      },
    }
  },
});

export default theme;
