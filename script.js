// function play(){
//       const homeSection = document.getElementById('home-screen');
//       homeSection.classList.add('hidden');
//       const playGround = document.getElementById('play-ground');
//       playGround.classList.remove('hidden');
// }

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
      element.classList.add('bg-orange-400')

}


document.addEventListener('keyup', function(event){
      const playerPressed = event.key;
      const playerPressedElementToUpperCase = playerPressed.toUpperCase();

      const currentAlphabetElement = document.getElementById('show-alphabet');
      const currentAlphabet = currentAlphabetElement.innerText;


      if(playerPressedElementToUpperCase == currentAlphabet){
            console.log("you got a new life");
      }else{
            console.log('you lost a life');
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