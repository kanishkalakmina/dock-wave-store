import { createTheme } from "@mui/material/styles";

const CommonTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#FFC107",
    },
    // Add other palette colors as needed
  },
  // Add other common theme settings here
});

export default CommonTheme;
