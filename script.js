
function hiddenElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('hidden');

}
function showElementById(elementId){
      const element = document.getElementById(elementId);
      element.classList.remove('hidden');
}

function getARandomAlphabet(){
      const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
      const alphabets= alphabetString.split('');
      

      const randomNumber = Math.random()*25;
      const index =Math.round(randomNumber);
      const alphabet = alphabets[index];
      return alphabet;
}


function setBackgroundColorById(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('bg-orange-400');

}
function removeBackgroundColorById(elementId){
      const element = document.getElementById(elementId);
      element.classList.remove('bg-orange-400');
}


function addScoresById(elementId){
      const element = document.getElementById(elementId);
      const elementValueText = element.innerText;
      const value = parseInt(elementValueText);
      return value;
}
function getElementTextById(elementId){
      const element = document.getElementById(elementId);
      const text = element.innerText;
      return text;
}

function setElementValueById(elementId,  value){
      const element = document.getElementById(elementId);
      element.innerText = value;

}

const audio = new Audio();
let isGamePlayOn = false;
const artBoard = document.getElementById('art-board');


document.addEventListener('keyup', function(event){
      if(isGamePlayOn == false){
            return;
      }
      const playerPressed = event.key;
      const playerPressedElementToUpperCase = playerPressed.toUpperCase();

      if(playerPressed ==='Escape'){
            gameOver();
      }

      const currentAlphabetElement = document.getElementById('show-alphabet');
      const currentAlphabet = currentAlphabetElement.innerText;


      if(playerPressedElementToUpperCase == currentAlphabet){
            removeBackgroundColorById(playerPressed);
            continuePlaying();
            audio.src = "./images/success.mp3";
            audio.play();

            const currentScoreElement = document.getElementById('current-score');
            const currentScore = addScoresById('current-score');
            const newScore = currentScore + 1;
            currentScoreElement.innerText = newScore;
      }else{

            const currentLifeElement = document.getElementById('current-life');
            const currentLife = addScoresById('current-life');
            const updateLife = currentLife - 1;
            currentLifeElement.innerText = updateLife;
            audio.src = './images/invalid.mp3';
            audio.play();
            const updateLifePercent = (updateLife/5) * 100;
            artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updateLifePercent}%, red)`;
            console.log(updateLifePercent);

            if(updateLife === 0){
                  gameOver();
            }
      }
})

























function continuePlaying(){
      const alphabet = getARandomAlphabet();
      const alphabetToUpperCase = alphabet.toUpperCase();

      const showId = document.getElementById('show-alphabet');
      showId.innerText = alphabetToUpperCase;
      // console.log(alphabet);

      setBackgroundColorById(alphabet);
}

function play(){
      // hidde everything show only the play ground
      
      hiddenElementById('home-screen');
      hiddenElementById('final-score')
      showElementById('play-ground');

      //reset score and life
      setElementValueById('current-life', 5);
      setElementValueById('current-score', 0);
      isGamePlayOn = true;

      continuePlaying();
}
function gameOver(){
      hiddenElementById('play-ground');
      showElementById('final-score');
      
      const lastScore = addScoresById('current-score');
      setElementValueById('game-score', lastScore);
      
      
      //clear the last selected alphabet
      
      const currentAlphabet = getElementTextById('show-alphabet');
      const currentAlphabetSmall = currentAlphabet.toLowerCase();
      console.log(currentAlphabet);
      removeBackgroundColorById(currentAlphabetSmall);
      isGamePlayOn = false;
      
      
      
}