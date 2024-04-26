import React, { MouseEventHandler, useEffect, useState } from "react";
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

interface HomeworkType {
  id: number;
  name: string; // 레이드 이름
  stage: string;
  level: number;
  gold: number;
  clickBoolean: boolean;
}

export default function Modal({ ModalBoolean, setModalBoolean }): JSX.Element {
  const [showAddArea, setShowAddArea] = useState<Boolean>(false);
  const [SelectedOption, setSelectedOption] = useState<String>(
    RaidData[0].name
  );
  const [FilterRaidData, setFilterRaidData] = useState<SelectOption[]>([]);

  const [SaveHomeworkData, setSaveHomeworkData] = useState([]);
  const [StageSaveData, setStageSaveData] = useState([]);

  const handleOk = (): void => {
    setModalBoolean(false);
  };

  const handleCancel = (): void => {
    setModalBoolean(false);
    setSelectedOption("");
    setFilterRaidData([]);
  };

  // 관문 데이터를 추가하는 함수
  const AddStage = (raid, difficult, stage, index) => {
    return () => {
      const updatedStage = { ...stage, clickBoolean: !stage.clickBoolean }; // 클릭할 때마다 clickBoolean 값을 반전시킴
      let data: HomeworkType = {
        id: index,
        name: raid.name, // 레이드 이름
        stage: updatedStage.stage,
        level: updatedStage.level,
        gold: updatedStage.gold,
        clickBoolean: updatedStage.clickBoolean, // 반전된 값을 사용
      };

      if (StageSaveData.length >= 1) {
        StageSaveData.map((data2) => {
          if (data2.name === data.name && data2.stage === data.stage) {
            console.log("동일값이 있다. 추가 안할거야");
            console.log(StageSaveData);
          } else {
            StageSaveData.push(data);
            console.log("성공적으로 추가됨");
            console.log(StageSaveData);
          }
        });
      } else {
        StageSaveData.push(data);
        console.log("성공적으로 추가됨");
        console.log(StageSaveData);
      }
    };
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
        <p>레이드를 선택하세요</p>

        <AddArea>
          <select onChange={SelectedEvent}>
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
                      <StageElement
                        key={index}
                        onClick={AddStage(raid, difficulty, stage, index)}
                      >
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
