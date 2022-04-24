const screen = document.querySelector('.calc-display')
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const dZero = document.querySelector('.d-zero');
const dot = document.querySelector('.dot');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const clean = document.querySelector('.clean');
const equal = document.querySelector('.equal');

one.addEventListener('click', function(){
    screen.value =  screen.value += '1';
});

two.addEventListener('click', function(){
    screen.value =  screen.value += '2';
});

three.addEventListener('click', function(){
    screen.value =  screen.value + '3';
});

four.addEventListener('click', function(){
    screen.value =  screen.value + '4';
});

five.addEventListener('click', function(){
    screen.value =  screen.value + '5';
});

six.addEventListener('click', function(){
    screen.value =  screen.value + '6';
});

seven.addEventListener('click', function(){
    screen.value =  screen.value + '7';
});

eight.addEventListener('click', function(){
    screen.value =  screen.value + '8';
});

nine.addEventListener('click', function(){
    screen.value =  screen.value + '9';
});

zero.addEventListener('click', function(){
    screen.value =  screen.value + '0';
});

dZero.addEventListener('click', function(){
    screen.value =  screen.value + '00';
});

dot.addEventListener('click', function(){
    screen.value =  screen.value + '.';
});

clean.addEventListener('click', function(){
    screen.value =  "";
});

divide.addEventListener('click', function(){
    screen.value = screen.value + '/';
});

multiply.addEventListener('click', function(){
    screen.value = screen.value + '*';
});

plus.addEventListener('click', function(){
    screen.value = screen.value + '+';
});

minus.addEventListener('click', function(){
    screen.value = screen.value += '-';
});

equal.addEventListener('click', function(){
    screen.value = eval(screen.value);
});