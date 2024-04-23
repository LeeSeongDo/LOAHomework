import React, { useEffect, useState } from "react";
import { Button, Modal as LoaModal } from "antd";
import { RaidData } from "../../pages/Data/RaidData";
import { NoHomework_RaidCheckBox } from "../Emotion/Homework/WeeklyContentEmotion";
import { PlusCircleOutlined } from "@ant-design/icons";
import { AddArea, AddRaidBox } from "../Emotion/Homework/WeeklyModal";

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
        title="주간 숙제 추가"
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
        style={{ maxHeight: "80vh" }}
      >
        {/* 추천 레이드 */}
        <div>
          <h3>창녕갈릭치킨버거님을 위한 추천 레이드</h3>
          <button>혼돈의 상아탑(하드)</button>
          <button>카멘(하드)</button>
          <button>에키드나(하드)</button>
        </div>

        <div>
          <AddRaidBox onClick={addRaidData}>
            <PlusCircleOutlined />
            <span>레이드 추가하기</span>
          </AddRaidBox>
        </div>

        {showAddArea === true ? (
          <AddArea>
            <select value={SelectedOption} onChange={SelectedEvent}>
              <option>레이드 선택하기</option>
              {RaidData.map((data) => (
                <option key={data.id}>{data.name}</option>
              ))}
            </select>

            {/* 레이드 관문 div */}
            {FilterRaidData.map((raid) => (
              <div key={raid.id}>
                <h4>{raid.name}</h4>
                {raid.difficulty.map((difficulty) => (
                  <div key={difficulty.type}>
                    <h5>{difficulty.type}</h5>
                    <ul>
                      {difficulty.stages.map((stage, index) => (
                        <li key={index}>
                          {index + 1}관문
                          <p>
                            {stage.level}, Gold:{stage.gold}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </AddArea>
        ) : (
          ""
        )}
      </LoaModal>
    </>
  );
}
