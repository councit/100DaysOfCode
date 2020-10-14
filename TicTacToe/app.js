function checkWinner(array) {
    if (array[0][0] == "X" && array[0][1] == "X" && array[0][2] == "X") {
        console.log("X wins")
    }else if(array[1][0] == "X" && array[1][1] == "X" && array[1][2] == "X"){
        console.log("X wins")
    }else if(array[2][0] == "X" && array[2][1] == "X" && array[2][2] == "X"){
        console.log("X wins")
    }else if(array[0][0] == "X" && array[1][0] == "X" && array[2][0] == "X"){
        console.log("X wins")
    }else if(array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X"){
        console.log("X wins")
    }else if(array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X"){
        console.log("X wins")
    }else if(array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X"){
        console.log("X wins")
    }else if(array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X"){
        console.log("X wins")
    }else if(array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O"){
        console.log("O wins")
    }else if(array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O"){
        console.log("O wins")
    }else if(array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O"){
        console.log("O wins")
    }else if(array[0][1] == "O" && array[1][1] == "O" && array[2][1] == "O"){
        console.log("O wins")
    }else if(array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O"){
        console.log("O wins")
    }else if(array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O"){
        console.log("O wins")
    }else if(array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O"){
        console.log("O wins")
    }else return false
  
}

var Game = {
    board: [[],[],[]],
    player1: "",
    player2: ""
}

function createNewGame(player1, player2, newGameObj){
    newGameObj.player1 = player1;
    newGameObj.player2 = player2;
    return newGameObj
}

//DOM Functions

var boardSelection = document.querySelector('.game-board');
var characterSelection = document.querySelector('.player-selection')
var clearBtn = document.querySelector('.clear-btn')
var activeChar;

function insertPic(event) {  
    event.path[0].style.backgroundImage = activeChar;
}

function selectCharacter(event) {
    if(event.path[1].className == "dwight"){
        activeChar = "url('./assets/dwight.jpeg')"
    }else {
        activeChar = "url('./assets/jim.jpg')"
    } 
}



boardSelection.addEventListener('click', (e) => insertPic(e));

characterSelection.addEventListener('click', (e) => selectCharacter(e));

clearBtn.addEventListener('click', () => {
    for(let i=1; i < 10; i++ ){
        document.querySelector('.square-' + i).style.removeProperty("background-image")
        
    }
})