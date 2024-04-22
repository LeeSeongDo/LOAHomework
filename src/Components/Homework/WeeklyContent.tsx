// 주간 컨텐츠 (레이드, 도가토, 도비스)
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  CenterBox,
  RaidContentBox,
  NoSelectRaidContentElement,
} from "../../Emotion/Homework/WeeklyContentEmotion";
import CharacterList from "../../Commons/CharacterList";

export default function WeeklyContent(): JSX.Element {
  // 캐릭터 API 가져오기

  return (
    <CenterBox>
      <CharacterList></CharacterList>
      <RaidContentBox>
        {/* 아직 레이드 설정하지 않는 경우 */}
        <NoSelectRaidContentElement>
          <div>캐릭터 정보</div>
          <PlusCircleOutlined />
          <span>레이드를 선택해주세요</span>
        </NoSelectRaidContentElement>
      </RaidContentBox>
    </CenterBox>
  );
}
