const $loginAgainBtn = document.querySelectorAll(".login-again-btn");
const $targetIdToFindPw = document.querySelector("#target-id-to-find-pw");

$loginAgainBtn.forEach((targetBtn) => {
  targetBtn.addEventListener("click", () => {
    alert("다시 로그인 해 주세요.");
    window.close();
    window.open("./project02.html", "_blank");
  });
});

$targetIdToFindPw.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    alert("인증 화면으로 넘어갑니다.");
    window.open("./project03.html", "_blank");
  }
});
