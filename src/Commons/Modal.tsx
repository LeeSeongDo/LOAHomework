import React, { useEffect, useState } from "react";
import { Button, Modal as LoaModal } from "antd";
import { RaidData } from "../../pages/Data/RaidData";
import { NoHomework_RaidCheckBox } from "../Emotion/Homework/WeeklyContentEmotion";
import { PlusCircleOutlined } from "@ant-design/icons";
import { AddArea, AddRaidBox } from "../Emotion/Homework/WeeklyModal";

export default function Modal({ ModalBoolean, setModalBoolean }): JSX.Element {
  const [showAddArea, setShowAddArea] = useState(false);
  const [SelectedOption, setSelectedOption] = useState("");

  const handleOk = () => {
    setModalBoolean(false);
  };

  const handleCancel = () => {
    setModalBoolean(false);
  };

  const addRaidData = () => {
    setShowAddArea(true);
  };

  const SelectedEvent = (e) => {
    console.log(SelectedOption);
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    console.log(SelectedOption);
  }, [SelectedOption]);

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
              {RaidData.map((data) => (
                <option key={data.id}>{data.name}</option>
              ))}
            </select>

            {/* 레이드 관문 div */}
            <div></div>
          </AddArea>
        ) : (
          ""
        )}
      </LoaModal>
    </>
  );
}
