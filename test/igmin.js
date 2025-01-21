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
// const slidewrap = document.querySelector(".slidewrap");
// const slideContainer = document.querySelector(".slides");
// const slides = document.querySelectorAll(".slide");
// const slideWidth = slidewrap.offsetWidth; // 슬라이드 너비 계산

// 2초마다 슬라이드 변경

// // 슬라이드 이동 함수 (애니메이션 없이 바로 이동)
// function goToSlide(index) {
//   // slideContainer.style.transition = "none"; // 애니메이션 없이 이동
//   slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
// }

// // 슬라이드 자동 넘기기 (2초마다), 마지막 슬라이드에 도달했을 때 첫 번째로 넘기기
// setInterval(() => {
//   // 슬라이드를 한 칸씩 넘기기
//   currentSlide++;
//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
// });
// const slidewrap = document.querySelector(".slidewrap"); // 슬라이드를 감싸는 div
// const slides = document.querySelectorAll(".slide"); // 모든 슬라이드들
// let currentSlide = 0; // 현재 슬라이드 인덱스

// // 슬라이드를 이동시키는 함수
// function moveSlide(index) {
//   const slideWidth = slidewrap.offsetWidth; // 슬라이드의 너비
//   slidewrap.style.transition = "transform 0.5s ease-in-out"; // 슬라이드 이동 애니메이션
//   slidewrap.style.transform = `translateX(${-index * slideWidth}px)`; // 슬라이드를 이동
// }

// // 2초마다 슬라이드 변경
// setInterval(() => {
//   currentSlide++; // 슬라이드를 한 칸 넘김

//   if (currentSlide >= slides.length) {
//     // 마지막 슬라이드에 도달했을 때 첫 번째 슬라이드로 돌아가기
//     currentSlide = 0; // 첫 번째 슬라이드로 돌아감
//     slidewrap.style.transition = "none"; // 애니메이션 없이 즉시 이동
//     moveSlide(currentSlide);

//     // 50ms 뒤에 다시 애니메이션을 활성화하여 부드럽게 전환
//     setTimeout(() => {
//       slidewrap.style.transition = "transform 0.5s ease-in-out"; // 전환 애니메이션 활성화
//       moveSlide(currentSlide);
//     }, 50); // 조금 기다린 후 애니메이션을 다시 활성화
//   } else {
//     moveSlide(currentSlide); // 일반적으로 슬라이드 이동
//   }
// }, 2000); // 2초마다 슬라이드 전환

const slidewrap = document.querySelector(".slidewrap"); // 슬라이드 감싸는 div
const slides = document.querySelectorAll(".slide"); // 모든 슬라이드들
let currentSlide = 0; // 현재 슬라이드 인덱스

// 슬라이드를 이동시키는 함수
function moveSlide(index) {
  const slideWidth = slidewrap.offsetWidth; // 슬라이드의 너비
  slidewrap.querySelector(".slides").style.transform = `translateX(${
    -index * slideWidth
  }px)`; // 슬라이드를 이동
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
      slidewrap.querySelector(".slides").style.transition =
        "transform 0.5s ease-in-out"; // 애니메이션 활성화
    }, 50); // 짧은 시간 후 애니메이션 다시 활성화
  } else {
    slidewrap.querySelector(".slides").style.transition =
      "transform 0.5s ease-in-out"; // 애니메이션 켜기
    moveSlide(currentSlide); // 일반적으로 슬라이드 이동
  }
}, 2000); // 2초마다 슬라이드 전환

//이미지 확대

let clothes = document.querySelectorAll(".clothe-box");

// 각 이미지에 마우스오버 이벤트 추가
clothes.forEach((cloth) => {
  cloth.addEventListener("mouseover", () => {
    cloth.style.transform = "scale(1.2)";
    cloth.style.zIndex = "1000"; // 이미지가 다른 요소 위에 오도록 설정
  });

  cloth.addEventListener("mouseout", () => {
    clothes.forEach((reset) => {
      cloth.style.transform = "scale(1)";
      cloth.style.zIndex = ""; // 기본값으로 복원
    });
  });
});
