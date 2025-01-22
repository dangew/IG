const provepassword = document.querySelector("#provePassword");
const provepasswordemail = document.querySelector("#provePasswordEmail");
const Btt = document.querySelector(".btt");

document
  .getElementById("provePassword")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkInput();
    }
  });
//6자리 숫자 입력받기
//숫자만 입력받기
function password(provepassword) {
  provepassword.value = provepassword.value.replace(/[^0-9]/g, "");
  //6자리 숫자만 입력받도록 제한
  if (provepassword.value.length > 6) {
    provepassword.value = provepassword.value.slice(0, 6);
  }
}
//입력된 값이 6자리 숫자인지 확인하는 함수
function checkInput() {
  const input = document.getElementById("provePassword").value;
  if (input.length !== 6 || isNaN(input)) {
    alert("인증번호 6자리를 입력해 주세요.");
  } else {
    alert("휴대폰으로 아이디를 전송하였습니다.");
  }
}

document
  .getElementById("provePasswordEmail")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkemail();
    }
  });

function passwordemail(provepasswordemail) {
  provepasswordemail.value = provepasswordemail.value.replace(/[^0-9]/g, "");
  if (provepasswordemail.value.length > 6) {
    provepasswordemail.value = provepasswordemail.value.slice(0, 6);
  }
}
function checkemail() {
  const input = document.getElementById("provePasswordEmail").value;
  if (input.length !== 6 || isNaN(input)) {
    alert("인증번호 6자리를 입력해 주세요");
  } else {
    alert("이메일로 아이디를 전송하였습니다.");
  }
}
Btt.onclick = function backLogin() {
  alert("다시 로그인 해 주세요.");
  window.open("/project02.html", "_blank");
};
