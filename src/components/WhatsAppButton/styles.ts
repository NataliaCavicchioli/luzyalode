import { keyframes, Link, styled } from "@mui/material";

const pulseAnimation = keyframes`
 0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
`;

export const IconButton = styled(Link)(({ theme }) => ({
  alignItems: "center",
  animation: `${pulseAnimation} 2s infinite`,
  backgroundColor: theme.custom_palette.green.main,
  borderRadius: "50%",
  bottom: "1.25rem",
  boxShadow: theme.custom_palette.cardShadow,
  color: theme.palette.common.white,
  display: "flex",
  height: "5.625rem",
  justifyContent: "center",
  position: "fixed",
  right: "1.25rem",
  width: "5.625rem",
  zIndex: 1000,

  "&:hover": {
    backgroundColor: theme.custom_palette.green.dark,
  },
}));
