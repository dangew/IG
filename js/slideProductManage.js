export const slideProductManage = (slideWrapperId) => {
  const slidewrap = document.querySelector(`${slideWrapperId} .clothes`); // 슬라이드 감싸는 div
  const slides = document.querySelectorAll(`${slideWrapperId} .clothe-box`); // 모든 슬라이드들
  const slideCnt = slides.length - 1; // cell 갯수
  let currentSlide = 0; // 현재 슬라이드 인덱스

  // 슬라이드를 이동시키는 함수
  function moveSlide(index) {
    slidewrap.style.transform = `translateX(-${18 * index}vw)`; // 슬라이드를 이동
  }

  // 2초마다 슬라이드 변경
  const interval = setInterval(() => {
    let nextSlide = currentSlide + 5;
    if (currentSlide === slideCnt - 4) {
      nextSlide = 0;
      slidewrap.style.transition = `transform ${slideCnt * 100}ms ease-in-out`;
    } else if (nextSlide + 5 > slideCnt) {
      nextSlide = slideCnt - 4;
      slidewrap.style.transition = `transform ${
        (slideCnt - currentSlide) * 100
      }ms ease-in-out`;
    }
    currentSlide = nextSlide;
    moveSlide(currentSlide);
  }, 3000); // 2초마다 슬라이드 전환
};
