import React, { useState } from "react";
import { Button, Modal as LoaModal } from "antd";
import { RaidData } from "../../pages/Data/RaidData";

export default function Modal(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        레이드 데이터 확인하기
      </Button>
      <LoaModal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {RaidData.map((data) => (
          <div>
            <p>{data.name}</p>
          </div>
        ))}
      </LoaModal>
    </>
  );
}
