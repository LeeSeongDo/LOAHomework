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

// 레이드를 아직 선택하지 않은 경우
export const NoSelectRaidContentElement = styled.div`
  width: 400px;
  height: 360px;
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
