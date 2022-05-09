
const dog = document.querySelector("#dog");
const dogbattle = document.querySelector("#dogbattle")


dog.play();
dogbattle.play();

// assign players to start name

const btnName = document.querySelector("#btnPlayer");
const txtname = document.querySelector("#txtname");
const bname = document.querySelector("#dname");
const bscore = document.querySelector("#dscore");
const pname = document.querySelector("#pname");
const pscore = document.querySelector("#pscore");

function gatherD() {
    bname.innerHTML = "Dog";
    bscore.innerHTML = "0";
    pname.innerHTML = txtname.value;
    pscore.innerHTML = "0";
    playerChar.innerHTML = "🧑🏻‍🦱" ;
    computerChar.innerHTML = "🐶";
}

btnName.addEventListener('click', gatherD);

//Game Logic Start Here
let result = document.querySelector("#result");
let grid = document.querySelector(".grid");
let cells = document.querySelectorAll(".cell");
let playerSelect = document.querySelector(".grid");
let reset = document.querySelector("#reset")

let player = "";
let computer = "";
let gameOn = false;
let moves = 0;
let nextMoveIdx;

let computerMovesNext;
let playerMovesNext;
let nextMove;
let compWin;
let compBlock;

let board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//assign values to Player and Cpmputer
playerSelect.addEventListener('click', choosePlayer, false);

function choosePlayer(e) {
    if (e.target !== e.currentTarget && gameOn === false) {

        gameOn = true;

        player = playerChar.innerHTML = "🧑🏻‍🦱";
        computer = computerChar.innerHTML = "🐶";
    }
}

// battle ground functionality
grid.addEventListener('click', updateBoard, false);
function updateBoard(e) {
    if (e.target.className === "cell") {
        if (e.target.innerHTML !== player && e.target.innerHTML !== computer) {
            e.target.innerHTML = player;
            syncBoard();
            moves++;
            console.log('Player Moves:', playerMoves());
            console.log("Valid Moves Before:", validMoves());
            computerChoose();
            computerPlay();
            console.log("Computer Moves:", computerMoves());
            console.log("Valid Moves After:", validMoves());
            declareWinner();
        }
    }
    pname.innerHTML = txtname.value;
    bname.innerHTML = "  Dog";
}


// sync board array with input placed inside DOM cells
function syncBoard() {
    for (let i = 0; i < board.length; i++) {
        if (cells[i].innerHTML !== "") {
            board[i] = cells[i].innerHTML;
        }
    }
}

// return list of empty board spots
function validMoves() {
    return board.filter(function (spot) {
        return spot != "🐶" && spot != "🧑🏻‍🦱";
    });
}


// log indexes current of player moves
function playerMoves() {
    let idx = [];
    let i = -1;
    while ((i = board.indexOf(player, i + 1)) != -1) {
        idx.push(i);
    }
    return idx;
}

// log indexes current of computer moves
function computerMoves() {
    let idx = [];
    let i = -1;
    while ((i = board.indexOf(computer, i + 1)) != -1) {
        idx.push(i);
    }
    return idx;
}

function computerChoose() {

    for (  let i = 1; i < validMoves().length; i++) {

        computerMovesNext = computerMoves().slice();
        playerMovesNext = playerMoves().slice();
        nextMove = validMoves()[i];
        computerMovesNext.push(nextMove);
        // console.log("computer nxt", computerMovesNext);
        playerMovesNext.push(nextMove);
        // console.log("player nxt", playerMovesNext);

        for (  let j = 0; j < wins.length; j++) {
            if (wins[j].every(e => computerMovesNext.indexOf(e) > -1)) {
                // console.log("BEAST WIN", nextMove);
                compWin = nextMove;
            }
            if (wins[j].every(e => playerMovesNext.indexOf(e) > 1)) {
                // console.log("BEAST BLOCK", nextMove);
                compBlock = nextMove;
            }
        }

    }
}

// decision of computer move
function computerPlay() {

    moves++;

    let len = validMoves().length;
      let rand = validMoves()[Math.floor(Math.random() * len)];
    console.log("random move", rand);
    if (board[4] === 4) {
        board[4] = cells[4].innerHTML = computer;
    }
    else if (board[4] === player && board[0] !== computer) {
        board[0] = cells[0].innerHTML = computer;
    }
    else if (board[compBlock] !== player && board[compBlock] !== computer && board[compBlock] !== undefined) {
        board[compBlock] = cells[compBlock].innerHTML = computer;
    }
    else if (board[rand] !== undefined) {
        board[rand] = cells[rand].innerHTML = computer;
    }
}

// analyze the board to determine a pick winner
function winner(gameBoard, move) {

    if (
        (gameBoard[0] == move && gameBoard[1] == move && gameBoard[2] == move) ||
        (gameBoard[3] == move && gameBoard[4] == move && gameBoard[5] == move) ||
        (gameBoard[6] == move && gameBoard[7] == move && gameBoard[8] == move) ||
        (gameBoard[0] == move && gameBoard[3] == move && gameBoard[6] == move) ||
        (gameBoard[1] == move && gameBoard[4] == move && gameBoard[7] == move) ||
        (gameBoard[2] == move && gameBoard[5] == move && gameBoard[8] == move) ||
        (gameBoard[0] == move && gameBoard[4] == move && gameBoard[8] == move) ||
        (gameBoard[2] == move && gameBoard[4] == move && gameBoard[6] == move)
    ) {
        return true;
    } else {
        return false;
    }

}

// logic to decide who wins or if it's a draw
function declareWinner() {

    if (gameOn === true) {

        let a, b;
        pname.innerHTML = a;
        a = pname.value;
        bname.innerHTML =b;
        b = bname.value;
        if (winner(board, player)) {
            result.innerHTML = `🧑🏻‍🦱 wins! I am the beast killer. HAHAHA`;
            pname.innerHTML = txtname.value;
            pscore.innerHTML = "10";
            bname.innerHTML = "Dog";
            bscore.innerHTML = "0";
            defeat.play();
            gameOn = false;
        } else if (winner(board, computer)) {
            result.innerHTML = `🐶 wins! It's better to leave the Battle Field. HAHA`;
            pname.innerHTML = txtname.value;
            pscore.innerHTML = "0";
            bname.innerHTML = "Dog";
            bscore.innerHTML = "10";            
            dog.play();
            gameOn = false;
        } else if (validMoves().length === 0) {
            result.innerHTML = "🐶 You Can't Defeat me! HAHAHA";
            //alert("Draw between 🐶 and 🧑🏻‍🦱");
            pname.innerHTML = txtname.value;
            pscore.innerHTML = "0";
            bname.innerHTML = "Dog";
            bscore.innerHTML = "0";   
            dog.play();
        }
    }
}

// reset battle ground
reset.addEventListener('click', function () {

    console.clear();

    board = [
        0, 1, 2,
        3, 4, 5,
        6, 7, 8
    ];

    cells.forEach(function (cell) {
        cell.innerHTML = "";
    });

    result.innerHTML = "BuHAHAHA! I'll Kill you! HAHAHA";


}, false);
