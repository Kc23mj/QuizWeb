// let start = document.getElementById("start");

// start.addEventListener("click",()=>{
//     document.querySelector(".welcome").innerHTML = "<b>Bye<b> and best of luck!!"
// })

// document.addEventListener("keydown",(e)=>{
//     console.log("You have pressed "+ e.key);
// } )
let marksObtained = 0;
document.addEventListener('DOMContentLoaded', () => {
    console.log(window.marks)
    marksObtained = window.marks;
    console.log(marksObtained)
})

let time = 10;
setInterval(() => {
    document.querySelector(".timer span").innerHTML = time
    if (time > 0) { time = time - 1; }

    if (time == 0) {
        setTimeout(() => {
            console.log("quiz1 time done")
            window.location.href = './quiz2.html';
        }, 2000);

    }

}, 1000);

let correctOptClicked = false;
let incorrectOptClicked = false;

document.getElementById('incorrect').addEventListener("click", function () {
    incorrectOptClicked = true;
})
document.getElementById("correct").addEventListener("click", () => {
    correctOptClicked = true;
});

document.getElementById('next').addEventListener('click', function () {
    if (correctOptClicked) {
        marksObtained += 5;
        console.log("marks quiz "+marksObtained);
        window.marks = marksObtained
        
        
      
        

    }
    else if (incorrectOptClicked) {
        marksObtained -= 1
        // console.log(marksObtained);
        window.marks = marksObtained
       
        

    }
    
});





