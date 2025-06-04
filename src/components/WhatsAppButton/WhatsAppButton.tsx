import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { WHATSAPP_LINK } from "@/constants";
import * as S from "./styles";

export const WhatsAppButton = () => {
  return (
    <S.IconButton href={WHATSAPP_LINK} target="_blank">
      <WhatsAppIcon sx={{ fontSize: "2.8125rem" }} />
    </S.IconButton>
  );
};
