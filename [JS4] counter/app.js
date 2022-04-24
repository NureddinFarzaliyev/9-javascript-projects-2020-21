let count = document.querySelector('.count');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

increaseBtn.addEventListener('click', function(){
    count.textContent = parseInt(count.textContent) + 1;
});

decreaseBtn.addEventListener('click', function(){
    count.textContent = parseInt(count.textContent) - 1;
});

resetBtn.addEventListener('click', function(){
    count.textContent = count.textContent = '0';
});