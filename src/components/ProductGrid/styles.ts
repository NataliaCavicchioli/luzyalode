import { Box, styled, Typography } from "@mui/material";

export const ProductsGridContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.custom_palette?.neutral.main,
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
}));

export const TitleContainer = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(2),
}));

export const ImagesBox = styled(Box)(() => ({
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5625rem",
  maxWidth: "70rem",
  width: "100%",
}));

export const ProductBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width: "20%",

  [theme.breakpoints.down("md")]: {
    width: "30%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

type ImageProps = {
  url: string;
};

export const Image = styled(Box, {
  shouldForwardProp: (prop) => prop !== "url",
})<ImageProps>(({ url }) => ({
  alignItems: "center",
  borderRadius: "100%",
  display: "flex",
  height: "11.875rem",
  justifyContent: "center",
  overflow: "hidden",
  width: "11.875rem",

  "&::before": {
    content: "''",
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "block",
    height: "100%",
    transition: "transform 0.3s ease-in-out",
    width: "100%",
  },

  "&:hover::before": {
    transform: "scale(1.1)",
    opacity: "0.8",
  },
}));

export const ProductDescription = styled(Typography)(({ theme }) => ({
  color: theme.custom_palette.blue.main,
  fontSize: "1.375rem",
  fontWeight: 700,
  marginTop: ".625rem",
  textAlign: "center",
}));
