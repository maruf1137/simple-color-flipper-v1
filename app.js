const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    const rendomNumber = getRendomNumber();
    console.log(rendomNumber);
    document.body.style.background = colors[rendomNumber];
    color.textContent = colors[rendomNumber]
})

// console.log(Math.random())
function getRendomNumber(){
    return Math.floor(Math.random()* colors.length);
}



