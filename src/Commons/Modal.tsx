import React, { useEffect, useState } from "react";
import { Button, Modal as LoaModal } from "antd";
import { RaidData } from "../../pages/Data/RaidData";
import { NoHomework_RaidCheckBox } from "../Emotion/Homework/WeeklyContentEmotion";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  AddArea,
  AddRaidBox,
  Difficulty,
  LevelAndGold,
  RaidArea,
  StageArea,
  StageBox,
  StageElement,
} from "../Emotion/Homework/WeeklyModal";

interface SelectOption {
  id: number;
  name: string;
  difficulty: {
    type: string;
    stages: {
      stage: string;
      level: number;
      gold: number;
    }[];
  }[];
}

export default function Modal({ ModalBoolean, setModalBoolean }): JSX.Element {
  const [showAddArea, setShowAddArea] = useState(false);
  const [SelectedOption, setSelectedOption] = useState(RaidData[0].name);

  const [FilterRaidData, setFilterRaidData] = useState<SelectOption[]>([]);

  const handleOk = () => {
    setModalBoolean(false);
  };

  const handleCancel = () => {
    setModalBoolean(false);
    setSelectedOption("");
    setFilterRaidData([]);
  };

  const addRaidData = () => {
    setShowAddArea(true);
  };

  useEffect(() => {
    const FilterData: SelectOption[] = RaidData.filter(
      (data) => data.name === SelectedOption
    ) as SelectOption[];

    setFilterRaidData(FilterData);
    console.log(FilterRaidData);
  }, [SelectedOption]);

  const SelectedEvent = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <LoaModal
        title="주간 레이드 추가하기"
        open={ModalBoolean}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            닫기
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            추가하기
          </Button>,
        ]}
        width={650}
      >
        {/* 추천 레이드 */}
        {/* <div>
          <h3>창녕갈릭치킨버거님을 위한 추천 레이드</h3>
          <button>혼돈의 상아탑(하드)</button>
          <button>카멘(하드)</button>
          <button>에키드나(하드)</button>
        </div> */}

        {/* <div>
          <AddRaidBox onClick={addRaidData}>
            <PlusCircleOutlined />
            <span>레이드 추가하기</span>
          </AddRaidBox>
        </div> */}
        <p>레이드를 선택하세요</p>

        <AddArea>
          <select value={SelectedOption} onChange={SelectedEvent}>
            <option>레이드 선택하기</option>
            {RaidData.map((data) => (
              <option key={data.id}>{data.name}</option>
            ))}
          </select>

          {/* 레이드 관문 div */}
          {FilterRaidData.map((raid) => (
            <RaidArea key={raid.id}>
              {raid.difficulty.map((difficulty) => (
                <StageArea key={difficulty.type}>
                  <Difficulty>
                    {difficulty.type === "normal" ? "노말" : "하드"}
                  </Difficulty>

                  <StageBox>
                    {difficulty.stages.map((stage, index) => (
                      <StageElement key={index}>
                        <div>{index + 1}관문</div>

                        <LevelAndGold>
                          <p>{stage.level}</p>
                          <p>{stage.gold}G</p>
                        </LevelAndGold>
                      </StageElement>
                    ))}
                  </StageBox>
                </StageArea>
              ))}
            </RaidArea>
          ))}
        </AddArea>
      </LoaModal>
    </>
  );
}
