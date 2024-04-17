import { MouseEventHandler, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { CharacterInfo } from "../../pages/api/CharacterInfo";
import {
  ActiveServerFont,
  MyCharacterBox,
  PassiveServerFont,
} from "../Emotion/ServerListEmotion";
import {
  CharacterImageArea,
  CharacterInfoBox,
  CharacterInfoTextArea,
  ItemLevel,
  NickName,
} from "../Emotion/CharacterInfo";
import { wrap } from "module";
import { CharacterProfileAPI } from "../../pages/api/CharacterProfile";
import { rejects } from "assert";

export default function MyCharacter_Main() {
  // 캐릭터 리스트를 저장하는 변수.
  const [CharacterList, setCharacterList] = useState([]);

  // 서버가 여러개라면 저장해두자.
  const [ServerList, setServerList] = useState([]);

  // 필터링 된 결과값을 저장하는 변수
  const [FilterCharacterInfo, setFilterCharacterInfo] = useState([]);

  // 활성화 된 서버의 이름
  const [ActiveServerName, setActiveServerName] = useState("");

  // 프로필 이미지

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
      <h3>서버를 선택해주세요</h3>
      {ServerList?.map((data) => {
        const uniqueKey = uuidv4();
        if (ActiveServerName === data) {
          return (
            <ActiveServerFont key={uniqueKey} onClick={FilteringEvent}>
              {data}
            </ActiveServerFont>
          );
        } else {
          return (
            <PassiveServerFont key={uniqueKey} onClick={FilteringEvent}>
              {data}
            </PassiveServerFont>
          );
        }
      })}

      <hr></hr>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {FilterCharacterInfo?.map((data) => {
          const uniqueKey = uuidv4();

          const profileImage = "테스트";

          const profileImageFunction = async () => {
            try {
              const response = await CharacterProfileAPI(data.CharacterName);
              // profileImage 함수가 완료되었을 때 실행될 콜백 함수 호출
            } catch (error) {
              console.log(error);
            }
          };

          profileImageFunction();

          return (
            <CharacterInfoBox key={uniqueKey}>
              <CharacterImageArea>{profileImage}</CharacterImageArea>
              <CharacterInfoTextArea>
                <NickName>{data.CharacterName}</NickName>
                <ItemLevel>{data.ItemAvgLevel}</ItemLevel>
              </CharacterInfoTextArea>
            </CharacterInfoBox>
          );
        })}
      </div>
    </MyCharacterBox>
  );
}
