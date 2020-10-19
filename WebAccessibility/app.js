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

const modalOpenBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal-wrapper');
const modalCloseBtn = document.querySelector('.close-modal-btn');
const modalBtns = document.querySelector('.modal-btn-wrapper')
let isModalOpen = false



modalOpenBtn.addEventListener("click", open);
modalCloseBtn.addEventListener("click", close);

function open() {
    let currentItem = document.activeElement;



    modal.style.display = "block";

    modal.addEventListener('keydown', trap);
}

function close() {
    modal.style.display = "none";
}


function trap(e){
    var focusEvents = modal.querySelectorAll('a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary, [tabindex^="0"], [tabindex^="1"], [tabindex^="2"], [tabindex^="3"], [tabindex^="4"], [tabindex^="5"], [tabindex^="6"], [tabindex^="7"], [tabindex^="8"], [tabindex^="9"]')
    focusEvents = Array.prototype.slice.call(focusEvents);
    var firstItem = focusEvents[0];
    var lastItem = focusEvents[focusEvents.length - 2];
    if(e.keyCode === 9){
        console.log("tab")
        if(e.shiftKey) {
            if(document.activeElement === firstItem){
                e.preventDefault();
                lastItem.focus();

            }
        }else {
            if(document.activeElement === lastItem){
                e.preventDefault();
                firstItem.focus();
            }
        }
    }

}



