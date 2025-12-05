const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number-btn, .same-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
document.querySelector('.clear-btn').addEventListener('click', () => {
    display.value = '';
});
document.querySelector('.qual-btn').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});
const backspaceBtn = document.querySelector('.backspace-btn');
backspaceBtn.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
