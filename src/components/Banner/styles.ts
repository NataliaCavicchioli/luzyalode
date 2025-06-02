import { Box, Link, styled } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundAttachment: "fixed",
  backgroundImage: "url('images/massagem-costas-mulher.png')",
  backgroundSize: "cover",
  display: "flex",
  gap: "2.25rem",
  justifyContent: "center",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: theme.custom_palette.blue.main,
    opacity: "0.8",
    zIndex: 1,
  },

  "& > *": {
    position: "relative",
    zIndex: 2,
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  color: "white",
  marginLeft: theme.spacing(8),
  maxWidth: "43.75rem",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginLeft: 0,
    width: "80%",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  margin: theme.spacing(3),
  maxWidth: "43.75rem",
}));

export const ButtonAction = styled(Link)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.custom_palette.green.main,
  borderRadius: "2.8125rem",
  color: theme.palette.common.white,
  display: "flex",
  fontFamily: theme.typography.fontFamily,
  fontSize: "1.125rem",
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "1.1875rem",

  marginBottom: "1.5rem",
  marginTop: "1.5rem",
  padding: "1.25rem 1.875rem",
  textDecoration: "none",
  textTransform: "uppercase",

  "&:hover": {
    backgroundColor: theme.custom_palette.green.dark,
    cursor: "pointer",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const SquareContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.custom_palette.neutral.background,
  borderRadius: "2.1875rem",
  boxShadow: theme.custom_palette.cardShadow,
  color: theme.custom_palette.neutral.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  maxWidth: "31.25rem",
  maxHeight: "18.75rem",
  padding: "1.5rem",
}));

export const LogoContainer = styled(Box)(() => ({
  backgroundImage: "url('images/silvana-logo-2.png')",
  backgroundSize: "cover",

  width: "12.5rem",
  height: "12.5rem",
}));

export const TextSaleContainer = styled(Box)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.custom_palette.blue.dark,
}));
