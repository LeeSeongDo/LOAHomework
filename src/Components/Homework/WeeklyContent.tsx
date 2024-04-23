// 주간 컨텐츠 (레이드, 도가토, 도비스)
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  CenterBox,
  RaidContentBox,
  Homework_ContentElement,
  CharacterInfoArea,
  Homework_CharacterImageArea,
  Homework_CharacterInfoBox,
  NoHomework_RaidCheckBox,
} from "../../Emotion/Homework/WeeklyContentEmotion";
import CharacterList from "../../Commons/CharacterList";
import { RaidData } from "../../../pages/Data/RaidData";
import { CharacterImageData } from "../../../pages/Data/CharacterImage";
import Modal from "../../Commons/Modal";

export default function WeeklyContent(): JSX.Element {
  // True면 Modal창 나오게
  const [ModalBoolean, setModalBoolean] = useState(false);

  // 캐릭터 API 가져오기

  // 아직 레이드가 선택되지 않았다면 ⬇️ 함수를 클릭 이벤트로 넣어주세요
  const SelectRaidEvent = () => {
    setModalBoolean(!ModalBoolean);
  };

  return (
    <CenterBox>
      <CharacterList></CharacterList>
      <RaidContentBox>
        {/* 아직 레이드 설정하지 않는 경우 */}
        <Homework_ContentElement>
          <CharacterInfoArea>
            <Homework_CharacterImageArea
              src={CharacterImageData[22].image}
              alt="캐릭터 이미지"
            />
            <Homework_CharacterInfoBox>
              <p>창녕갈릭치킨버거</p>
              <p>1635.83</p>
            </Homework_CharacterInfoBox>
          </CharacterInfoArea>
          <NoHomework_RaidCheckBox onClick={SelectRaidEvent}>
            <PlusCircleOutlined />
            <span>레이드를 선택해주세요</span>
          </NoHomework_RaidCheckBox>
        </Homework_ContentElement>
      </RaidContentBox>
      <Modal ModalBoolean={ModalBoolean} setModalBoolean={setModalBoolean} />
    </CenterBox>
  );
}
