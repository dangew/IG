// el(엘리먼트)에 attrs(속성) 추가 함수 ===================================
// el => 속성을 추가하고자 하는 엘리먼트
// attrs => { 속성 이름(키): 속성 값(value), ... } 형태로 된 객체
export function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
