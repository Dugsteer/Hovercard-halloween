// CONST items from the DOM
const inputWord = document.getElementById('word');
const underscore = document.getElementById('underScore');
const inputPanel = document.getElementById('input-panel');
const playing = document.getElementById('playing');
const letterInput = document.getElementById('letterInput');
const letter= document.getElementById('letter');
const title= document.getElementById('title');
const alphaWords = document.getElementById('alpha');
const balloon = document.getElementById('balloon');
const wordInput = document.getElementById('wordInput');
const tombDiv = document.getElementById('tombdiv');
const ghostDiv = document.getElementById('ghostdiv');
const gameboard = document.getElementById('gameboard');

const ghost1 = document.getElementById('tomb1');
const tomb2 = document.getElementById('tomb2');
const tomb3 = document.getElementById('tomb3');
const tomb4 = document.getElementById('tomb4');
const tomb5 = document.getElementById('tomb5');
const tomb6 = document.getElementById('tomb6');
const tomb7 = document.getElementById('tomb7');
const tomb8 = document.getElementById('tomb8');

// Initialize Arrays & Variables
let answerArray = [];
let secretWord = [];
let usedLettersArray = [];
let secretArray = [];
let v;
let check = true;
let good = [];

const evilWords = ['witch', 'ghost', 'pumpkin', 'trick', 'treat', 'bat', 'cauldron', 'skeleton', 'broomstick', 'clown', 'black', 'cat', 'bones', 'candy', 'candle', 'coffin', 'tomb', 'werewolf', 'vampire','creepy', 'scary', 'haunted', 'disguise', 'fangs', 'mummy', 'Frankenstein', 'monster', 'grave', 'skull', 'horror', 'magic', 'moon', 'nightmare', 'shadow', 'spell', 'spider', 'web', 'wizard', 'zombie'];
tombArray = ['tomb1', 'tomb2', 'tomb3', 'tomb4', 'tomb5', 'tomb6', 'tomb7', 'tomb8'];
ghostArray = ['spirit1', 'spirit2', 'spirit3', 'spirit4', 'spirit5', 'spirit6', 'spirit7', 'spirit8'];

//Select a random word from the list.
const evilWord = evilWords[Math.floor(Math.random() * evilWords.length)];
console.log(evilWord);


// Make the screen flash before the lose page appears
function blinder(){
  ghostDiv.classList.add('blind');
  setTimeout(iWin, 500);
}

// Make the tombstones vanish one by one, when wrong letters are chose.
function tombStoneVanish(){
  let k = window[tombArray[0]];
  k.classList.add('goodByeTomb');
  tombArray.shift();
  ghostAppear();
};

//Activate the lose screen.
function iWin(){
  gameboard.style.backgroundImage = "url('../img/halloween-end.jpg')";
  underscore.style.fontSize = "5rem";
  underscore.style.marginTop = "-16rem";
  underscore.style.lineHeight = "7rem";
  underscore.style.color = "#fff";
  underscore.innerHTML = secretWord ? `The word was <br> '${secretWord}'`: `The word was '${evilWord}'`;
  underscore.classList.add('bigger');
  const yesWay = new Audio('../sounds/evil-laugh.wav');
  document.activeElement.blur();
  yesWay.play();
  alphaWords.style.display = "none";
  tombDiv.style.display = "none";
  ghostDiv.style.display = "none";
  letter.style.display = "none";
  letterInput.style.display = "none";
  setTimeout(startAgain, 5000);

}

//Cause ghosts to replace the tombstones and rise up when the wrong letters are chosen.
function ghostAppear(){
  if (!ghostArray[1]) {
    let k = window[ghostArray[0]];
    k.classList.add('spiritRise');
    ghostArray.shift();
    setTimeout(blinder, 500);
    console.log("Boo!");
  } 
    let k = window[ghostArray[0]];
    k.classList.add('spiritRise');
    ghostArray.shift();
  };
  


// If the user wants a random word.
function chooseWord() {
secretWord.push(evilWord.toUpperCase().replace(/\s/, ""));
for (var i = 0; i < secretWord[0].length; i++) {
  secretArray.push(secretWord[0][i]);
  letter.focus();
};
playing.style.display = "flex";
  inputPanel.style.display = "none";
  title.style.display = "none";
  addUnderScores();
  letter.focus();
};

//If the user wants to add their own word.
function submit() {
    !inputWord.value ? alert("Please input a word") : secretWord.push(inputWord.value.toUpperCase().replace(/\s/, ""));
    for (var i = 0; i < secretWord[0].length; i++) {
    secretArray.push(secretWord[0][i]);
};
underscore.style.display = "inline-block";
playing.style.display = "flex";
inputPanel.style.display = "none";
title.style.display = "none";
    addUnderScores();
    letter.focus();
};

//Lay out as many underscores as letters in the secret word
function addUnderScores() {
    for (let i = 0; i < secretArray.length; i++) {
        answerArray.push(" _ ");
        underscore.textContent = answerArray.join(' ').trim();
    }
};

//Input a letter to try, check if it's a letter.
function addLetter() {
  good = [];
  v = letter.value.toUpperCase();
    if (letter.value.length > 1 || !letter.value.match(/[a-z]/i)) {
       v = " ";
    } else if (!usedLettersArray.includes(v) &&!secretArray.includes(v) && letter.value.match(/[a-z]/i)) {
            usedLettersArray.push(v);
            tombStoneVanish();
        joinedAlphabet = usedLettersArray.join(" ");
        alphaWords.textContent = joinedAlphabet;
    };
    letter.value="";
    checkLetter(v);
    letter.focus();
};

// Add correct letters to the DOM and check if it's OK
function isGood(){
  good.push(underscore.textContent.replace(/\s/g, ""));
  if(secretWord[0] === good[0]) {
 setTimeout(youWin, 500); 
}
}

// Make a balloon go up on the end win screen.
function riseUp(){
  balloon.classList.add('riseUp');
}

//Begin again
function startAgain(){
  location.reload();
}

//Activate the end win screen.
function youWin() {
  underscore.textContent = "You Win!";
  underscore.style.marginTop = "-3rem";
  const noWay = new Audio('../sounds/no2.wav');
  riseUp();
  document.activeElement.blur();
  noWay.play();
  underscore.style.fontSize = "5rem";
  alphaWords.style.display = "none";
  tombDiv.style.display = "none";
  ghostDiv.style.display = "none";
  setTimeout(startAgain, 5000); 
  }

//Check if a letter is correct and add it to the DOM.
function checkLetter(v){
  //adding the indexes of occurences of the letter
  for(let i = 0; i < secretArray.length; i++){
    if (secretArray[i] === v){
      answerArray[i] = v;
    }
    underscore.textContent = answerArray.join(' ').trim();
  }
};



  //Automatically focus on inputting a word
  inputWord.focus();

  // Enter letter using ENTER key nb "keyCode" depreciated... 
    letter.addEventListener('keyup', function(e) {
      if(e.keyCode === 13){
        addLetter();
        isGood();
      }
    });

  
