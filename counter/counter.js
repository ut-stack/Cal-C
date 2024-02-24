
document.addEventListener('DOMContentLoaded', function() {
    const dec = document.getElementById('dec');
const reset = document.getElementById('reset');
const inc = document.getElementById('inc');
const countlable = document.getElementById('countlable');

let count = 0;

inc.onclick = function(){
    count++;
    countlable.textContent = count;
}

dec.onclick = function(){
    count--;
    countlable.textContent = count;
}

reset.onclick = function(){
    count = 0 ;
    countlable.textContent = count;
}
});
