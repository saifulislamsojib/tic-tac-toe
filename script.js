let isTrue = true;
const xPlayer = document.getElementById('x-player');
const oPlayer = document.getElementById('o-player');
const reset = document.getElementById('reset');
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
const win = {
    w1: [0, 1, 2],
    w2: [3, 4, 5],
    w3: [6, 7, 8],
    w4: [0, 3, 6],
    w5: [1, 4, 7],
    w6: [2, 5, 8],
    w7: [0, 4, 8],
    w8: [2, 4, 6]
};
const boxes = document.getElementsByClassName('box');
[...boxes].map((box, i) => {
    box.addEventListener('click', () => {
        game(box);
        box.style.cursor = 'not-allowed';
    })
    reset.addEventListener('click', () => {
        box.innerHTML = '';
        oPlayer.setAttribute('disabled', '');
        oPlayer.classList.add("disabled");
        xPlayer.classList.remove("disabled");
        xPlayer.removeAttribute('disabled');
        isTrue = true;
        box.style.cursor = 'pointer';
    })
})
function game(box) {
    if (!box.innerHTML) {
        if (isTrue) {
            box.innerHTML += `<div class='circle'>
                                    </div>`;
            isTrue = false;
            xPlayer.setAttribute('disabled', '');
            xPlayer.classList.add("disabled");
        }
        else {
            box.innerHTML += `<div class="cross">
                                    <div class="cross-1">
                                    </div>
                                    <div class="cross-2">
                                    </div>
                                </div>`;
            isTrue = true;
            oPlayer.setAttribute('disabled', '');
            oPlayer.classList.add("disabled");
        }
    }
}