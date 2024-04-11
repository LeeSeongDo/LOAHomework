import { MouseEventHandler, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function MyCharacter_Main() {
  // 캐릭터 리스트를 저장하는 변수.
  const [CharacterList, setCharacterList] = useState([]);

  // 서버가 여러개라면 저장해두자.
  const [ServerList, setServerList] = useState([]);

  // 필터링 된 결과값을 저장하는 변수
  const [FilterCharacterInfo, setFilterCharacterInfo] = useState([]);

  // 캐릭터 정보 가져오는 API
  const CharacterInfo = async () => {
    try {
      const response = await axios.get(
        "https://developer-lostark.game.onstove.com/characters/창녕갈릭치킨버거/siblings",
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

  // 서버별 필터링 이벤트
  const FilteringEvent: MouseEventHandler<HTMLSpanElement> = (event) => {
    const serverName = event.currentTarget.textContent;
    console.log(serverName);

    setFilterCharacterInfo(
      CharacterList.filter((data) => data.ServerName === serverName)
    );
  };

  useEffect(() => {
    CharacterInfo();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(FilterCharacterInfo);
        }}
      >
        클릭해주세요
      </button>

      {ServerList?.map((data) => {
        const uniqueKey = uuidv4();

        return (
          <span
            key={uniqueKey}
            style={{ padding: "0px 10px", fontSize: "18px", cursor: "pointer" }}
            onClick={FilteringEvent}
          >
            {data}
          </span>
        );
      })}

      <hr></hr>
      {FilterCharacterInfo?.map((data) => {
        const uniqueKey = uuidv4();
        return <p key={uniqueKey}>{data.CharacterName}</p>;
      })}
    </div>
  );
}
