import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchCharacter } from "./api/SearchCharacter";
import LostArkNotice from "../src/Components/LostArkNotice";
import MyCharacter_Main from "../src/Components/MyCharacter_Main";
import LostArkEvent from "../src/Components/LostArkEvent";
import Modal from "../src/Commons/Modal";

export default function Home() {
  const [Nickname, setNickName] = useState("");
  const [CharacterInfo, setCharacterInfo] = useState([]);

  // Write 이벤트 입니다.
  const WriteName = (e) => {
    setNickName(e.target.value);
  };

  // 로스트아크 이벤트 가져와지는지 테스트.
  const Test = async () => {
    axios
      .get("https://developer-lostark.game.onstove.com/news/events", {
        headers: {
          Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDExODYifQ.dp5Rwt6qAxGWBF6L00JpgQ8FRk0LC2McvjnYrcIdaVmlW1lcMOhWfDEuQ3d8PBB_bUevh03dw6Shx3sc8_X_B_cUja3eONQ0MWPPa9ZRvHYBjaBn4RPl4pe_M5quBOaQVhTBhcxNYJoCxVQhHfwf_0K0rmAEDHYdSICEIpeD-Ve8WaEBm7JXa36RBP-vefRtcIZh1O35knWa4bXCjuT4rodTYx4WiE_bt4sCUGfaPfzriAe6P5OjlkGx1YEkk3nYGJCVX-cfdIA5qPAc7612BrjV_YuXx5Qh8XzsPL6m5N9v-h-_GAEW10OWSYvxJabPYV8KhPMKanaEpdrpS6i6jA`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const handleSearch = () => {
    // 여기서 SearchCharacter 함수를 호출하고, 닉네임을 전달하여 해당 캐릭터를 검색합니다.
    SearchCharacter(Nickname);
    console.log(Nickname);
  };
  return (
    <>
      <LostArkNotice></LostArkNotice>
      <MyCharacter_Main></MyCharacter_Main>
      <input
        type="text"
        placeholder="닉네임을 적어주세요."
        onChange={WriteName}
      />
      <Modal></Modal>

      <LostArkEvent></LostArkEvent>
    </>
  );
}
