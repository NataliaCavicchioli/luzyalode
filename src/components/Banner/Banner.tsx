import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { WHATSAPP_LINK } from "@/constants";
import * as S from "./styles";

export const Banner = () => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <S.BannerContainer>
      <S.TitleContainer>
        <S.LogoContainer />
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            fontFamily: (theme) => theme.custom_palette.fontFamily,
            fontSize: isMobileScreen ? "2.5rem" : "3.5rem",
          }}
        >
          Invista em sua{" "}
          <span style={{ color: theme.custom_palette.neutral.main }}>
            saúde
          </span>
          ! Relaxe seu corpo e equilibre sua mente.
        </Typography>
        <Typography variant="h4" fontSize="1.5rem" mt={2}>
          Silvana Mialski - Massoterapeuta referência em Ilhéus/BA.
        </Typography>
        {!isMobileScreen && (
          <Typography variant="h4" fontSize="1.5rem" mt={2}>
            O seu refúgio sagrado para alcançar harmonia e bem-estar. Relaxe seu
            corpo e equilibre sua mente!
          </Typography>
        )}
      </S.TitleContainer>
      <S.ButtonContainer>
        <S.LogoContainer
          sx={{
            opacity: 0,
            display: isMobileScreen ? "none" : "block",
          }}
        />
        <S.SquareContainer>
          <Typography
            variant="h3"
            fontSize="2.25rem"
            fontWeight={600}
            sx={{
              color: (theme) => theme.custom_palette.blue.dark,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Promoção de São João*
          </Typography>
          <Box display="flex" flexDirection="column">
            <S.TextSaleContainer mt={2} mb={2}>
              • Agende 1h de massagem
            </S.TextSaleContainer>
            <S.TextSaleContainer>• Ganhe +30min extras!</S.TextSaleContainer>
          </Box>
          <S.ButtonAction
            sx={{ gap: ".5rem" }}
            href={WHATSAPP_LINK}
            target="_blank"
          >
            <WhatsAppIcon />
            Agende sua sessão
          </S.ButtonAction>
          <Typography
            variant="subtitle1"
            sx={{
              color: (theme) => theme.custom_palette.blue.dark,
              textAlign: "center",
              fontSize: ".75rem",
              marginTop: 1,
            }}
          >
            *Validade da condição especial: Uma promoção por CPF, até
            15/07/2025.
          </Typography>
        </S.SquareContainer>
      </S.ButtonContainer>
    </S.BannerContainer>
  );
};
