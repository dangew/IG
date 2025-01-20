let clothes = document.querySelectorAll(".clothe-box");

clothes.forEach((cloth) => {
    cloth.addEventListener("mouseover", () => {
        cloth.style.transform = "scale(1.2)";
        cloth.style.zIndex = "1000";

        // 나머지 이미지는 축소
        clothes.forEach((other, otherIndex) => {
            if (otherIndex !== index) {
                other.style.transform = "scale(0.8)";
                other.style.zIndex = ""; // 기본값으로 설정
            }
        });
    });

    cloth.addEventListener("mouseout", () => {
        clothes.forEach((reset) => {
            cloth.style.transform = "scale(1)";
            cloth.style.zIndex = ""; // 기본값으로 복원
        });
    });
});
