const $proveNumber = document.querySelector("#proveNumber");
const $proveEmail = document.querySelector("#proveEmail");
const $loginAgainBtn = document.querySelectorAll(".login-again-btn");
// 체크박스
const $numberInputCheckbox = document.querySelector("#number-input-checkbox");
const $emailInputCheckbox = document.querySelector("#email-input-checkbox");

// ==============================체크박스 컨트롤==============================
// 휴대전화 인증
$numberInputCheckbox.addEventListener("change", (event) => {
  let checked = event.target.checked;

  const $numberBoxHidden = document.querySelector("#number-box-hidden");
  if (checked) {
    // 밑에 인증 절차 hidden 속성 false로 변경
    $numberBoxHidden.hidden = false;
    // 이메일 인증 체크 되어 있으면 풀기
    if ($emailInputCheckbox.checked) {
      $emailInputCheckbox.click();
    }
  } else {
    // 밑에 인증 절차 hidden 속성 true로 변경
    $numberBoxHidden.hidden = true;
  }
});

// 이메일 인증
$emailInputCheckbox.addEventListener("change", (event) => {
  let checked = event.target.checked;

  const $emailBoxHidden = document.querySelector("#email-box-hidden");
  if (checked) {
    // 밑에 인증 절차 hidden 속성 false로 변경
    $emailBoxHidden.hidden = false;
    // 이메일 인증 체크 되어 있으면 풀기
    if ($numberInputCheckbox.checked) {
      $numberInputCheckbox.click();
    }
  } else {
    // 밑에 인증 절차 hidden 속성 true로 변경
    $emailBoxHidden.hidden = true;
  }
});
// ==============================/체크박스 컨트롤==============================

// 인증번호 input에서 keyDown 이벤트 핸들러 할당
$proveNumber.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    alert("휴대폰으로 아이디를 전송하였습니다.");
  }
});

$proveNumber.addEventListener("input", (event) => {
  number(event.target);
});

// function for oninput event at proveNumber element
function number(provenumber) {
  provenumber.value = provenumber.value.replace(/[^0-9]/g, "");
  //6자리 숫자만 입력받도록 제한
  if (provenumber.value.length > 6) {
    provenumber.value = provenumber.value.slice(0, 6);
  }
}

$proveEmail.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    alert("이메일로 아이디를 전송하였습니다.");
  }
});

$proveEmail.addEventListener("input", function (event) {
  email(event.target);
});

// function for oninput event at proveEmail element
function email(target) {
  target.value = target.value.replace(/[^0-9]/g, "");
  if (target.value.length > 6) {
    target.value = target.value.slice(0, 6);
  }
}

$loginAgainBtn.forEach((targetBtn) => {
  targetBtn.addEventListener("click", () => {
    alert("다시 로그인 해 주세요.");
    window.close();
    window.open("../html/loginMain.html", "_blank");
  });
});
