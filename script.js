const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const textSpan = document.getElementById('text-span');

const color = function () {
    square.style.backgroundColor = text.value;
};
btn.addEventListener('click', color);
function fun1() {
    rangeSpan.textContent = range.value;
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
}
range.addEventListener('input', fun1);