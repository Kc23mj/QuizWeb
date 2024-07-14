let marksObtained = 0;

let time = 10;
setInterval(() => {
    document.querySelector(".timer span").innerHTML = time
    if (time > 0) { time = time - 1; }

    if (time == 0) {
        setTimeout(() => {
            console.log("quiz1 time done")
            window.location.href = './quiz3.html';
        }, 2000);

    }

}, 1000);
 
let correctOptClicked = false;
let incorrectOptClicked = false;

document.getElementById('incorrect').addEventListener("click",function(){
    incorrectOptClicked = true;
})
document.getElementById("correct").addEventListener("click",()=>{
    correctOptClicked = true;
});

document.getElementById('next').addEventListener('click', function() {
    if (correctOptClicked) {
        marksObtained += 5;
        
    }
    else if(incorrectOptClicked){
        marksObtained -= 1
    }
});

// script2.js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log(window.sharedVariable); // Output: "Initial Value"
    window.sharedVariable = "Updated Value";
    console.log(window.sharedVariable); // Output: "Updated Value"
});
