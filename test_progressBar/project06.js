const am = document.querySelector("#amount");
const progressbar = document.querySelector("#progressBar");

function updateProgress() {
  const am = parseInt(document.getElementById("amount").value);
  const progressbar = document.getElementById("progressBar");
  console.log(progressbar);
  if (progressbar.value <= 0) {
    alert("재고가 없습니다.");
  }
  progressbar.value -= am;
}
