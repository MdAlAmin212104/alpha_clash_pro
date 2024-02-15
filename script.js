
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


document.addEventListener('keyup', function(event){
      const playerPressed = event.key;
      const playerPressedElementToUpperCase = playerPressed.toUpperCase();

      const currentAlphabetElement = document.getElementById('show-alphabet');
      const currentAlphabet = currentAlphabetElement.innerText;


      if(playerPressedElementToUpperCase == currentAlphabet){
            removeBackgroundColorById(playerPressed);
            continuePlaying();

            const currentScoreElement = document.getElementById('current-score');
            const currentScore = addScoresById('current-score');
            const newScore = currentScore + 1;
            currentScoreElement.innerText = newScore;
      }else{

            const currentLifeElement = document.getElementById('current-life');
            const currentLife = addScoresById('current-life');
            const newLife = currentLife - 1;
            currentLifeElement.innerText = newLife;
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
      hiddenElementById('home-screen');
      showElementById('play-ground');
      continuePlaying();
}