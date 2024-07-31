function toggleCalculator() 
{
    const isOn = document.getElementById('on-off-switch').checked;
    const buttons = document.querySelectorAll('buttonclick');
    const display = document.getElementById('screen');
    buttons.forEach(button => {
        button.disabled = !isOn;
    });
    display.readOnly = !isOn;
    if (!isOn) {
        display.value = '';
    }
}

function clearDisplay() {
    const display = document.getElementById('screen');
    if (!display.readOnly) {
        display.value = '';
    }
}

function buttonclick(value) {
    const display = document.getElementById('screen');
    if (!display.readOnly) {
        display.value += value;
    }
}

function equalClick() {
    const display = document.getElementById('screen');
    if (!display.readOnly) {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }
}

// Initialize the calculator as off
window.onload = () => {
    toggleCalculator();
};