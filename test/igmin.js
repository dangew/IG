// // 슬라이드 관련 변수
// const slidewrap = document.querySelector(".slidewrap");
// const slideContainer = document.querySelector(".slides");
// const slides = document.querySelectorAll(".slide");
// const slideWidth = slidewrap.offsetWidth; // 슬라이드 너비 계산
// let currentSlide = 0; // 현재 활성화된 슬라이드 인덱스

// // 슬라이드 이동 함수
// function goToSlide(index) {
//   // 이동할 때마다 translateX로 슬라이드 위치를 설정
//   slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
// }

// // 슬라이드 자동 넘기기 (2초마다),마지막 슬라이드에 도달했을 때
// //첫 번째로 넘기기
// setInterval(() => {
//   currentSlide++; //슬라이드를 한 칸씩 넘긴다.

//   //마지막 슬라이드에 도달했을 때 첫 번째 슬라이드로 돌아가기
//   if (currntSlide >= slides.length) {
//     currentSlide = 0;
//   }

//   goToSlide(currentSlide); //현재 슬라이드로 이동
// }, 2000);

// // 슬라이드 끝에 도달했을 때 첫 번째 슬라이드로 돌아가게 설정 (애니메이션이 끝나면)
// slideContainer.addEventListener("transitionend", () => {
//   if (currentSlide === slides.length - 1) {
//     // 애니메이션이 끝난 후 첫 번째 슬라이드로 즉시 이동
//     setTimeout(() => {
//       slideContainer.style.transition = "none"; // 애니메이션 없이 이동
//       slideContainer.style.transform = `translateX(0)`; // 첫 번째 슬라이드로 이동
//       currentSlide = 0; // 슬라이드 인덱스를 첫 번째로 설정
//       // 딜레이 후 애니메이션 효과를 다시 활성화
//       setTimeout(() => {
//         slideContainer.style.transition = "transform 1s ease"; // 애니메이션 재시작
//       }, 50);
//     }, 1000); // 1초 후 첫 번째 슬라이드로 이동
//   }
// });

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

    // 마지막 슬라이드에 도달했을 때 첫 번째 슬라이드로 돌아가기
    // if (currentSlide >= slides.length) {
    //     // currentSlide = 0;
    //     // 첫 번째 슬라이드로 돌아가면 애니메이션 없이 즉시 이동 후, transition 다시 활성화
    //     // slideContainer.style.transition = "none"; // 애니메이션 비활성화
    //     slideContainer.style.transform = `translateX(0)`; // 첫 번째 슬라이드로 즉시 이동
    //     // 딜레이 후 애니메이션을 다시 활성화
    //     setTimeout(() => {
    //         slideContainer.style.transition = "transform 1s ease"; // 애니메이션 재시작
    //     }, 50);
    // }

    goToSlide(currentSlide); // 현재 슬라이드로 이동
}, 2000); // 2초마다 실행
