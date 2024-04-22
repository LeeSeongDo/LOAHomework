// 숙제 페이지 입니다.
// 메뉴 클릭시 클릭한 항목의 내용으로 바뀌게 설정

import Homework_SideMenu from "../../src/Components/Homework_SideMenu";
import { useState } from "react";

export default function Homework(): JSX.Element {
  const [menu, setMenu] = useState("");

  return (
    <div>
      <Homework_SideMenu></Homework_SideMenu>
    </div>
  );
}
