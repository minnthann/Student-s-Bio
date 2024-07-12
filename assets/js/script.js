const img = document.getElementById ("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
    // Hexagon
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",

    // paralleogon
    "50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%",
    // left point
    "40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%",

    // frame
    "20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%",
    "20% 0%, 100% 1%, 11% 53%, 100% 80%, 80% 100%, 20% 100%, 1% 78%, 2% 21%",

    "0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%",
];


function changeShape () {
    const randomShape=Math.floor(Math.random() * shapeArr.length);
    const newClipPath = shapeArr[randomShape];
    const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

    // နမူနာကြည့်
    // img.style.setProperty("--shape," shapeArr[randomShape]);
    if (currentClipPath !== newClipPath) { 
        img.style.setProperty("--shape", newClipPath);

    }else {
         img.style.setProperty("--shape", shapeArr[randomShape + 1]);
         console.log(shapeArr[randomShape +1]);
    }

}


// }else () {img.style.setProperty("--shape", shapeArr[randomShape + 1]);
//     console.log(s)
