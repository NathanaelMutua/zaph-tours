// theme.ts
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#ef6c00" },
    secondary: { main: "#1976d2" },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: grey[800], secondary: grey[600] },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    // gives  my cards more elevation/shadow effect
    MuiCard: {
      defaultProps: {
        elevation: 5,
      },
    },
  },
});

export default theme;
