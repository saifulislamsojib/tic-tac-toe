let trueFalse = true;
document.querySelector('.boxes').addEventListener("click", (e) => {
    game(e);
    e.target.style.cursor = 'not-allowed';
})
// document.querySelector('.boxes').addEventListener("mouseover", (e) => {
//     game(e);
//     e.target.style.cursor = 'not-allowed';
// })

function game(e) {
    if (e.target.innerHTML === '') {
        if (trueFalse === true) {
            e.target.innerHTML = "<div class='circle'><div></div></div>";
            trueFalse = false;
        } else {
            e.target.innerHTML += '<div class="cross"><div class="cross-1"><div></div></div><div class="cross-2"><div></div></div></div>';
            trueFalse = true;
        }
    }
}