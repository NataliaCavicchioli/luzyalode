import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  custom_palette: {
    neutral: { main: "#FFF8E2", background: "rgba(255, 248, 226, 0.7)" },
    cardShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadiusLg: "2rem",
    blue: { main: "#528284", dark: "#426d6e" },
    green: { main: "#25D366", dark: "#0fa258" },
    fontFamily: '"Playfair Display", serif',
  },
});

export default theme;
