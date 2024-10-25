const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');



function  getRandomColor(){
    let r = Math.floor(Math.random() * 255) 
    let g = Math.floor(Math.random() * 255) 
    let b = Math.floor(Math.random() * 255) 
    return `rgb(${r},${g},${b})`
}

changeColorBtn.addEventListener('click', function(){
    colorBox.style.backgroundColor = getRandomColor()
})