const images = [
    {path: "../images/Daisy.jpeg", description: "Daisy laying down"},
    {path: "../images/Zoey.jpeg", description: "Zoey staring"},
    {path: "../images/Mabel.jpeg", description: "Mabel wanting food"}
];

const mainImg = document.querySelector("#img");
const btn = document.querySelector("#btn");
const caption = document.querySelector("#caption");


function changeImage(imgObj){
    mainImg.src = imgObj.path;
    mainImg.alt = imgObj.description;
    caption.innerHTML =imgObj.description;
}
changeImage(images[0]);
//console.log(mainImg, btn, caption)
let currentImg = 0;

btn.addEventListener("click", function(){
    currentImg++;
    if(currentImg > images.length - 1){
        currentImg = 0;
    }
    changeImage(images[currentImg]);
})



