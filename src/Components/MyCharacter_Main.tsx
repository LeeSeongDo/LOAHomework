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

  // 프로필 데이터
  const [ProfileData, setProfileData] = useState([]);

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

  useEffect(() => {
    const test = [];
    console.log(FilterCharacterInfo);
    FilterCharacterInfo.map((data) => {
      const testValue = CharacterProfileAPI(data.CharacterName); // 이게 response라고 생각하기.
      const getData = () => {
        testValue.then((data) => {
          test.push(data.data);
          setProfileData(test);
        });
      };

      getData();
      console.log(ProfileData);
    });
  }, [FilterCharacterInfo]);

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

          const profileImage = "테스트"; // 임시로 설정된 프로필 이미지

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
