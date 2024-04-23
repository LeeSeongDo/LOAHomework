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
