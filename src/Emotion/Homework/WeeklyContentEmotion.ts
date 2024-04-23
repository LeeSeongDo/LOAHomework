import styled from "@emotion/styled";

export const CenterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const RaidContentBox = styled.div`
  width: 90%;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: lightgray;
  border-radius: 30px;
`;

export const CharacterInfoArea = styled.div`
  width: 100%;
  max-height: 65px;
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #333333;
  color: white;
`;

export const Homework_CharacterImageArea = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: 5px;
  box-sizing: border-box;
  border: 1px solid black;
`;

export const Homework_CharacterInfoBox = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;
  box-sizing: border-box;

  p {
    display: block;
    margin: 0px;
    line-height: 160%;
  }
`;

// 아직 선택하지 않은 경우
export const NoHomework_RaidCheckBox = styled.div`
  width: 100%;
  height: calc(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: border-box;

  svg {
    font-size: 64px;
    color: white;
  }

  span {
    color: white;
    margin: 10px 0px;
    font-size: 18px;
    font-weight: bold;
  }
`;

// 레이드 선택 상자 스타일
export const Homework_ContentElement = styled.div`
  width: 400px;
  height: 360px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
