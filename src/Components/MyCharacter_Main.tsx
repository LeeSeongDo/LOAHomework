import { MouseEventHandler, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { CharacterInfo } from "../../pages/api/CharacterInfo";
import { ActiveServerFont, MyCharacterBox, PassiveServerFont } from "../Emotion/ServerListEmotion";

export default function MyCharacter_Main() {
  // 캐릭터 리스트를 저장하는 변수.
  const [CharacterList, setCharacterList] = useState([]);

  // 서버가 여러개라면 저장해두자.
  const [ServerList, setServerList] = useState([]);

  // 필터링 된 결과값을 저장하는 변수
  const [FilterCharacterInfo, setFilterCharacterInfo] = useState([]);
 
  const [ActiveServerName, setActiveServerName] = useState('');

  // 서버별 필터링 이벤트
  const FilteringEvent: MouseEventHandler<HTMLSpanElement> = (event) => {
    const serverName = event.currentTarget.textContent;
    setActiveServerName(serverName);

    setFilterCharacterInfo(
      CharacterList.filter((data) => data.ServerName === serverName)
    );

    
  };

  useEffect(() => {
    CharacterInfo(setCharacterList, setServerList);
  }, []);

  return (
    <MyCharacterBox>
      {ServerList?.map((data) => {
        const uniqueKey = uuidv4();
        console.log(ActiveServerName === data)
        if(ActiveServerName === data) {
          return (
            <ActiveServerFont
              key={uniqueKey}
              onClick={FilteringEvent}
            >
              {data}
            </ActiveServerFont>
          );
        } else {
          return (
            <PassiveServerFont
              key={uniqueKey}
              onClick={FilteringEvent}
            >
            {data}
            </PassiveServerFont>
          )
        }
      })}

      <hr></hr>
      {FilterCharacterInfo?.map((data) => {
        const uniqueKey = uuidv4();
        return <p key={uniqueKey}>{data.CharacterName}</p>;
      })}
    </MyCharacterBox>
  );
}