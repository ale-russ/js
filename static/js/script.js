//challeng 1; Your Age in Days
function ageInDays() {
    var birthYear = prompt("What year were you born...Good friend!")
    var daysAge = (2020 - birthYear) * 365;
    console.log(daysAge);
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + daysAge + " days Old");
    h1.setAttribute('id', "daysAge");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById('daysAge').remove();
}
//###################################################################

//challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen")
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"      //for remote source
    //image.src = "static/images/5us.gif"       //for local source
    div.appendChild(image)
}
//###################################################################

//challenge 3: Rocks, Papers, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChioce, botChoice;
    humanChioce = yourChoice.id;

    botChoice = numberToChoice(randomRpsInt())
    console.log('Computer Choice: ', botChoice)

    results = decideWinner(humanChioce, botChoice); //[0,1] human lost | bot won
    console.log(results)

    message = finalMessage(results); //{'message': 'You lost!', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randomRpsInt() {
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            'message': 'You lost!', 'color': 'red'
        }
    } else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' }
    } else {
        return { 'message': 'You won!', 'color': 'green' }
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px ;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(245, 38, 24,1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
//###################################################################

//Challeng 4: Change the Color of All Buttons

//get all the orignal buttons and save them in an array
var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons)

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
//console.log(copyAllButtons)

function buttonColorChange(buttonPress) {
    //console.log(buttonPress.value);
    if (buttonPress.value === 'red') {
        buttonRed();
    } else if (buttonPress.value === 'green') {
        buttonGreen();
    } else if (buttonPress.value === 'blue') {
        buttonBlue();
    } else if (buttonPress.value === 'black') {
        buttonBlack();
    } else if (buttonPress.value === 'yellow') {
        buttonYellow();
    } else if (buttonPress.value === 'white') {
        buttonWhite();
    } else if (buttonPress.value === 'reset') {
        buttonColorReset();
    } else if (buttonPress.value === 'random') {
        randomColors();
    }
}

//red button
function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

//green button
function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

//blue button
function buttonBlue() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary')
    }
}

//black button
function buttonBlack() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-dark')
    }
}

//white button
function buttonWhite() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('#1C6245');
    }
}

//yellow button
function buttonYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

//reset all buttons to thier original color
function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

//assign random colors
randomColors = () => {
    console.log(getRandomColor())
    //let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++) {
        //let randomNumber = Math.floor(Math.random() * 4)
        //all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        //all_buttons[i].classList.add(getRandomColor());
        all_buttons[i].style.backgroundColor = getRandomColor()
    }
}

//create Random 256 random colors
getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//###################################################################
//Challeng 5: Blackjack

let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

function blackjackHit() {
    //alert("Ouch, you just clicked me")
    let card = randomCard();
    console.log(card)
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
}

//create random cards
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}



function showCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = `/static/images/PNG/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

//a function that removes all the dealt cards from both the player and dealer
function blackjackDeal(activePlayer) {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }

    yourImages.length = 0;

    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }

    dealerImages.length = 0;

    console.log(yourImages);
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        //If adding 11 keeps me below 21, add 11, otherwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(YOU) {
    document.querySelector(YOU['scoreSpan']).textContent = YOU['score'];
}

function blackjackStand() {

}