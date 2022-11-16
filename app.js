const theNumber = document.getElementById('the-number');
const increase = document.getElementById('increment');
const decrease = document.getElementById('decrement');
const reset = document.getElementById('reset-to-zero');

let counter = 0;
theNumber.innerText = counter;

function incrementBy1() {
    counter++
    theNumber.innerText = counter;
}
function decrementBy1() {
    counter--
    theNumber.innerText = counter;
}
function resetToZero(){
    counter = 0;
    theNumber.innerText = counter;
}

increase.addEventListener('click', incrementBy1);
decrease.addEventListener('click', decrementBy1);
reset.addEventListener('click', resetToZero);