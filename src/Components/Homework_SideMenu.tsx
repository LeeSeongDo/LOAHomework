// 내 숙제 사이트에서 사용할 사이드 메뉴 입니다.

import { MenuBox, MenuText } from "../Emotion/Homework";

// 필요한 데이터
// 1.주간 숙제 (레이드 ㄷ)
// 2.일일 숙제(에포나 의뢰, 카오스 게이트, 가디언 토벌), 휴식 게이지 까지 체크하도록
// 3.오늘의 숙제 (카오스게이트, 필드보스)
// => 월 화 수 목 금 토 일 식으로 만들고 체크하는식으로 만들어보자.
// 5.길드 컨텐츠

export default function Homework_SideMenu({
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<String>>;
}): JSX.Element {
  const ClickEvent = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setMenu(e.currentTarget.innerText);
  };

  return (
    <MenuBox>
      <MenuText onClick={ClickEvent}>주간 숙제</MenuText>
      <MenuText onClick={ClickEvent}>일일 숙제</MenuText>
      <MenuText onClick={ClickEvent}>일일 컨텐츠</MenuText>
      <MenuText onClick={ClickEvent}>길드 컨텐츠</MenuText>
    </MenuBox>
  );
}
