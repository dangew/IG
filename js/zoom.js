export const zoomManage = () => {
    //이미지 확대
    let clothes = document.querySelectorAll(".clothe-box");

    // 각 이미지에 마우스오버 이벤트 추가
    clothes.forEach((cloth) => {
        console.log(`cloth: ${cloth}`);
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
};
