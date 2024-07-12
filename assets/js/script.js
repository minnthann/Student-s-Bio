const img = document.getElementById ("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
    // Hexagon
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",

    // paralleogon
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",
    // left point
    "40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%",

    // frame
    "0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%",
];


function changeShape () {
    const randomShape=Math.floor(Math.random()*shapeArr.length);
    const newClipPath = shapeArr[randomShape];
    const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

    // နမူနာကြည့်
    // img.style.setProperty("--shape," shapeArr[randomShape]);
    if (currentClipPath !== newClipPath) { img.style.setProperty("--shap", newClipPath);

    }else {
    img.style.setProperty("--shape", shapeArr[randomShape + 1]);
    console.log(shapeArr[randomShape +1]);
    }

}


// }else () {img.style.setProperty("--shape", shapeArr[randomShape + 1]);
//     console.log(s)
