let isTrue = true;
const xPlayer = document.getElementById('x-player');
const oPlayer = document.getElementById('o-player');
const reset = document.getElementById('reset');
const winner = document.getElementById('winner');
const gameOver = document.querySelector('.game-over');
const Boxes = document.querySelector('.boxes');
players(xPlayer, false, oPlayer);
players(oPlayer, true, xPlayer);
function players(player, trueFalse, another) {
    player.addEventListener('click', () => {
        isTrue = trueFalse;
        player.setAttribute('disabled', '');
        player.classList.add("disabled");
        another.classList.remove("disabled");
        another.removeAttribute('disabled');
    });
}

let oWin = [
    [], [], [], [], [], [], [], []
]
let xWin = [
    [], [], [], [], [], [], [], []
]
let draw = [];
const boxes = document.getElementsByClassName('box');
[...boxes].map((box, i) => {
    box.addEventListener('click', () => {
        game(box, i);
        box.style.cursor = 'not-allowed';
    })
    resetBtn(box);
})

function resetBtn(box) {
    reset.addEventListener('click', () => {
        box.innerHTML = '';
        oPlayer.setAttribute('disabled', '');
        oPlayer.classList.add("disabled");
        xPlayer.classList.remove("disabled");
        xPlayer.removeAttribute('disabled');
        isTrue = true;
        box.style.cursor = 'pointer';
        gameOver.style.display = 'none';
        Boxes.style.display = 'grid';
        oWin = [
            [], [], [], [], [], [], [], []
        ]
        xWin = [
            [], [], [], [], [], [], [], []
        ]
        draw = [];
    })
}

function game(box, i) {
    if (!box.innerHTML) {
        if (isTrue) {
            box.innerHTML = `<div class='circle'>
                            </div>`;
            isTrue = false;
            xPlayer.setAttribute('disabled', '');
            xPlayer.classList.add("disabled");
            gameWin(i, oWin, 'O');
        }
        else {
            box.innerHTML = `<div class="cross">
                                <div class="cross-1">
                                </div>
                                <div class="cross-2">
                                </div>
                            </div>`;
            isTrue = true;
            oPlayer.setAttribute('disabled', '');
            oPlayer.classList.add("disabled");
            gameWin(i, xWin, 'X');
        }
    }
}
function gameWin(i, Win, p) {
    if (i == 0 || i == 1 || i == 2) {
        Win[0].push(i);
    }
    if (i == 3 || i == 4 || i == 5) {
        Win[1].push(i);
    }
    if (i == 6 || i == 7 || i == 8) {
        Win[2].push(i);
    }
    if (i == 0 || i == 3 || i == 6) {
        Win[3].push(i);
    }
    if (i == 1 || i == 4 || i == 7) {
        Win[4].push(i);
    }
    if (i == 2 || i == 5 || i == 8) {
        Win[5].push(i);
    }
    if (i == 0 || i == 4 || i == 8) {
        Win[6].push(i);
    }
    if (i == 2 || i == 4 || i == 6) {
        Win[7].push(i);
    }
    draw.push(i);
    if (Win[0].length == 3 || Win[1].length == 3 || Win[2].length == 3 || Win[3].length == 3 || Win[4].length == 3 || Win[5].length == 3 || Win[6].length == 3 || Win[7].length == 3) {
        setTimeout(() => {
            Boxes.style.display = 'none';
            gameOver.style.display = 'block';
            winner.innerText = `${p}' Win`;
        }, 100);
    }
    else {
        if (draw.length == 9) {
            setTimeout(() => {
                Boxes.style.display = 'none';
                gameOver.style.display = 'block';
                winner.innerText = 'Game Draw';
            }, 100);
        }
    }
}