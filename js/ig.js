import { PRODUCT_AND_TITLE, PRODUCT_AND_TITLE_2 } from "./enum.js";
import { slideManage } from "./slide.js";
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

// 엘리먼트 생성 함수 호출
menuBar();
productElement("#up-section-clothes", PRODUCT_AND_TITLE);
productElement("#down-section-clothes", PRODUCT_AND_TITLE_2);

// 앱 기능 수행 함수 호출
slideManage();
zoomManage();
timerManage();
