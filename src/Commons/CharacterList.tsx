import { useState, useEffect, MouseEventHandler } from "react";
import { CharacterInfo } from "../../pages/api/CharacterInfo";
import { CharacterProfileAPI } from "../../pages/api/CharacterProfile";
import {
  PassiveServerFont,
  ActiveServerFont,
} from "../Emotion/ServerListEmotion";
import { v4 as uuidv4 } from "uuid";

export default function CharacterList() {
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

    // 서버 필터 변수
    const serverFilter = CharacterList.filter(
      (data) => data.ServerName === serverName
    );

    // 레벨 내림차순 필터.
    // ???.replace("지우려는 내용", "대체하려는 내용")

    const LevelSort = serverFilter.sort(
      (a, b) =>
        parseFloat(b.ItemAvgLevel.replace(",", "")) -
        parseFloat(a.ItemAvgLevel.replace(",", ""))
    );

    setFilterCharacterInfo(LevelSort);
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
        console.error(error);
      }
    };

    fetchData();
    console.log(FilterCharacterInfo);
  }, [FilterCharacterInfo]);

  return (
    <div>
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
    </div>
  );
}
