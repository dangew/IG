import { MENU_CATEGORY, CATEGORY_OF_MENU } from "./enum.js";
import { setAttributes } from "./function.js";

// menu bar 만들기 함수
export const menuBar = () => {
  for (let temp_menu in MENU_CATEGORY) {
    // 메뉴바 엘리먼트(ul)에 접근
    const $menuBar = document.querySelector("#menu-bar");
    // 메뉴바 엘리먼트에 자식으로 추가할 새로운 엘리먼트 생성
    const $newElem = document.createElement("li");

    // 자식 엘리먼트(li)에 속성, 클래스 추가
    setAttributes($newElem, { id: temp_menu, value: MENU_CATEGORY[temp_menu] });
    $newElem.classList.add("margin");

    // 자식 엘리먼트(li)의 자식으로 들어갈 엘리먼트(select) 생성
    const $newChild = document.createElement("select");
    // 엘리먼트(select) 속성 추가
    setAttributes($newChild, {
      id: `${temp_menu}-select`,
    });
    // 자식 엘리먼트(select)의 자식으로 들어갈 엘리먼트(option) 생성
    const $optionForPlaceHolder = document.createElement("option");
    // 자식 엘리먼트(option)의 innerText 값 설정
    const $optionContent = document.createTextNode(
      `${MENU_CATEGORY[temp_menu]}`
    );
    $optionForPlaceHolder.appendChild($optionContent);

    // 메뉴 문자열 만들기
    let menuString = `CATEGORY_${temp_menu}`;
    // 자식 엘리먼트(option)에 속성 추가
    setAttributes($optionForPlaceHolder, {
      value: `${MENU_CATEGORY[temp_menu]}`,
      disabled: "true",
      hidden: "true",
      selected: "true",
    });
    $newChild.appendChild($optionForPlaceHolder);

    // 메뉴 별 옵션들이 들어간 객체를 돌며 자식 엘리먼트 삽입
    for (let temp_new in CATEGORY_OF_MENU[menuString]) {
      // 추가할 엘리먼트(option) 생성
      const $newOption = document.createElement("option");
      // 엘리먼트(option) 내 text 설정
      const $optionContent = document.createTextNode(
        `${CATEGORY_OF_MENU[menuString][temp_new]}`
      );
      $newOption.appendChild($optionContent);

      // 엘리먼트(option) 속성 추가
      setAttributes($newOption, { value: `${temp_new}` });
      // 엘리먼트(select)에 엘리먼트(option)를 자식으로 추가
      $newChild.appendChild($newOption);
    }
    // ============mouse over select options drop down============
    // // eventlistener 추가
    // $newChild.addEventListener("mouseover", (event) => {
    //   event.target.size = event.target.options.length;
    // });
    // $newChild.addEventListener("mouseout", (event) => {
    //   event.target.size = 1;
    // });

    // 엘리먼트(li)에 엘리먼트(select)를 자식으로 추가
    $newElem.appendChild($newChild);
    // 엘리먼트(ul)에 엘리먼트(li)를 자식으로 추가
    $menuBar.appendChild($newElem);
  }
};
