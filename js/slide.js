export const slideManage = () => {
    const slidewrap = document.querySelector(".slidewrap"); // 슬라이드 감싸는 div
    const slides = document.querySelectorAll(".slide"); // 모든 슬라이드들
    let currentSlide = 0; // 현재 슬라이드 인덱스

    // 슬라이드를 이동시키는 함수
    function moveSlide(index) {
        const slideWidth = slidewrap.offsetWidth; // 슬라이드의 너비
        slidewrap.querySelector(".slides").style.transform = `translateX(${-index * slideWidth}px)`; // 슬라이드를 이동
    }

    // 2초마다 슬라이드 변경
    setInterval(() => {
        currentSlide++; // 슬라이드를 한 칸 넘김

        if (currentSlide >= slides.length) {
            // 마지막 슬라이드에 도달했을 때 첫 번째 슬라이드로 돌아가기
            currentSlide = 0; // 첫 번째 슬라이드로 돌아감
            slidewrap.querySelector(".slides").style.transition = "none"; // 애니메이션 없이 즉시 이동
            moveSlide(currentSlide);

            // 50ms 후에 애니메이션을 다시 활성화하여 부드럽게 전환
            setTimeout(() => {
                slidewrap.querySelector(".slides").style.transition = "transform 0.5s ease-in-out"; // 애니메이션 활성화
            }, 50); // 짧은 시간 후 애니메이션 다시 활성화
        } else {
            slidewrap.querySelector(".slides").style.transition = "transform 0.5s ease-in-out"; // 애니메이션 켜기
            moveSlide(currentSlide); // 일반적으로 슬라이드 이동
        }
    }, 2000); // 2초마다 슬라이드 전환
};
