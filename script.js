document.getElementById('random-btn').addEventListener("click", function () {
    const randomInput = document.getElementById('random-input');
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    randomInput.value = randomNumber;
});

const buttonContainer = document.getElementById('button-container').addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //handle backspace
        // handle clear
        if (digit === 'C') {
            const typed = document.getElementById('screen');
            typed.value = "";
        }

    }
    else {
        const typed = document.getElementById('screen');
        typed.value = typed.value + digit;
    }
});

//verify pin
function verifyPin() {
    const pin = document.getElementById('random-input').value;
    const typedPin = document.getElementById('screen').value;
    if (pin === typedPin) {
        displayMatch('block', 'none');
    }
    else {
        displayMatch('none', 'block');
    }
}

function displayMatch(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect');
    incorrect.style.display = incorrectStatus;
}