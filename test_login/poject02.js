const findid = document.querySelector("#findId");
const nt = document.querySelector(".next");

let findidvalue = findid.value;
if (findidvalue === id123) {
  alert("'다음'을 누른 후 진행해 주세요.");
} else {
  alert("존재하지 않는 아이디입니다. 다시 한 번 확인해주세요.");
}

nt.onclick = function pass() {
  window.open("/project05.html", "_blank");
};
