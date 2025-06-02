import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import * as S from "./styles";

export const WhatsAppButton = () => {
  return (
    <S.IconButton
      href=" https://wa.me/5511952811275?text=Olá,%20gostaria%20de%20agendar%20uma%20massagem!%20"
      target="_blank"
    >
      <WhatsAppIcon sx={{ fontSize: "2.8125rem" }} />
    </S.IconButton>
  );
};
