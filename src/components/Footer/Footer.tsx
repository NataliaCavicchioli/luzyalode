import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterBox>
      <S.FooterContent>
        <S.FooterName>
          <Typography variant="h6">Silvana Mialski</Typography>
          <S.TypographyMedium variant="body2">
            Massoterapeuta
          </S.TypographyMedium>
          <Typography fontSize="12px" sx={{ maxWidth: "200px" }}>
            Endereço: Rua Manoel Dorea, 134 - Boa Vista, Ilheus - BA,
            45.652-482.
          </Typography>
        </S.FooterName>
        <S.LaurelImage />
        <S.FooterDetails>
          <S.TypographyMedium variant="body1" fontSize="1rem">
            +55 73 9133-7897
          </S.TypographyMedium>
          <S.TypographyMedium variant="body2">
            silmialski@gmail.com
          </S.TypographyMedium>
          <S.FooterIcons>
            <S.IconLink
              href="https://www.instagram.com/luzyalode.terapias.ilheus?igsh=MWY1eGJxY2NqNDJmcw=="
              target="_blank"
            >
              <InstagramIcon />
            </S.IconLink>
          </S.FooterIcons>
        </S.FooterDetails>
      </S.FooterContent>

      <S.FooterCreator>
        <Typography component="span" fontSize="12px">
          Developed by{" "}
        </Typography>
        <S.CreatorName>
          Natalia Cavicchioli{" "}
          <S.CreatorLink
            href="https://github.com/NataliaCavicchioli"
            target="_blank"
          >
            <GitHubIcon />
          </S.CreatorLink>
        </S.CreatorName>
      </S.FooterCreator>
    </S.FooterBox>
  );
};
