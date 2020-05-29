import React from "react";

import * as S from "./styles";

interface CardProps {
  rank?: string;
  image?: string;
  title?: string;
  age?: string;
  description?: string;
}

//"https://image-notepet.akamaized.net/resize/620x-/seimage/20191104%2F37e8c0695e528ba8e32577e6c71221d7.jpg"
//March 20, 2019
//What Happened in Thailand?
//
const Card: React.FC<CardProps> = ({
  rank,
  image,
  title,
  age,
  description,
}) => {
  return (
    <S.WholeContainer>
      <S.Card>
        <S.CardContainer>
          <S.CardRank>{rank}</S.CardRank>
          <S.ContentContainer>
            <S.CardImage src={image}></S.CardImage>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardAge>{age}</S.CardAge>
            <S.CardDescription>{description}</S.CardDescription>
          </S.ContentContainer>
          <S.ButtonContainer>
            <S.ButtonProduct>전체상품</S.ButtonProduct>
            <S.ButtonMyshop>마이샵+</S.ButtonMyshop>
          </S.ButtonContainer>
        </S.CardContainer>
      </S.Card>
    </S.WholeContainer>
  );
};

export default Card;
