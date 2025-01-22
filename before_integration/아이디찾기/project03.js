const provenumber = document.querySelector("#proveNumber");
const proveemail = document.querySelector("#proveEmail");
const Bt = document.querySelector(".bt");

document
  .getElementById("proveNumber")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkInput();
    }
  });
//6자리 숫자 입력받기
//숫자만 입력받기
function number(provenumber) {
  provenumber.value = provenumber.value.replace(/[^0-9]/g, "");
  //6자리 숫자만 입력받도록 제한
  if (provenumber.value.length > 6) {
    provenumber.value = provenumber.value.slice(0, 6);
  }
}
//입력된 값이 6자리 숫자인지 확인하는 함수
function checkInput() {
  const input = document.getElementById("proveNumber").value;
  if (input.length !== 6 || isNaN(input)) {
    alert("인증번호 6자리를 입력해 주세요.");
  } else {
    alert("휴대폰으로 아이디를 전송하였습니다.");
  }
}

document
  .getElementById("proveEmail")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkemail();
    }
  });

function email(proveemail) {
  proveemail.value = proveemail.value.replace(/[^0-9]/g, "");
  if (proveemail.value.length > 6) {
    proveemail.value = proveemail.value.slice(0, 6);
  }
}
function checkemail() {
  const input = document.getElementById("proveEmail").value;
  if (input.length !== 6 || isNaN(input)) {
    alert("인증번호 6자리를 입력해 주세요");
  } else {
    alert("이메일로 아이디를 전송하였습니다.");
  }
}
Bt.onclick = function backLogin() {
  alert("다시 로그인 해 주세요.");
  window.open("/project02.html", "_blank");
};
