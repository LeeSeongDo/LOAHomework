import { MouseEventHandler, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { CharacterInfo } from "../../pages/api/CharacterInfo";

export default function MyCharacter_Main() {
  // 캐릭터 리스트를 저장하는 변수.
  const [CharacterList, setCharacterList] = useState([]);

  // 서버가 여러개라면 저장해두자.
  const [ServerList, setServerList] = useState([]);

  // 필터링 된 결과값을 저장하는 변수
  const [FilterCharacterInfo, setFilterCharacterInfo] = useState([]);

  // 캐릭터 정보 가져오는 API
 

  // 서버별 필터링 이벤트
  const FilteringEvent: MouseEventHandler<HTMLSpanElement> = (event) => {
    const serverName = event.currentTarget.textContent;
    console.log(serverName);

    setFilterCharacterInfo(
      CharacterList.filter((data) => data.ServerName === serverName)
    );
  };

  useEffect(() => {
    CharacterInfo(setCharacterList, setServerList);
  }, []);

  return (
    <div>

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