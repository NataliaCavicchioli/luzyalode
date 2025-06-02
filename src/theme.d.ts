import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom_palette: {
      neutral: { main: string; background: string };
      cardShadow: string;
      borderRadiusLg: string;
      blue: {
        main: string;
        dark: string;
      };
      green: {
        main: string;
        dark: string;
      };
      fontFamily: string;
    };
  }

  interface ThemeOptions {
    custom_palette?: {
      neutral?: {
        main: string;
        background: string;
      };
      cardShadow?: string;
      borderRadiusLg?: string;
      blue?: {
        main: string;
        dark: string;
      };
      green?: {
        main: string;
        dark: string;
      };
      fontFamily?: string;
    };
  }
}
