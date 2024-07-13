// random number generator
let min = 1;
let max = 6;
var inputTxt = document.getElementById("inputTxt");
var youWin = document.getElementById("youWin");


document.getElementById("generate").onclick = () => {
    var guessNumber = document.getElementById("guessNumber").value;
    guessNumber = Number(guessNumber);

    if (guessNumber == '' || guessNumber <= 0 || guessNumber > max) {
        if (guessNumber > max) {
            window.alert("number must not be greater than 6");
        } else {
            window.alert("Enter your guess number first from 1-6");
        }
    } else {
        let randomNumber = Math.floor(Math.random() * max) + min;

        console.log(`your guessed number: ${guessNumber}`);
        inputTxt.value = randomNumber;
        console.log(`Random number generated: ${randomNumber}`);    

        if (guessNumber == randomNumber) {
            youWin.textContent = "YOU WON";
        } else {
            youWin.textContent = "WRONG NUMBER"
        }
    }    
}
document.getElementById("resetGenerate").onclick = () => {
    document.getElementById("guessNumber").value = '';
    document.getElementById("inputTxt").value = 0;

    document.getElementById("youWin").textContent = "ROLL THE DICE";
    console.log("reset");
}