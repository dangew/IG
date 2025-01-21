const LOGIN_TIME_LIMIT = 1; // CONST VALUE that determine the limit of login time(minute)

// login time 컨트롤 함수
export const timerManage = () => {
    // 로그인 타이머 엘리먼트 접근
    const $loginTimer = document.querySelector("#login-timer"); // timer element
    $loginTimer.setAttribute("style", "border: none; padding: 0;");

    // 제한 시간 설정
    var targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() + LOGIN_TIME_LIMIT);

    // 1초 주기 반복 실행
    var timerInterval = setInterval(() => {
        // 현재 시간부터 제한 시간까지 남은 시간 화면에 표시
        var now = new Date();
        var distance = targetTime - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $loginTimer.innerHTML = minutes + "m " + seconds + "s ";

        // 남은 시간이 0인 경우
        if (distance < 0) {
            // 인터벌 종료
            clearInterval(timerInterval);
            // 버튼 텍스트 변경
            $loginTimer.innerHTML = "연장";

            // 사용자에게 연장 여부 확인
            const expandFlag = window.confirm("연장하시겠습니까?");
            if (expandFlag) {
                // 연장 하는 경우 '연장 버튼' 활성화
                activeBtn($loginTimer);
            } else {
                // 연장 안하는 경우 윈도우 끄기
                window.close();
            }
        }
    }, 1000);
};

// button 활성화
const activeBtn = (target) => {
    // 버튼 스타일 적용
    target.style.border = "1px dotted #333333";
    target.style.borderRadius = "10px";
    target.style.padding = "2px";

    // 클릭 이벤트 리스너 추가
    target.addEventListener("click", () => {
        timerManage();
    });
};
