const slidewrap = document.querySelector(".clothes"); // 슬라이드 감싸는 div
const slides = document.querySelectorAll(".clothe-box"); // 모든 슬라이드들
let currentSlide = 0; // 현재 슬라이드 인덱스

// 슬라이드를 이동시키는 함수
function moveSlide(index) {
  const slideWidth = 300; // 슬라이드의 너비
  slidewrap.style.transform = `translateX(-${slideWidth * index}px)`; // 슬라이드를 이동
}

// 2초마다 슬라이드 변경
setInterval(() => {
  if (currentSlide < slides.length - 1) {
    currentSlide++; // 현재 슬라이드 인덱스 증가
    moveSlide(currentSlide);
  } else {
    console.log(interval);
    clearInterval(interval); // 마지막 슬라이드에서 반복 중단
  }

  setTimeout(() => {
    slidewrap.style.transition = "transform 0.5s ease-in-out"; // 애니메이션 활성화
  }, 50); // 짧은 시간 후 애니메이션 다시 활성화
}, 2000); // 2초마다 슬라이드 전환

// 슬라이드를 이동시키는 조건
if (currentSlide < slides.length) {
  // 슬라이드의 너비
  slidewrap.style.transform = `translateX(-${300 * currentSlide}px)`; // 슬라이드를 이동
}
