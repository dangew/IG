import { PRODUCT_AND_TITLE, PRODUCT_AND_TITLE_2 } from "./enum.js";

const urlParams = new URLSearchParams(window.location.search);

const $checkBtn = document.getElementById("check");
$checkBtn.addEventListener("click", () => {
  updateProgress();
});

function updateProgress() {
  const am = parseInt(document.getElementById("amount").value);
  const progressbar = document.getElementById("progressBar");
  console.log(progressbar);
  if (progressbar.value <= 0) {
    alert("재고가 없습니다.");
  }
  progressbar.value -= am;
}

(() => {
  const $targetImgElement = document.querySelector(".target-product-img");
  const $targetProductNameElement = document.getElementById("product-name");

  var imgBoxId = urlParams.get("imgName");
  var imgName = imgBoxId.slice(0, imgBoxId.length - 4);
  var imgSrc = "../images/" + imgName;

  $targetImgElement.setAttribute("src", imgSrc);
  $targetProductNameElement.innerText = PRODUCT_AND_TITLE[imgName]
    ? PRODUCT_AND_TITLE[imgName]
    : PRODUCT_AND_TITLE_2[imgName];
})();
