// 숙제 페이지 입니다.
// 메뉴 클릭시 클릭한 항목의 내용으로 바뀌게 설정

import DailyContent from "../../src/Components/Homework/DailyContent";
import DailyHomework from "../../src/Components/Homework/DailyHomework";
import GuildContent from "../../src/Components/Homework/GuildContent";
import WeeklyContent from "../../src/Components/Homework/WeeklyContent";
import Homework_SideMenu from "../../src/Components/Homework_SideMenu";
import { useState } from "react";

export default function Homework(): JSX.Element {
  const [menu, setMenu] = useState<String>("menu입니다");

  console.log(menu);

  return (
    <div>
      <Homework_SideMenu setMenu={setMenu} />
      {menu === "주간 숙제" ? <WeeklyContent></WeeklyContent> : ""}
      {menu === "일일 숙제" ? <DailyHomework></DailyHomework> : ""}
      {menu === "일일 컨텐츠" ? <DailyContent></DailyContent> : ""}
      {menu === "길드 컨텐츠" ? <GuildContent></GuildContent> : ""}
    </div>
  );
}
