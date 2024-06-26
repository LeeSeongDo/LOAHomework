import styled from "@emotion/styled";

type characterImage = {
  characterImage: string;
};

export const CharacterInfoBox = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharacterImageArea = styled.div`
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  border: 3px solid gray;
  border-radius: 100%;
  background-size: cover;
  background-image: url(${(props: characterImage) => props.characterImage});
  transition: 0.3s;
  cursor: pointer;

  :hover {
    border: 3px solid #00ffa3;
  }
`;

export const CharacterInfoTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
`;

export const NickName = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #c9cedc;
  line-height: 0px;
`;

export const ItemLevel = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: black;
  line-height: 0px;
`;
