import styled from "styled-components/macro";

export const WholeContainer = styled.div``;

export const Card = styled.div`
  width: 230px;
  height: 300px;
  margin: 0px 3px;
`;

// container : 가장 바깥쪽 대상의 크기와 똑같아야 함 (width, height = 100)
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid black;

  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 230px;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const CardRank = styled.div`
  font-size: 12px;
  color: #73dff2;
  margin-left: 12px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 90px;
  height: 90px;
  align-items: center;
  flex-direction: column;
  object-fit: cover;
  border-radius: 70%;
`;

export const CardTitle = styled.div`
  font-size: 15px;
  color: #303030;
  font-weight: bold;
  padding-top: 19px;
  padding-bottom: 15px;
`;

export const CardAge = styled.div`
  font-size: 13px;
  padding-top: 1px;
  padding-bottom: 1px;
  color: #909090;
`;

export const CardDescription = styled.div`
  font-size: 13px;
  padding-top: 1px;
  padding-bottom: 1px;
  color: #909090;
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
`;

export const ButtonProduct = styled.button`
  width: 114.5px;
  height: 100%;
  font-size: 11px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #edeff0;
  color: #909090;
`;

export const ButtonMyshop = styled.button`
  width: 114.5px;
  height: 100%;
  font-size: 11px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #edeff0;
  color: #909090;
`;

//export const CardMeta = styled.div``;
