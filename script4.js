let time = 10;
setInterval(() => {
    document.querySelector(".timer span").innerHTML = time 
    if(time > 0){time = time - 1;}

    if(time == 0){
        setTimeout(() => {
            console.log("quiz1 time done")
            window.location.href = './quiz5.html';
        },2000);
        
    }
   
}, 1000);