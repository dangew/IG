export const slideManage = () => {
    // 슬라이드 관련 변수
    const slidewrap = document.querySelector(".slidewrap");
    const slideContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slidewrap.offsetWidth; // 슬라이드 너비 계산
    let currentSlide = 0; // 현재 활성화된 슬라이드 인덱스

    // 슬라이드 이동 함수 (애니메이션 없이 바로 이동)
    function goToSlide(index) {
        // slideContainer.style.transition = "none"; // 애니메이션 없이 이동
        slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // 슬라이드 자동 넘기기 (2초마다), 마지막 슬라이드에 도달했을 때 첫 번째로 넘기기
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length; // 슬라이드를 한 칸씩 넘긴다.
        goToSlide(currentSlide); // 현재 슬라이드로 이동
    }, 2000); // 2초마다 실행
};
