import { PRODUCT_AND_TITLE, PRODUCT_AND_TITLE_2 } from "./enum.js";
import { slideManage } from "./slide.js";
import { slideProductManage } from "./slideProductManage.js";
import { zoomManage } from "./zoom.js";
import { timerManage } from "./timer.js";
import { productElement } from "./productElement.js";
import { menuBar } from "./menuBar.js";

(() => {
  const $searchBtn = document.querySelector("#search-button");
  $searchBtn.addEventListener("click", () => {
    alert("미완성 검색 버튼");
  });
})();

const $loginBtn = document.getElementById("login-btn");
$loginBtn.onclick = function getlogin() {
  alert("로그인 페이지로 이동합니다.");
  var baseUrl = "../html/loginMain.html";
  var newUrl = baseUrl;
  window.open(newUrl, "_blank");
};

document.addEventListener("DOMContentLoaded", () => {
  // ======== 엘리먼트 생성 함수 호출 ========
  // 메뉴바 엘리먼트 생성
  menuBar();
  // 상품 엘리먼트 생성
  productElement("#up-section-clothes", PRODUCT_AND_TITLE);
  productElement("#down-section-clothes", PRODUCT_AND_TITLE_2);

  // ======== 앱 기능 수행 함수 호출 ========
  // 메인 이미지 슬라이드 기능
  slideManage();
  // 상품 엘리먼트 슬라이드
  slideProductManage("#up-clothes-slidewrap");
  slideProductManage("#down-clothes-slidewrap");

  zoomManage();
  timerManage();
});
