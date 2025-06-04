import { WHATSAPP_LINK } from "@/constants";
import { ButtonAction } from "../Banner/styles";
import * as S from "./styles";

export const ProductGrid = () => {
  const products = [
    { name: "Massagem Relaxante", image: "images/relaxante.png" },
    { name: "Bambuterapia", image: "images/bambuterapia.png" },
    {
      name: "Massagem Terapêutica",
      image: "images/massagem-terapeutica.png",
    },
    { name: "Quiropraxia", image: "images/quiropraxia.png" },
    { name: "Ventosaterapia", image: "images/ventosaterapia.png" },
    { name: "Pedras Quentes", image: "images/pedras-quentes.png" },
    { name: "Shiatsu", image: "images/shiatsu.png" },
    { name: "Drenagem Linfática", image: "images/drenagem-linfatica.png" },
  ];
  return (
    <S.ProductsGridContainer>
      <S.TitleContainer variant="h3" fontSize="40px">
        Massagens
      </S.TitleContainer>
      <S.ImagesBox>
        {products.map((product, index) => (
          <S.ProductBox key={index}>
            <S.Image url={product.image} />
            <S.ProductDescription>{product.name}</S.ProductDescription>
          </S.ProductBox>
        ))}
      </S.ImagesBox>
      <ButtonAction sx={{ mb: 8 }} href={WHATSAPP_LINK} target="_blank">
        Agende sua sessão
      </ButtonAction>
    </S.ProductsGridContainer>
  );
};
