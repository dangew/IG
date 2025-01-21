import { PRODUCT_AND_TITLE } from "./enum.js";
import { setAttributes } from "./function.js";

export const productElement = (parentEl, ENUM) => {
    const $clothes = document.querySelector(`${parentEl}`);
    const imgDir = "../images/";
    const aHref = ``;

    for (var imgName in ENUM) {
        // console.log(`key: ${imgName}`); // ex) 옷사진6.jpg
        // console.log(`value: ${ENUM[imgName]}`); // ex) "올 가을은 '이걸로'"

        // <div class="img-box-for-items clothe-box"></div> 생성
        const $clotheBox = document.createElement("div");
        setAttributes($clotheBox, { class: "img-box-for-items clothe-box" });

        // <img src="../images/옷사진3.jpg" alt="skirt" /> 생성
        const $productImg = document.createElement("img");
        setAttributes($productImg, { src: `${imgDir}${imgName}`, alt: imgName });

        // <p class="product-title"> 생성
        const $pInClotheBox = document.createElement("p");
        setAttributes($pInClotheBox, { class: "product-title" });

        // <a href="">올 가을은 '이걸로'</a> 생성
        const $aInP = document.createElement("a");
        setAttributes($aInP, { class: "product-title" });
        const $aContext = document.createTextNode(`${ENUM[imgName]}`);
        $aInP.appendChild($aContext);

        // insert a in p
        $pInClotheBox.appendChild($aInP);

        // insert img and p in div
        $clotheBox.appendChild($productImg);
        $clotheBox.appendChild($pInClotheBox);

        $clothes.appendChild($clotheBox);
    }
};
