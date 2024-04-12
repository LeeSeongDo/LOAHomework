import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchCharacter } from "./api/SearchCharacter";
import LostArkNotice from "../src/Components/LostArkNotice";
import MyCharacter_Main from "../src/Components/MyCharacter_Main";
import LostArkEvent from "../src/Components/LostArkEvent";
import Modal from "../src/Commons/Modal";

export default function Home() {

  return (
    <>
      <LostArkNotice></LostArkNotice>
      <MyCharacter_Main></MyCharacter_Main>
      <Modal></Modal>
      <LostArkEvent></LostArkEvent>
    </>
  );
}
