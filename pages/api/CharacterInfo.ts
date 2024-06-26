import axios from "axios";

export const CharacterInfo = async (setCharacterList, setServerList) => {
  try {
    const response = await axios.get(
      `https://developer-lostark.game.onstove.com/characters/창녕갈릭치킨버거/siblings`,
      {
        headers: {
          Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDExODYifQ.dp5Rwt6qAxGWBF6L00JpgQ8FRk0LC2McvjnYrcIdaVmlW1lcMOhWfDEuQ3d8PBB_bUevh03dw6Shx3sc8_X_B_cUja3eONQ0MWPPa9ZRvHYBjaBn4RPl4pe_M5quBOaQVhTBhcxNYJoCxVQhHfwf_0K0rmAEDHYdSICEIpeD-Ve8WaEBm7JXa36RBP-vefRtcIZh1O35knWa4bXCjuT4rodTYx4WiE_bt4sCUGfaPfzriAe6P5OjlkGx1YEkk3nYGJCVX-cfdIA5qPAc7612BrjV_YuXx5Qh8XzsPL6m5N9v-h-_GAEW10OWSYvxJabPYV8KhPMKanaEpdrpS6i6jA`,
        },
      }
    );

    setCharacterList(response.data);

    // 보유중인 캐릭터 중 다른 서버가 있는지 확인하는 함수 입니다.
    const extraServerName = [response.data[0].ServerName];
    response.data.map((data, index) => {
      if (
        index > 0 &&
        data.ServerName !== response.data[index - 1].ServerName
      ) {
        extraServerName.push(data.ServerName);
      }
    });
    setServerList(extraServerName);

    // 서버가 여러개라면 서버별로 캐릭터를 담을 배열을 만들고 캐릭터 데이터 넣어주기.
  } catch (error) {
    console.log(error);
  }
};
