import { Box, Link, styled, Typography } from "@mui/material";

export const FooterBox = styled("footer")(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.custom_palette.blue.dark,
  color: theme.palette.common.white,
  display: "flex",
  flexDirection: "column",
  padding: "2rem 2rem",
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  fontSize: "1rem",
  gap: "1rem",
  justifyContent: "space-evenly",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const FooterName = styled(Box)(() => ({
  maxWidth: "200px",
  textAlign: "center",

  "& h6": {
    fontWeight: 600,
    fontSize: "1.5625rem",
  },
}));

export const LaurelImage = styled(Box)(() => ({
  backgroundImage: "url('images/icon-logo.png')",
  backgroundSize: "cover",

  height: "6.25rem",
  width: "6.25rem",
}));

export const FooterDetails = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "200px",
  textAlign: "center",
}));

export const FooterIcons = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  fontSize: "1.4rem",
  justifyContent: "center",
  marginTop: "0.5rem",
}));

export const IconLink = styled("a")(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",

  "&:hover": {
    color: theme.custom_palette.neutral.main,
  },
}));

export const FooterCreator = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  gap: "0.25rem",
  marginTop: ".5rem",
}));

export const CreatorName = styled("span")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: "0.4rem",
  fontWeight: 600,
  fontSize: "1rem",
  fontFamily: theme.custom_palette.fontFamily,
}));

export const CreatorLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
}));

export const TypographyMedium = styled(Typography)(() => ({
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: "1.5",
}));
