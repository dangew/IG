export const slideManage = () => {
  const slidewrap = document.querySelector(".clothes"); // 슬라이드 감싸는 div
  const slides = document.querySelectorAll(".clothe-box"); // 모든 슬라이드들
  let currentSlide = 0; // 현재 슬라이드 인덱스

  // 슬라이드를 이동시키는 함수
  function moveSlide(index) {
    const slideWidth = 300; // 슬라이드의 너비
    slidewrap.style.transform = `translateX(-${slideWidth * index}px)`; // 슬라이드를 이동
  }

  // 2초마다 슬라이드 변경
  const interval = setInterval(() => {
    if (currentSlide < slides.length - 1) {
      // 마지막 슬라이드가 아닌 경우 슬라이드 이동
      currentSlide++;
      moveSlide(currentSlide);
    } else {
      // 마지막 슬라이드에 도달했을 때 setInterval 멈춤
      clearInterval(interval); // 반복 멈춤
    }

    // 애니메이션 활성화
    setTimeout(() => {
      slidewrap.style.transition = "transform 0.5s ease-in-out"; // 애니메이션 활성화
    }, 50);
  }, 2000); // 2초마다 슬라이드 전환
};
