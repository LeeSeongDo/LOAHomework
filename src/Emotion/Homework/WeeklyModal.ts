import styled from "@emotion/styled";

export const AddRaidBox = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px 0px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    font-size: 32px;
  }

  span {
    font-size: 20px;
    color: black;
  }
`;

export const AddArea = styled.div`
  width: 100%;
  margin: 10px 0px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const RaidArea = styled.div`
  width: 100%;
`;

export const StageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 10px;
`;

// 난이도 스타일
export const Difficulty = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const StageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StageElement = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0px 5px;
  width: 140px;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #393939;
  color: white;
  cursor: pointer;

  :first-child {
    margin-left: 0px;
  }
`;

export const LevelAndGold = styled.div`
  width: 100%;
  display: flex;
  line-height: 0px;
  justify-content: space-between;
`;
