for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>';
}

let hod = 0;

document.getElementById('game').onclick = function(event) {
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
        event.target.innerHTML = 'x';
        } else {
            event.target.innerHTML = 'o';
        }
    }
    hod++;
    checkWinner();
}

function checkWinner() {
    let allblock = document.getElementsByClassName('block');
    /* HORIZONT X */
    if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x') alert('Победили крестики');
    if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x') alert('Победили крестики');
    if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x') alert('Победили крестики');
    /* VERTICAL X */
    if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x') alert('Победили крестики');
    if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x') alert('Победили крестики');
    if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x') alert('Победили крестики'); 
    /* DIAGONAL X 1 */
    if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x') alert('Победили крестики');
    /* DIAGONAL X 2 */
    if (allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x') alert('Победили крестики');
    
    /* HORIZONT O */
    if (allblock[0].innerHTML == 'o' && allblock[1].innerHTML == 'o' && allblock[2].innerHTML == 'o') alert('Победили нолики');
    if (allblock[3].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[5].innerHTML == 'o') alert('Победили нолики');
    if (allblock[6].innerHTML == 'o' && allblock[7].innerHTML == 'o' && allblock[8].innerHTML == 'o') alert('Победили нолики');
    /* VERTICAL O */
    if (allblock[0].innerHTML == 'o' && allblock[3].innerHTML == 'o' && allblock[6].innerHTML == 'o') alert('Победили нолики');
    if (allblock[1].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[7].innerHTML == 'o') alert('Победили нолики');
    if (allblock[2].innerHTML == 'o' && allblock[5].innerHTML == 'o' && allblock[8].innerHTML == 'o') alert('Победили нолики'); 
    /* DIAGONAL O 1 */
    if (allblock[0].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[8].innerHTML == 'o') alert('Победили нолики');
    /* DIAGONAL O 2 */
    if (allblock[2].innerHTML == 'o' && allblock[4].innerHTML == 'o' && allblock[6].innerHTML == 'o') alert('Победили нолики');
    
}