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
import { CharacterImageData } from "../../pages/Data/CharacterImage";

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
    const fetchData = async () => {
      try {
        const profileDataArray = await Promise.all(
          FilterCharacterInfo.map(async (data) => {
            const response = await CharacterProfileAPI(data.CharacterName);
            return response.data;
          })
        );
        setProfileData(profileDataArray);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
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

          const test = ProfileData.filter(
            (data2) => data.CharacterName === data2.CharacterName
          );

          const CharacterImage = CharacterImageData.filter(
            (data) => data.name === test[0]?.CharacterClassName
          );

          console.log(CharacterImage);
          return (
            <CharacterInfoBox key={uniqueKey}>
              <CharacterImageArea
                characterImage={CharacterImage[0]?.image}
              ></CharacterImageArea>
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
