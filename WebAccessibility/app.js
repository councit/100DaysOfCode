const keyboard = document.querySelector(".keyboard-wrapper");
const nameInput = document.querySelector(".name-input");
const spaceKey = document.querySelector(".space")
const timerButtons = document.querySelector(".project-wrapper")
const timerText = document.querySelector(".timer-text")




keyboard.addEventListener('keypress', e => {
    console.log(e.target)
    if (e.target.innerText !==   "Space"){
        nameInput.value += e.target.innerText;
        console.log(e.target)
    }else {
        nameInput.value += " ";
    }

} )



var myTimer;

timerButtons.addEventListener('keypress', e => {
    if (e.target.innerText == "Start"){
        myTimer = setInterval(startTimer, 1000)
    }
})
timerButtons.addEventListener('keypress', e => {
    if (e.target.innerText == "Stop"){
        clearInterval(myTimer);
    }
})
timerButtons.addEventListener('keypress', e => {
    if (e.target.innerText == "Clear"){
        timerText.innerText = "0";
        nameInput.value = "";
    }
})




function startTimer() {
    let result = parseInt(timerText.innerText) + 1;
    timerText.innerText = result;   
}