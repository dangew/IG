import { MENU_CATEGORY, CATEGORY_OF_MENU } from "./enum.js";
// menu bar 만들기 함수
// 즉시 실행 함수
(function () {
    for (let temp_menu in MENU_CATEGORY) {
        const $menuBar = document.querySelector("#menu-bar");
        const $newElem = document.createElement("li");

        $newElem.setAttribute("id", temp_menu);
        $newElem.setAttribute("value", MENU_CATEGORY[temp_menu]);
        $newElem.classList.add("margin");

        const $newChild = document.createElement("select");
        let menuString = `CATEGORY_${temp_menu}`;
        console.log(`menuString: ${menuString}`);

        const $optionForPlaceHolder = document.createElement("option");
        const $optionContent = document.createTextNode(`${MENU_CATEGORY[temp_menu]}`);
        $optionForPlaceHolder.appendChild($optionContent);
        $optionForPlaceHolder.setAttribute("value", `${MENU_CATEGORY[temp_menu]}`);
        $optionForPlaceHolder.setAttribute("disabled", "true");
        $optionForPlaceHolder.setAttribute("hidden", "true");
        $optionForPlaceHolder.setAttribute("selected", "true");
        $newChild.appendChild($optionForPlaceHolder);

        for (let temp_new in CATEGORY_OF_MENU[menuString]) {
            console.log(temp_new);
            const $newOption = document.createElement("option");
            const $optionContent = document.createTextNode(`${CATEGORY_OF_MENU[menuString][temp_new]}`);
            $newOption.appendChild($optionContent);
            $newOption.setAttribute("value", `${temp_new}`);
            $newChild.appendChild($newOption);
        }
        console.log("");

        $newElem.appendChild($newChild);
        $menuBar.appendChild($newElem);
    }
})();
