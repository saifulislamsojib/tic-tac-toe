let trueFalse = true;
const a = [];
const b = [];
const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.querySelector('.boxes').addEventListener("click", (e) => {
    const currentClick = Number(e.target.getAttribute("data-count"));
    game(e);
    e.target.style.cursor = 'not-allowed';
})
function game(e) {
    if (e.target.innerHTML === '') {
        if (trueFalse === true) {
            console.log(e.target)
            e.target.innerHTML += `<div class='circle'>
                                    </div>`;
            trueFalse = false;
        } else {
            e.target.innerHTML += `<div class="cross">
                                        <div class="cross-1">
                                        </div>
                                        <div class="cross-2">
                                        </div>
                                    </div>`;
            trueFalse = true;
        }
    }
}